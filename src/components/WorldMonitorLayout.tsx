import React, { useState } from 'react';
import { X, Menu, Layers, Filter, Settings } from 'lucide-react';
import './WorldMonitorLayout.css';

interface FloatingPanelProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
}

export const FloatingPanel: React.FC<FloatingPanelProps> = ({ 
  title, 
  children, 
  isOpen, 
  onClose,
  position = 'right'
}) => {
  if (!isOpen) return null;

  return (
    <div className={`floating-panel floating-panel-${position}`}>
      <div className="floating-panel-header">
        <h2 className="floating-panel-title">{title}</h2>
        <button className="floating-panel-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      <div className="floating-panel-content">
        {children}
      </div>
    </div>
  );
};

interface LayerControlsProps {
  activeLayers: string[];
  onToggleLayer: (layer: string) => void;
}

export const LayerControls: React.FC<LayerControlsProps> = ({ activeLayers, onToggleLayer }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const layers = [
    { id: 'oil-fields', label: 'Oil Fields', icon: '🛢️', color: '#ef4444' },
    { id: 'refineries', label: 'Refineries', icon: '🏭', color: '#f97316' },
    { id: 'power-plants', label: 'Power Plants', icon: '⚡', color: '#10b981' },
    { id: 'export-terminals', label: 'Terminals', icon: '🚢', color: '#3b82f6' },
    { id: 'pipelines', label: 'Pipelines', icon: '🔗', color: '#8b5cf6' },
    { id: 'protests', label: 'Protests', icon: '✊', color: '#ef4444' },
    { id: 'sanctions', label: 'Sanctions', icon: '🚫', color: '#dc2626' },
    { id: 'news-hotspots', label: 'News Hotspots', icon: '📰', color: '#f59e0b' }
  ];

  return (
    <div className="layer-controls-container">
      <button 
        className="layer-controls-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Layers size={20} />
        <span>Layers ({activeLayers.length})</span>
      </button>
      
      {isExpanded && (
        <div className="layer-controls-panel">
          <div className="layer-controls-header">
            <Layers size={16} />
            <span>Infrastructure Layers</span>
          </div>
          <div className="layer-controls-grid">
            {layers.map(layer => (
              <button
                key={layer.id}
                className={`layer-control-btn ${activeLayers.includes(layer.id) ? 'active' : ''}`}
                onClick={() => onToggleLayer(layer.id)}
                style={{ 
                  borderColor: activeLayers.includes(layer.id) ? layer.color : 'transparent',
                  '--layer-color': layer.color 
                } as React.CSSProperties}
              >
                <span className="layer-icon">{layer.icon}</span>
                <span className="layer-label">{layer.label}</span>
                {activeLayers.includes(layer.id) && (
                  <div className="layer-active-indicator" style={{ backgroundColor: layer.color }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface QuickStatsProps {
  stats: {
    production: number;
    gridStability: number;
    activeAlerts: number;
    lastUpdate: string;
  };
}

export const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <div className="quick-stats-container">
      <div className="quick-stat">
        <div className="quick-stat-label">Production</div>
        <div className="quick-stat-value">{(stats.production / 1000).toFixed(0)}k bpd</div>
      </div>
      <div className="quick-stat">
        <div className="quick-stat-label">Grid</div>
        <div className="quick-stat-value" style={{ 
          color: stats.gridStability < 30 ? '#ef4444' : 
                 stats.gridStability < 50 ? '#f97316' : '#10b981' 
        }}>
          {stats.gridStability}/100
        </div>
      </div>
      <div className="quick-stat">
        <div className="quick-stat-label">Alerts</div>
        <div className="quick-stat-value">
          {stats.activeAlerts > 0 && <span className="alert-pulse">🔴</span>}
          {stats.activeAlerts}
        </div>
      </div>
      <div className="quick-stat">
        <div className="quick-stat-label">Updated</div>
        <div className="quick-stat-value" style={{ fontSize: '0.75rem' }}>
          {stats.lastUpdate}
        </div>
      </div>
    </div>
  );
};

interface WorldMonitorHeaderProps {
  onOpenPanel: (panel: string) => void;
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

export const WorldMonitorHeader: React.FC<WorldMonitorHeaderProps> = ({
  onOpenPanel,
  timeRange,
  onTimeRangeChange,
  language,
  onLanguageChange
}) => {
  return (
    <header className="worldmonitor-header">
      <div className="header-left">
        <div className="logo-container">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Venezuela Energy Monitor</span>
        </div>
      </div>

      <div className="header-center">
        <div className="time-range-selector">
          {['1h', '6h', '24h', '7d', '30d'].map(range => (
            <button
              key={range}
              className={`time-btn ${timeRange === range ? 'active' : ''}`}
              onClick={() => onTimeRangeChange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="header-right">
        <select 
          className="language-selector"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="all">🌐 All</option>
          <option value="es">🇪🇸 Español</option>
          <option value="en">🇬🇧 English</option>
          <option value="pt">🇧🇷 Português</option>
        </select>

        <button className="header-icon-btn" onClick={() => onOpenPanel('layers')}>
          <Layers size={20} />
        </button>
        
        <button className="header-icon-btn" onClick={() => onOpenPanel('settings')}>
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

interface WorldMonitorLayoutProps {
  mapComponent: React.ReactNode;
  panels: {
    [key: string]: {
      title: string;
      content: React.ReactNode;
    };
  };
  stats: {
    production: number;
    gridStability: number;
    activeAlerts: number;
    lastUpdate: string;
  };
}

export const WorldMonitorLayout: React.FC<WorldMonitorLayoutProps> = ({
  mapComponent,
  panels,
  stats
}) => {
  const [activePanel, setActivePanel] = useState<string>('brief');
  const [activeLayers, setActiveLayers] = useState<string[]>(['oil-fields', 'power-plants']);
  const [timeRange, setTimeRange] = useState('24h');
  const [language, setLanguage] = useState('all');

  const handleToggleLayer = (layerId: string) => {
    setActiveLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    );
  };

  return (
    <div className="worldmonitor-layout">
      <WorldMonitorHeader
        onOpenPanel={setActivePanel}
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
        language={language}
        onLanguageChange={setLanguage}
      />

      <div className="map-viewport">
        {mapComponent}
      </div>

      <LayerControls 
        activeLayers={activeLayers}
        onToggleLayer={handleToggleLayer}
      />

      <QuickStats stats={stats} />

      {/* Main Content Panel */}
      <FloatingPanel
        title={panels[activePanel]?.title || 'Dashboard'}
        isOpen={true}
        onClose={() => {}}
        position="right"
      >
        {panels[activePanel]?.content}
      </FloatingPanel>

      {/* Panel Navigation */}
      <div className="panel-navigation">
        {Object.keys(panels).map(panelKey => (
          <button
            key={panelKey}
            className={`panel-nav-btn ${activePanel === panelKey ? 'active' : ''}`}
            onClick={() => setActivePanel(panelKey)}
            title={panels[panelKey].title}
          >
            {panels[panelKey].title.substring(0, 1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorldMonitorLayout;
