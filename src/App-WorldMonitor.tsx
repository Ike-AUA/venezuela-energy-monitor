import React, { useState, useEffect } from 'react';
import { WorldMonitorLayout } from './components/WorldMonitorLayout';
import EnergyMap from './components/EnergyMap';
import ProductionDashboard from './components/ProductionDashboard';
import GridStabilityIndex from './components/GridStabilityIndex';
import NewsFeed from './components/NewsFeed';
import SanctionsTracker from './components/SanctionsTracker';
import EnergyBrief from './components/EnergyBrief';
import GovernmentActionsTracker from './components/GovernmentActionsTracker';
import './App.css';

function App() {
  const [metrics, setMetrics] = useState({
    oilProduction: 750000,
    gridStability: 42,
    refiningUtilization: 12,
    guriLevel: 243
  });

  useEffect(() => {
    // Simulate fetching real-time metrics
    const fetchMetrics = async () => {
      // In production, this would call your API endpoints
      setMetrics({
        oilProduction: 750000, // bpd
        gridStability: 42,      // index 0-100
        refiningUtilization: 12, // %
        guriLevel: 243          // meters
      });
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Calculate active alerts
  const activeAlerts = 
    (metrics.gridStability < 30 ? 1 : 0) + 
    (metrics.guriLevel < 240 ? 1 : 0) +
    (metrics.oilProduction < 500000 ? 1 : 0);

  // Prepare panels for World Monitor layout
  const panels = {
    'brief': {
      title: 'Energy Brief',
      content: <EnergyBrief language="all" />
    },
    'news': {
      title: 'Live News',
      content: <NewsFeed language="all" timeRange="24h" />
    },
    'production': {
      title: 'Production',
      content: <ProductionDashboard timeRange="24h" />
    },
    'grid': {
      title: 'Grid Status',
      content: <GridStabilityIndex timeRange="24h" />
    },
    'sanctions': {
      title: 'Sanctions',
      content: <SanctionsTracker />
    },
    'government': {
      title: 'Gov Actions',
      content: <GovernmentActionsTracker timeRange="24h" />
    }
  };

  // Stats for quick stats bar
  const stats = {
    production: metrics.oilProduction,
    gridStability: metrics.gridStability,
    activeAlerts: activeAlerts,
    lastUpdate: new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  };

  return (
    <WorldMonitorLayout
      mapComponent={<EnergyMap timeRange="24h" />}
      panels={panels}
      stats={stats}
    />
  );
}

export default App;
