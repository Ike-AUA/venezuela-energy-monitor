import React, { useState, useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { VENEZUELA_INFRASTRUCTURE } from '../data/venezuelaConfig';

interface EnergyMapProps {
  timeRange: string;
}

const EnergyMap: React.FC<EnergyMapProps> = ({ timeRange }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [activeLayer, setActiveLayer] = useState<string[]>([
    'oil-fields',
    'refineries',
    'power-plants'
  ]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map centered on Venezuela
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [-66.5897, 7.7431], // Venezuela center
      zoom: 6,
      pitch: 45
    });

    map.current.on('load', () => {
      addInfrastructureLayers();
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  const addInfrastructureLayers = () => {
    if (!map.current) return;

    // Add oil fields
    const oilFieldsGeoJSON = {
      type: 'FeatureCollection' as const,
      features: VENEZUELA_INFRASTRUCTURE.oilFields.map(field => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [field.lng, field.lat]
        },
        properties: {
          name: field.name,
          production: field.production,
          type: field.type
        }
      }))
    };

    map.current.addSource('oil-fields', {
      type: 'geojson',
      data: oilFieldsGeoJSON
    });

    map.current.addLayer({
      id: 'oil-fields',
      type: 'circle',
      source: 'oil-fields',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['get', 'production'], 0, 10, 500000, 30],
        'circle-color': '#ef4444',
        'circle-opacity': 0.7,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#fff'
      }
    });

    // Add refineries
    const refineriesGeoJSON = {
      type: 'FeatureCollection' as const,
      features: VENEZUELA_INFRASTRUCTURE.refineries.map(refinery => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [refinery.lng, refinery.lat]
        },
        properties: {
          name: refinery.name,
          capacity: refinery.capacity,
          utilization: refinery.utilization
        }
      }))
    };

    map.current.addSource('refineries', {
      type: 'geojson',
      data: refineriesGeoJSON
    });

    map.current.addLayer({
      id: 'refineries',
      type: 'symbol',
      source: 'refineries',
      layout: {
        'icon-image': 'marker',
        'icon-size': 1.5,
        'text-field': ['get', 'name'],
        'text-offset': [0, 2],
        'text-size': 12
      },
      paint: {
        'text-color': '#fbbf24',
        'text-halo-color': '#000',
        'text-halo-width': 1
      }
    });

    // Add power plants
    const powerPlantsGeoJSON = {
      type: 'FeatureCollection' as const,
      features: VENEZUELA_INFRASTRUCTURE.powerPlants.map(plant => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [plant.lng, plant.lat]
        },
        properties: {
          name: plant.name,
          capacity: plant.capacity,
          type: plant.type,
          operational: plant.operational
        }
      }))
    };

    map.current.addSource('power-plants', {
      type: 'geojson',
      data: powerPlantsGeoJSON
    });

    map.current.addLayer({
      id: 'power-plants',
      type: 'circle',
      source: 'power-plants',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['get', 'capacity'], 0, 8, 10000, 25],
        'circle-color': [
          'case',
          ['get', 'operational'],
          '#10b981', // Green for operational
          '#ef4444'  // Red for non-operational
        ],
        'circle-opacity': 0.8,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#fff'
      }
    });

    // Add export terminals
    const terminalsGeoJSON = {
      type: 'FeatureCollection' as const,
      features: VENEZUELA_INFRASTRUCTURE.exportTerminals.map(terminal => ({
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [terminal.lng, terminal.lat]
        },
        properties: {
          name: terminal.name,
          type: terminal.type
        }
      }))
    };

    map.current.addSource('export-terminals', {
      type: 'geojson',
      data: terminalsGeoJSON
    });

    map.current.addLayer({
      id: 'export-terminals',
      type: 'circle',
      source: 'export-terminals',
      paint: {
        'circle-radius': 12,
        'circle-color': '#3b82f6',
        'circle-opacity': 0.8,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#fff'
      }
    });

    // Add popups for all layers
    addPopupHandlers();
  };

  const addPopupHandlers = () => {
    if (!map.current) return;

    ['oil-fields', 'refineries', 'power-plants', 'export-terminals'].forEach(layer => {
      map.current!.on('click', layer, (e) => {
        if (!e.features || e.features.length === 0) return;
        
        const feature = e.features[0];
        const coordinates = (feature.geometry as any).coordinates.slice();
        const properties = feature.properties;

        let popupContent = `<h3>${properties.name}</h3>`;
        
        if (layer === 'oil-fields') {
          popupContent += `
            <p><strong>Production:</strong> ${(properties.production / 1000).toFixed(0)}k bpd</p>
            <p><strong>Type:</strong> ${properties.type}</p>
          `;
        } else if (layer === 'refineries') {
          popupContent += `
            <p><strong>Capacity:</strong> ${(properties.capacity / 1000).toFixed(0)}k bpd</p>
            <p><strong>Utilization:</strong> ${(properties.utilization * 100).toFixed(0)}%</p>
            <p class="${properties.utilization < 0.2 ? 'text-red-500' : ''}">
              ${properties.utilization < 0.2 ? '⚠️ Critically low utilization' : ''}
            </p>
          `;
        } else if (layer === 'power-plants') {
          popupContent += `
            <p><strong>Capacity:</strong> ${properties.capacity} MW</p>
            <p><strong>Type:</strong> ${properties.type}</p>
            <p><strong>Status:</strong> ${properties.operational ? '✅ Operational' : '❌ Non-operational'}</p>
          `;
        } else if (layer === 'export-terminals') {
          popupContent += `<p><strong>Type:</strong> ${properties.type}</p>`;
        }

        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setHTML(popupContent)
          .addTo(map.current!);
      });

      map.current!.on('mouseenter', layer, () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });

      map.current!.on('mouseleave', layer, () => {
        map.current!.getCanvas().style.cursor = '';
      });
    });
  };

  const toggleLayer = (layerId: string) => {
    if (!map.current) return;
    
    const visibility = map.current.getLayoutProperty(layerId, 'visibility');
    
    if (visibility === 'visible') {
      map.current.setLayoutProperty(layerId, 'visibility', 'none');
      setActiveLayer(prev => prev.filter(l => l !== layerId));
    } else {
      map.current.setLayoutProperty(layerId, 'visibility', 'visible');
      setActiveLayer(prev => [...prev, layerId]);
    }
  };

  return (
    <div className="energy-map-container">
      <div className="map-controls">
        <h3>Infrastructure Layers</h3>
        <div className="layer-toggles">
          <label className="layer-toggle">
            <input 
              type="checkbox" 
              checked={activeLayer.includes('oil-fields')}
              onChange={() => toggleLayer('oil-fields')}
            />
            <span className="layer-icon" style={{ backgroundColor: '#ef4444' }}></span>
            Oil Fields
          </label>
          
          <label className="layer-toggle">
            <input 
              type="checkbox" 
              checked={activeLayer.includes('refineries')}
              onChange={() => toggleLayer('refineries')}
            />
            <span className="layer-icon" style={{ backgroundColor: '#fbbf24' }}></span>
            Refineries
          </label>
          
          <label className="layer-toggle">
            <input 
              type="checkbox" 
              checked={activeLayer.includes('power-plants')}
              onChange={() => toggleLayer('power-plants')}
            />
            <span className="layer-icon" style={{ backgroundColor: '#10b981' }}></span>
            Power Plants
          </label>
          
          <label className="layer-toggle">
            <input 
              type="checkbox" 
              checked={activeLayer.includes('export-terminals')}
              onChange={() => toggleLayer('export-terminals')}
            />
            <span className="layer-icon" style={{ backgroundColor: '#3b82f6' }}></span>
            Export Terminals
          </label>
        </div>
        
        <div className="map-legend">
          <h4>Legend</h4>
          <div className="legend-item">
            <div className="legend-circle" style={{ backgroundColor: '#ef4444' }}></div>
            <span>Oil Production (size = volume)</span>
          </div>
          <div className="legend-item">
            <div className="legend-circle" style={{ backgroundColor: '#10b981' }}></div>
            <span>Operational Power Plant</span>
          </div>
          <div className="legend-item">
            <div className="legend-circle" style={{ backgroundColor: '#ef4444', opacity: 0.8 }}></div>
            <span>Non-operational Plant</span>
          </div>
        </div>
      </div>
      
      <div ref={mapContainer} className="map-canvas" />
    </div>
  );
};

export default EnergyMap;
