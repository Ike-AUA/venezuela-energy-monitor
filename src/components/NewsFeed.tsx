import React from 'react';
import { Globe, AlertCircle, TrendingUp } from 'lucide-react';

interface NewsFeedProps {
  language: string;
  timeRange: string;
}

const NewsFeed: React.FC<NewsFeedProps> = ({ language, timeRange }) => {
  // Mock news data
  const mockNews = [
    {
      id: 1,
      title: 'PDVSA anuncia mantenimiento programado en refinería de Paraguaná',
      source: 'Efecto Cocuyo',
      language: 'es',
      timestamp: '2 hours ago',
      severity: 'medium',
      category: 'Refining'
    },
    {
      id: 2,
      title: 'Venezuela oil exports to China reach 18-month high',
      source: 'Reuters',
      language: 'en',
      timestamp: '4 hours ago',
      severity: 'low',
      category: 'Exports'
    },
    {
      id: 3,
      title: 'Guri Dam reservoir level drops below 245 meters',
      source: 'Bloomberg Energy',
      language: 'en',
      timestamp: '6 hours ago',
      severity: 'high',
      category: 'Grid'
    },
    {
      id: 4,
      title: 'Venezuela e China discutem novos investimentos no setor petrolífero',
      source: 'O Globo',
      language: 'pt',
      timestamp: '8 hours ago',
      severity: 'low',
      category: 'Investment'
    },
    {
      id: 5,
      title: 'Chevron production in Venezuela exceeds 150,000 bpd',
      source: 'Argus Media',
      language: 'en',
      timestamp: '10 hours ago',
      severity: 'medium',
      category: 'Production'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return '#ef4444';
      case 'medium': return '#f97316';
      case 'low': return '#10b981';
      default: return '#a0a8c0';
    }
  };

  const getLanguageFlag = (lang: string) => {
    switch (lang) {
      case 'es': return '🇪🇸';
      case 'en': return '🇬🇧';
      case 'pt': return '🇧🇷';
      default: return '🌐';
    }
  };

  const filteredNews = language === 'all' 
    ? mockNews 
    : mockNews.filter(news => news.language === language);

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Multilingual Energy News Feed
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Language: {language === 'all' ? 'All Languages' : language.toUpperCase()} | Time Range: {timeRange}
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem' 
      }}>
        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1rem', 
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <Globe size={24} style={{ margin: '0 auto 0.5rem' }} color="#3b82f6" />
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            Total Sources
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>50+</div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1rem', 
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <AlertCircle size={24} style={{ margin: '0 auto 0.5rem' }} color="#ef4444" />
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            High Priority
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>3</div>
        </div>

        <div style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '1rem', 
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <TrendingUp size={24} style={{ margin: '0 auto 0.5rem' }} color="#10b981" />
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
            Articles Today
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>127</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredNews.map(news => (
          <div 
            key={news.id}
            style={{ 
              backgroundColor: 'var(--card-bg)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              borderLeft: `4px solid ${getSeverityColor(news.severity)}`
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem' }}>{getLanguageFlag(news.language)}</span>
                <span style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.5rem', 
                  backgroundColor: getSeverityColor(news.severity),
                  borderRadius: '4px',
                  fontWeight: '600'
                }}>
                  {news.category}
                </span>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {news.timestamp}
              </span>
            </div>

            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', lineHeight: '1.5' }}>
              {news.title}
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Source: <strong>{news.source}</strong>
              </span>
              <button style={{
                backgroundColor: 'var(--secondary-bg)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: 'var(--secondary-bg)', 
        borderRadius: '8px',
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }}>
        <p>Showing {filteredNews.length} of 127 articles from the last {timeRange}</p>
        <button style={{
          marginTop: '1rem',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
