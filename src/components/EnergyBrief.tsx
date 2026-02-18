import React, { useState, useEffect } from 'react';
import { Brain, RefreshCw, AlertCircle, Clock, Zap } from 'lucide-react';
import { 
  getDailyEnergyBrief, 
  getTokenStats, 
  shouldUpdateNow, 
  markUpdateComplete 
} from '../services/geminiService';

interface EnergyBriefProps {
  language: string;
}

const EnergyBrief: React.FC<EnergyBriefProps> = ({ language }) => {
  const [brief, setBrief] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [tokenStats, setTokenStats] = useState<any>(null);
  const [selectedLang, setSelectedLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    loadFromCache();
    
    if (shouldUpdateNow()) {
      fetchBrief();
    }
    
    const interval = setInterval(() => {
      if (shouldUpdateNow()) {
        fetchBrief();
      }
    }, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [selectedLang]);

  const loadFromCache = () => {
    const cached = localStorage.getItem(`energyBrief_${selectedLang}`);
    const cachedTime = localStorage.getItem(`energyBriefTime_${selectedLang}`);
    
    if (cached) {
      setBrief(cached);
      if (cachedTime) {
        setLastUpdated(new Date(cachedTime));
      }
    }
  };

  const fetchBrief = async () => {
    setLoading(true);
    setError(null);

    try {
      const generatedBrief = await getDailyEnergyBrief(selectedLang);
      setBrief(generatedBrief);
      
      const now = new Date();
      setLastUpdated(now);
      
      localStorage.setItem(`energyBrief_${selectedLang}`, generatedBrief);
      localStorage.setItem(`energyBriefTime_${selectedLang}`, now.toISOString());
      
      markUpdateComplete();
      setTokenStats(getTokenStats());
      
    } catch (err) {
      setError('Failed to generate brief. Using cached data.');
      loadFromCache();
      console.error('Brief generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getNextUpdateTime = (): string => {
    const now = new Date();
    const hour = now.getHours();
    const nextHours = [6, 12, 18];
    const nextUpdate = nextHours.find(h => h > hour) || nextHours[0];
    
    const next = new Date();
    if (nextUpdate < hour) {
      next.setDate(next.getDate() + 1);
    }
    next.setHours(nextUpdate, 0, 0, 0);
    
    return next.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const getCacheAge = (): string => {
    if (!lastUpdated) return 'Unknown';
    
    const ageMs = Date.now() - lastUpdated.getTime();
    const ageHours = Math.floor(ageMs / (60 * 60 * 1000));
    const ageMinutes = Math.floor((ageMs % (60 * 60 * 1000)) / (60 * 1000));
    
    if (ageHours > 0) {
      return `${ageHours}h ${ageMinutes}m ago`;
    }
    return `${ageMinutes}m ago`;
  };

  return (
    <div className="energy-brief-container">
      <div className="brief-header">
        <div className="brief-title">
          <Brain size={24} className="text-blue-400" />
          <h2>AI Energy Brief</h2>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value as 'en' | 'es')}
            style={{
              padding: '0.5rem',
              borderRadius: '6px',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontSize: '0.875rem'
            }}
          >
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
          </select>
          
          <button 
            onClick={fetchBrief} 
            className="refresh-button"
            disabled={loading}
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>
      </div>

      <div className="brief-content">
        {loading && (
          <div className="brief-loading">
            <div className="loading-spinner"></div>
            <p>Generating brief with Gemini Pro...</p>
          </div>
        )}

        {error && (
          <div className="brief-error">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && brief && (
          <>
            <div className="brief-text" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
              {brief}
            </div>
            
            <div className="brief-footer" style={{ 
              marginTop: '1.5rem', 
              paddingTop: '1rem', 
              borderTop: '1px solid var(--border-color)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} />
                  <span>Last updated: {getCacheAge()}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Zap size={16} />
                  <span>Next update: {getNextUpdateTime()}</span>
                </div>
              </div>
              
              {tokenStats && (
                <div style={{ 
                  padding: '0.5rem', 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  borderRadius: '4px',
                  fontSize: '0.75rem'
                }}>
                  Token usage today: {tokenStats.usedToday.toLocaleString()} / {tokenStats.limit.toLocaleString()} 
                  ({tokenStats.percentage.toFixed(1)}%)
                </div>
              )}
              
              <div style={{ marginTop: '0.5rem', opacity: 0.7 }}>
                Powered by Google Gemini 1.5 Pro • Updates: 6 AM, 12 PM, 6 PM • Cached 4 hours
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EnergyBrief;
