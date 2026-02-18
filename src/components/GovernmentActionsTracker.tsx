import React, { useState, useEffect } from 'react';
import { Scale, FileText, AlertCircle, ExternalLink, Calendar, Building2 } from 'lucide-react';

interface GovernmentActionsTrackerProps {
  timeRange: string;
}

const GovernmentActionsTracker: React.FC<GovernmentActionsTrackerProps> = ({ timeRange }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'us' | 'venezuela' | 'international'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'executive-orders' | 'legislation' | 'sanctions' | 'licenses'>('all');

  // Mock data - in production, this would be fetched from APIs
  const governmentActions = [
    {
      id: 1,
      date: '2026-02-13',
      type: 'General License',
      issuer: 'US Treasury OFAC',
      title: 'GL 47 - Oil Majors Operations in Venezuela',
      description: 'Allows Chevron, BP, Eni, Shell, and Repsol to broadly operate oil and gas operations in Venezuela. Requires payments to go through US-controlled Foreign Government Deposit Fund.',
      impact: 'High',
      category: 'us',
      url: 'https://ofac.treasury.gov/',
      status: 'Active'
    },
    {
      id: 2,
      date: '2026-02-06',
      type: 'Assembly Action',
      issuer: 'Venezuela National Assembly',
      title: 'Comisión Especial de Amnistía Instalada',
      description: 'Special Commission on Amnesty for Democratic Coexistence installed by National Assembly',
      impact: 'Medium',
      category: 'venezuela',
      url: 'https://www.asambleanacional.gob.ve/',
      status: 'In Progress'
    },
    {
      id: 3,
      date: '2026-02-02',
      type: 'General License',
      issuer: 'US Treasury OFAC',
      title: 'GL 5U - PDVSA 2020 Bond Transactions',
      description: 'Authorizes certain transactions related to Petróleos de Venezuela, S.A. 2020 8.5 Percent Bond on or after March 20, 2026',
      impact: 'Medium',
      category: 'us',
      url: 'https://ofac.treasury.gov/',
      status: 'Active'
    },
    {
      id: 4,
      date: '2026-01-29',
      type: 'General License',
      issuer: 'US Treasury OFAC',
      title: 'GL 46 - Venezuelan-Origin Oil Activities',
      description: 'Authorizes activities involving Venezuelan-origin oil including lifting, exportation, sale, storage, and marketing by established US entities',
      impact: 'High',
      category: 'us',
      url: 'https://ofac.treasury.gov/recent-actions/20260129',
      status: 'Active'
    },
    {
      id: 5,
      date: '2026-01-09',
      type: 'Executive Order',
      issuer: 'US President',
      title: 'E.O. 14373 - Safeguarding Venezuelan Oil Revenue',
      description: 'Declares national emergency and protects Venezuelan oil revenue held in US Treasury accounts from judicial attachment. Centralizes US government control over fund transfers.',
      impact: 'Critical',
      category: 'us',
      url: 'https://www.whitehouse.gov/presidential-actions/',
      status: 'Active'
    },
    {
      id: 6,
      date: '2025-12-31',
      type: 'Sanctions Designation',
      issuer: 'US Treasury OFAC',
      title: 'Oil Traders Sanctions - Shadow Fleet',
      description: 'Sanctioned four companies operating in Venezuela oil sector and identified four oil tankers (Nord Star, Lunar Tide, Rosalind, Della) as blocked property',
      impact: 'High',
      category: 'us',
      url: 'https://home.treasury.gov/news/press-releases/sb0348',
      status: 'Active'
    },
    {
      id: 7,
      date: '2025-02-15',
      type: 'FTO Designation',
      issuer: 'US State Department',
      title: 'Tren de Aragua Designated as FTO',
      description: 'Venezuela-origin gang designated as Foreign Terrorist Organization, enabling sanctions and law enforcement actions',
      impact: 'Medium',
      category: 'us',
      url: 'https://www.state.gov/',
      status: 'Active'
    },
    {
      id: 8,
      date: '2024-08-15',
      type: 'Legislation',
      issuer: 'Venezuela National Assembly',
      title: 'NGO Control Law Approved',
      description: 'Bill on control, regularization, performance and financing of NGOs approved and sent to Executive for promulgation',
      impact: 'Medium',
      category: 'venezuela',
      url: 'https://directoriolegislativo.org/',
      status: 'Enacted'
    }
  ];

  const filteredActions = governmentActions.filter(action => {
    if (selectedCategory !== 'all' && action.category !== selectedCategory) return false;
    if (selectedType !== 'all') {
      if (selectedType === 'executive-orders' && action.type !== 'Executive Order') return false;
      if (selectedType === 'legislation' && action.type !== 'Legislation' && action.type !== 'Assembly Action') return false;
      if (selectedType === 'sanctions' && action.type !== 'Sanctions Designation') return false;
      if (selectedType === 'licenses' && action.type !== 'General License') return false;
    }
    return true;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return '#ef4444';
      case 'High': return '#f97316';
      case 'Medium': return '#fbbf24';
      case 'Low': return '#10b981';
      default: return '#a0a8c0';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === 'Executive Order') return <Scale size={20} />;
    if (type === 'General License') return <FileText size={20} />;
    if (type.includes('Legislation') || type.includes('Assembly')) return <Building2 size={20} />;
    return <AlertCircle size={20} />;
  };

  const stats = {
    totalActions: governmentActions.length,
    usActions: governmentActions.filter(a => a.category === 'us').length,
    venezuelaActions: governmentActions.filter(a => a.category === 'venezuela').length,
    criticalImpact: governmentActions.filter(a => a.impact === 'Critical').length
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Scale size={28} color="#3b82f6" />
          Government Actions & Legislation Tracker
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Real-time monitoring of executive orders, sanctions, licenses, and legislative actions from US, Venezuela, and international bodies
        </p>
      </div>

      {/* Statistics Dashboard */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem' 
      }}>
        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <FileText size={24} style={{ margin: '0 auto 0.5rem', color: '#3b82f6' }} />
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            Total Actions
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>{stats.totalActions}</div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            US Government
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3b82f6' }}>{stats.usActions}</div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            Venezuela Gov
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fbbf24' }}>{stats.venezuelaActions}</div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1.5rem', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <AlertCircle size={24} style={{ margin: '0 auto 0.5rem', color: '#ef4444' }} />
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            Critical Impact
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#ef4444' }}>{stats.criticalImpact}</div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <div>
          <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
            Source
          </label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as any)}
            style={{
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Sources</option>
            <option value="us">US Government</option>
            <option value="venezuela">Venezuela Government</option>
            <option value="international">International</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
            Type
          </label>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as any)}
            style={{
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Types</option>
            <option value="executive-orders">Executive Orders</option>
            <option value="legislation">Legislation</option>
            <option value="sanctions">Sanctions</option>
            <option value="licenses">General Licenses</option>
          </select>
        </div>
      </div>

      {/* Actions Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredActions.map(action => (
          <div 
            key={action.id}
            style={{ 
              backgroundColor: 'var(--card-bg)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              borderLeft: `4px solid ${getImpactColor(action.impact)}`
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {getTypeIcon(action.type)}
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.5rem', 
                      backgroundColor: 'var(--secondary-bg)',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}>
                      {action.type}
                    </span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.5rem', 
                      backgroundColor: getImpactColor(action.impact),
                      borderRadius: '4px',
                      fontWeight: '600',
                      color: '#fff'
                    }}>
                      {action.impact} Impact
                    </span>
                    {action.status && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.5rem', 
                        backgroundColor: action.status === 'Active' ? '#10b981' : '#fbbf24',
                        borderRadius: '4px',
                        fontWeight: '600',
                        color: '#fff'
                      }}>
                        {action.status}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {action.issuer}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <Calendar size={16} />
                {action.date}
              </div>
            </div>

            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', fontWeight: '600' }}>
              {action.title}
            </h3>

            <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {action.description}
            </p>

            <a 
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#3b82f6',
                fontSize: '0.875rem',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              View Official Document
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Key Sources Section */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: 'var(--secondary-bg)', 
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Key Data Sources</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>US Government</h4>
            <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
              <li>• US Treasury OFAC</li>
              <li>• Department of Energy</li>
              <li>• State Department</li>
              <li>• White House</li>
              <li>• Congress</li>
              <li>• Department of Defense</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Venezuela Government</h4>
            <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
              <li>• Asamblea Nacional (Official)</li>
              <li>• PDVSA</li>
              <li>• Ministerio de Petróleo</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>International</h4>
            <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
              <li>• EU Sanctions</li>
              <li>• UK OFSI</li>
              <li>• Canada Global Affairs</li>
              <li>• UN</li>
              <li>• ICJ / ICC</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>Legal Analysis</h4>
            <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
              <li>• JURIST</li>
              <li>• OpenSanctions</li>
              <li>• Major law firms</li>
              <li>• Compliance monitors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentActionsTracker;
