import React, { useState, useEffect } from 'react';
import { fetchDeviceHistory } from '../services/api';
import '../styles/DeviceCard.css';

function DeviceCard({ device, isExpanded, onToggle }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isExpanded && history.length === 0) {
      const loadHistory = async () => {
        setLoading(true);
        try {
          const data = await fetchDeviceHistory(device.id);
          setHistory(data);
        } catch (error) {
          console.error('Failed to load history:', error);
        } finally {
          setLoading(false);
        }
      };
      loadHistory();
    }
  }, [isExpanded, device.id, history.length]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'operational':
        return 'status-operational';
      case 'warning':
        return 'status-warning';
      case 'error':
        return 'status-error';
      case 'offline':
        return 'status-offline';
      default:
        return 'status-unknown';
    }
  };

  return (
    <div className={`device-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="device-header" onClick={onToggle}>
        <div className="device-title">
          <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>
          <h3>{device.name}</h3>
          <span className="device-id">ID: {device.deviceId}</span>
        </div>
        <div className="device-status">
          <span className={`status-badge ${getStatusColor(device.status)}`}>
            {device.status}
          </span>
          {device.temperature && (
            <span className="device-metric">Temp: {device.temperature}°C</span>
          )}
          {device.uptime && (
            <span className="device-metric">Uptime: {device.uptime}%</span>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="device-content">
          <div className="device-details">
            <p><strong>Model:</strong> {device.model}</p>
            <p><strong>Last Updated:</strong> {new Date(device.lastUpdated).toLocaleString()}</p>
            {device.errorMessage && (
              <p className="error-text"><strong>Error:</strong> {device.errorMessage}</p>
            )}
          </div>

          {loading && <p className="loading">Loading history...</p>}

          {!loading && history.length > 0 && (
            <div className="device-history">
              <h4>Status History (Last 10)</h4>
              <ul>
                {history.slice(0, 10).map((entry, index) => (
                  <li key={index} className={`history-entry ${getStatusColor(entry.status)}`}>
                    <span className="history-time">{new Date(entry.timestamp).toLocaleString()}</span>
                    <span className="history-status">{entry.status}</span>
                    {entry.details && <span className="history-details">{entry.details}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DeviceCard;
