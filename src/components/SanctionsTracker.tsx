import React from 'react';
import { Shield, TrendingDown, DollarSign, AlertTriangle } from 'lucide-react';

const SanctionsTracker: React.FC = () => {
  const sanctionedEntities = [
    { name: 'PDVSA', type: 'State Oil Company', sanctionedBy: ['US', 'EU', 'UK', 'Canada'], since: '2019-01-28', impact: 'Critical' },
    { name: 'PDVSA Petróleo S.A.', type: 'Subsidiary', sanctionedBy: ['US'], since: '2020-02-18', impact: 'High' },
    { name: 'Rosneft Trading S.A.', type: 'Trading Company', sanctionedBy: ['US'], since: '2020-02-18', impact: 'High' },
    { name: 'EDELCA', type: 'Electrical Utility', sanctionedBy: ['US'], since: '2019-04-05', impact: 'Medium' },
    { name: 'Various Oil Tankers', type: 'Maritime', sanctionedBy: ['US'], since: 'Various', impact: 'High' }
  ];

  const timeline = [
    { date: '2019-01-28', event: 'U.S. sanctions PDVSA', impact: '-600k bpd production', severity: 'critical' },
    { date: '2019-08-05', event: 'U.S. sanctions Venezuelan government', impact: 'Asset freeze', severity: 'high' },
    { date: '2020-02-18', event: 'Rosneft Trading sanctioned', impact: 'Export disruption', severity: 'high' },
    { date: '2022-11-26', event: 'Chevron license granted', impact: '+150k bpd potential', severity: 'positive' },
    { date: '2023-10-18', event: 'U.S. sanctions partially lifted', impact: 'Limited market access', severity: 'positive' },
    { date: '2024-04-17', event: 'Sanctions re-imposed', impact: 'Export uncertainty', severity: 'high' }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'critical': return '#ef4444';
      case 'high': return '#f97316';
      case 'medium': return '#fbbf24';
      case 'low': return '#10b981';
      default: return '#a0a8c0';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#ef4444';
      case 'high': return '#f97316';
      case 'positive': return '#10b981';
      default: return '#a0a8c0';
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Sanctions Impact Tracker
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Comprehensive monitoring of international sanctions on Venezuela's energy sector
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem' 
      }}>
        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Shield size={24} color="#ef4444" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Sanctioned Entities</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>38+</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Companies, individuals, vessels
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
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Production Impact</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#ef4444' }}>-2.7M</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            bpd since 2019 sanctions
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <DollarSign size={24} color="#fbbf24" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Revenue Loss</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fbbf24' }}>~$120B</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Cumulative since 2019
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <AlertTriangle size={24} color="#10b981" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Active Exemptions</span>
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#10b981' }}>3</div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Including Chevron license
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'var(--card-bg)', 
        padding: '1.5rem', 
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Sanctioned Entities</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Entity
                </th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Type
                </th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Sanctioned By
                </th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Since
                </th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {sanctionedEntities.map((entity, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '600' }}>{entity.name}</td>
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {entity.type}
                  </td>
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>
                    {entity.sanctionedBy.join(', ')}
                  </td>
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {entity.since}
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      backgroundColor: getImpactColor(entity.impact),
                      color: '#fff'
                    }}>
                      {entity.impact}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'var(--card-bg)', 
        padding: '1.5rem', 
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Sanctions Timeline</h3>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {timeline.map((event, index) => (
            <div 
              key={index}
              style={{ 
                position: 'relative',
                paddingBottom: '1.5rem',
                borderLeft: index < timeline.length - 1 ? '2px solid var(--border-color)' : 'none'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute',
                  left: '-0.625rem',
                  top: 0,
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  backgroundColor: getSeverityColor(event.severity),
                  border: '3px solid var(--secondary-bg)'
                }}
              />
              <div style={{ paddingLeft: '1.5rem' }}>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--text-secondary)',
                  marginBottom: '0.25rem'
                }}>
                  {event.date}
                </div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  {event.event}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {event.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanctionsTracker;
