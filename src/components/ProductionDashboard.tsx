import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface ProductionDashboardProps {
  timeRange: string;
}

const ProductionDashboard: React.FC<ProductionDashboardProps> = ({ timeRange }) => {
  // Mock production data
  const productionData = {
    current: 750000,
    yesterday: 765000,
    weekAverage: 748000,
    monthAverage: 755000,
    yearAverage: 720000
  };

  const change = productionData.current - productionData.yesterday;
  const changePercent = ((change / productionData.yesterday) * 100).toFixed(2);

  return (
    <div className="production-dashboard">
      <div className="dashboard-header">
        <h2>Venezuela Oil Production Analytics</h2>
        <p className="text-secondary">Time Range: {timeRange}</p>
      </div>

      <div className="production-stats">
        <div className="stat-card large">
          <div className="stat-icon">
            <Activity size={32} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Current Production</div>
            <div className="stat-value">{(productionData.current / 1000).toFixed(0)}k bpd</div>
            <div className={`stat-change ${change >= 0 ? 'positive' : 'negative'}`}>
              {change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {Math.abs(parseFloat(changePercent))}% vs yesterday
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">7-Day Average</div>
          <div className="stat-value">{(productionData.weekAverage / 1000).toFixed(0)}k bpd</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">30-Day Average</div>
          <div className="stat-value">{(productionData.monthAverage / 1000).toFixed(0)}k bpd</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Year Average</div>
          <div className="stat-value">{(productionData.yearAverage / 1000).toFixed(0)}k bpd</div>
        </div>
      </div>

      <div className="production-breakdown">
        <h3>Production by Region</h3>
        <div className="region-list">
          <div className="region-item">
            <div className="region-name">Orinoco Belt</div>
            <div className="region-bar">
              <div className="region-fill" style={{ width: '53%', backgroundColor: '#ef4444' }}></div>
            </div>
            <div className="region-value">400k bpd (53%)</div>
          </div>
          <div className="region-item">
            <div className="region-name">Lake Maracaibo</div>
            <div className="region-bar">
              <div className="region-fill" style={{ width: '27%', backgroundColor: '#f97316' }}></div>
            </div>
            <div className="region-value">200k bpd (27%)</div>
          </div>
          <div className="region-item">
            <div className="region-name">Eastern Venezuela Basin</div>
            <div className="region-bar">
              <div className="region-fill" style={{ width: '13%', backgroundColor: '#fbbf24' }}></div>
            </div>
            <div className="region-value">100k bpd (13%)</div>
          </div>
          <div className="region-item">
            <div className="region-name">Other</div>
            <div className="region-bar">
              <div className="region-fill" style={{ width: '7%', backgroundColor: '#10b981' }}></div>
            </div>
            <div className="region-value">50k bpd (7%)</div>
          </div>
        </div>
      </div>

      <div className="production-forecast">
        <h3>AI Production Forecast</h3>
        <div className="forecast-note">
          <p>Based on historical trends, infrastructure status, and sanctions impact:</p>
          <ul>
            <li><strong>Next 7 days:</strong> 730-770k bpd (stable)</li>
            <li><strong>Next 30 days:</strong> 700-780k bpd (potential maintenance impact)</li>
            <li><strong>Next 90 days:</strong> 650-800k bpd (sanctions policy uncertainty)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductionDashboard;
