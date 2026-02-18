import React from 'react';

// Grid Stability Index Component
export const GridStabilityIndex: React.FC<{ timeRange: string }> = ({ timeRange }) => {
  return (
    <div className="grid-stability-container">
      <h2>Electrical Grid Stability Index</h2>
      <p>Grid monitoring for time range: {timeRange}</p>
      <div className="grid-placeholder">
        <p>Grid stability metrics, Guri Dam status, regional outage tracking coming soon...</p>
      </div>
    </div>
  );
};

// News Feed Component
export const NewsFeed: React.FC<{ language: string; timeRange: string }> = ({ language, timeRange }) => {
  return (
    <div className="news-feed-container">
      <h2>Multilingual Energy News Feed</h2>
      <p>Language: {language} | Time Range: {timeRange}</p>
      <div className="news-placeholder">
        <p>Real-time news aggregation from 50+ sources in Spanish, English, and Portuguese coming soon...</p>
      </div>
    </div>
  );
};

// Sanctions Tracker Component
export const SanctionsTracker: React.FC = () => {
  return (
    <div className="sanctions-tracker-container">
      <h2>Sanctions Impact Tracker</h2>
      <div className="sanctions-placeholder">
        <p>Timeline of U.S., EU, and international sanctions with quantified impact analysis coming soon...</p>
      </div>
    </div>
  );
};

export default { GridStabilityIndex, NewsFeed, SanctionsTracker };
