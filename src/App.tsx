import React, { useState, useEffect } from 'react';
import { Zap, Droplet, MapPin, TrendingDown, AlertTriangle, BarChart3 } from 'lucide-react';
import EnergyMap from './components/EnergyMap';
import ProductionDashboard from './components/ProductionDashboard';
import GridStabilityIndex from './components/GridStabilityIndex';
import NewsFeed from './components/NewsFeed';
import SanctionsTracker from './components/SanctionsTracker';
import EnergyBrief from './components/EnergyBrief';
import GovernmentActionsTracker from './components/GovernmentActionsTracker';
import './App.css';

interface AppState {
  selectedView: 'map' | 'production' | 'grid' | 'news' | 'sanctions' | 'government';
  timeRange: '1h' | '6h' | '24h' | '7d' | '30d';
  language: 'es' | 'en' | 'pt' | 'all';
}

function App() {
  const [state, setState] = useState<AppState>({
    selectedView: 'map',
    timeRange: '24h',
    language: 'all'
  });

  const [metrics, setMetrics] = useState({
    oilProduction: 0,
    gridStability: 0,
    refiningUtilization: 0,
    guriLevel: 0
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

  const getStabilityColor = (score: number) => {
    if (score < 30) return 'text-red-500';
    if (score < 50) return 'text-orange-500';
    if (score < 70) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getProductionColor = (bpd: number) => {
    if (bpd < 500000) return 'text-red-500';
    if (bpd < 700000) return 'text-orange-500';
    if (bpd < 1000000) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <Zap className="logo-icon" size={32} />
            <h1 className="app-title">Venezuela Energy Monitor</h1>
          </div>
          
          <div className="header-metrics">
            <div className="metric-card">
              <Droplet size={20} />
              <div>
                <div className="metric-label">Oil Production</div>
                <div className={`metric-value ${getProductionColor(metrics.oilProduction)}`}>
                  {(metrics.oilProduction / 1000).toFixed(0)}k bpd
                </div>
              </div>
            </div>
            
            <div className="metric-card">
              <Zap size={20} />
              <div>
                <div className="metric-label">Grid Stability</div>
                <div className={`metric-value ${getStabilityColor(metrics.gridStability)}`}>
                  {metrics.gridStability}/100
                </div>
              </div>
            </div>
            
            <div className="metric-card">
              <BarChart3 size={20} />
              <div>
                <div className="metric-label">Refining</div>
                <div className="metric-value text-orange-500">
                  {metrics.refiningUtilization}%
                </div>
              </div>
            </div>
            
            <div className="metric-card">
              <TrendingDown size={20} />
              <div>
                <div className="metric-label">Guri Level</div>
                <div className={`metric-value ${metrics.guriLevel < 240 ? 'text-red-500' : 'text-yellow-500'}`}>
                  {metrics.guriLevel}m
                </div>
              </div>
            </div>
          </div>

          <div className="header-controls">
            <select 
              value={state.language}
              onChange={(e) => setState(prev => ({ ...prev, language: e.target.value as any }))}
              className="control-select"
            >
              <option value="all">All Languages</option>
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
            
            <select 
              value={state.timeRange}
              onChange={(e) => setState(prev => ({ ...prev, timeRange: e.target.value as any }))}
              className="control-select"
            >
              <option value="1h">Last Hour</option>
              <option value="6h">6 Hours</option>
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
            </select>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="app-nav">
        <button 
          className={`nav-button ${state.selectedView === 'map' ? 'active' : ''}`}
          onClick={() => setState(prev => ({ ...prev, selectedView: 'map' }))}
        >
          <MapPin size={18} />
          Interactive Map
        </button>
        <button 
          className={`nav-button ${state.selectedView === 'production' ? 'active' : ''}`}
          onClick={() => setState(prev => ({ ...prev, selectedView: 'production' }))}
        >
          <Droplet size={18} />
          Production Analytics
        </button>
        <button 
          className={`nav-button ${state.selectedView === 'grid' ? 'active' : ''}`}
          onClick={() => setState(prev => ({ ...prev, selectedView: 'grid' }))}
        >
          <Zap size={18} />
          Grid Status
        </button>
        <button 
          className={`nav-button ${state.selectedView === 'news' ? 'active' : ''}`}
          onClick={() => setState(prev => ({ ...prev, selectedView: 'news' }))}
        >
          <AlertTriangle size={18} />
          Live News
        </button>
        <button 
          className={`nav-button ${state.selectedView === 'sanctions' ? 'active' : ''}`}
          onClick={() => setState(prev => ({ ...prev, selectedView: 'sanctions' }))}
        >
          <BarChart3 size={18} />
          Sanctions Impact
        </button>
        <button 
          className={`nav-button ${state.selectedView === 'government' ? 'active' : ''}`}
          onClick={() => setState(prev => ({ ...prev, selectedView: 'government' }))}
        >
          <AlertTriangle size={18} />
          Government Actions
        </button>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        {/* AI Energy Brief - Always visible */}
        <EnergyBrief language={state.language} />

        {/* Dynamic View */}
        <div className="content-area">
          {state.selectedView === 'map' && (
            <EnergyMap timeRange={state.timeRange} />
          )}
          {state.selectedView === 'production' && (
            <ProductionDashboard timeRange={state.timeRange} />
          )}
          {state.selectedView === 'grid' && (
            <GridStabilityIndex timeRange={state.timeRange} />
          )}
          {state.selectedView === 'news' && (
            <NewsFeed language={state.language} timeRange={state.timeRange} />
          )}
          {state.selectedView === 'sanctions' && (
            <SanctionsTracker />
          )}
          {state.selectedView === 'government' && (
            <GovernmentActionsTracker timeRange={state.timeRange} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Data Sources</h4>
            <p>OPEC, EIA, Reuters, Bloomberg, Venezuelan independent media</p>
          </div>
          <div className="footer-section">
            <h4>Last Updated</h4>
            <p>{new Date().toLocaleString()}</p>
          </div>
          <div className="footer-section">
            <h4>About</h4>
            <p>Real-time monitoring of Venezuela's energy sector</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
