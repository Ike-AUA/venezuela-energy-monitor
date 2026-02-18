import React from 'react';
import { Zap, AlertTriangle, TrendingDown, Droplet } from 'lucide-react';

interface GridStabilityIndexProps {
  timeRange: string;
}

const GridStabilityIndex: React.FC<GridStabilityIndexProps> = ({ timeRange }) => {
  const gridData = {
    stabilityScore: 42,
    guriLevel: 243,
    operationalPlants: 12,
    totalPlants: 28,
    lastOutage: '6 hours ago',
    affectedPopulation: '2.3M people'
  };

  const getScoreColor = (score: number) => {
    if (score < 30) return '#ef4444';
    if (score < 50) return '#f97316';
    if (score < 70) return '#fbbf24';
    return '#10b981';
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Electrical Grid Stability Index</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Time Range: {timeRange}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Zap size={24} color={getScoreColor(gridData.stabilityScore)} />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Stability Score</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: getScoreColor(gridData.stabilityScore) }}>
            {gridData.stabilityScore}/100
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#f97316' }}>
            ⚠️ HIGH RISK - Blackout possible
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Droplet size={24} color={gridData.guriLevel < 240 ? '#ef4444' : '#fbbf24'} />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Guri Dam Level</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: gridData.guriLevel < 240 ? '#ef4444' : '#fbbf24' }}>
            {gridData.guriLevel}m
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#ef4444' }}>
            ⚠️ CRITICAL - 3m above minimum
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <TrendingDown size={24} color="#ef4444" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Operational Plants</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>
            {gridData.operationalPlants}/{gridData.totalPlants}
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Only {Math.round((gridData.operationalPlants / gridData.totalPlants) * 100)}% capacity
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <AlertTriangle size={24} color="#f97316" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Last Major Outage</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>
            {gridData.lastOutage}
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Affected: {gridData.affectedPopulation}
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'var(--card-bg)', 
        padding: '1.5rem', 
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Regional Grid Status</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { region: 'Capital District (Caracas)', status: 'Unstable', color: '#f97316', uptime: '78%' },
            { region: 'Zulia (Maracaibo)', status: 'Critical', color: '#ef4444', uptime: '42%' },
            { region: 'Bolívar (Guri Dam)', status: 'Operational', color: '#10b981', uptime: '92%' },
            { region: 'Carabobo (Valencia)', status: 'Unstable', color: '#f97316', uptime: '65%' }
          ].map((item, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: '8px'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>{item.region}</div>
                <div style={{ fontSize: '0.875rem', color: item.color, marginTop: '0.25rem' }}>
                  {item.status}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>{item.uptime}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>7-day uptime</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridStabilityIndex;
