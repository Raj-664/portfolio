import React, { useState } from 'react';
import DeviceList from './DeviceList';
import '../styles/FactoryCard.css';

function FactoryCard({ factory, isExpanded, onToggle }) {
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

  const operationalCount = factory.devices?.filter(
    (d) => d.status?.toLowerCase() === 'operational'
  ).length || 0;

  return (
    <div className={`factory-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="factory-header" onClick={onToggle}>
        <div className="factory-title">
          <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>
          <h2>{factory.name}</h2>
        </div>
        <div className="factory-status">
          <span className={`status-badge ${getStatusColor(factory.status)}`}>
            {factory.status}
          </span>
          <span className="device-count">
            {operationalCount}/{factory.devices?.length || 0} Operational
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className="factory-content">
          <p className="factory-info">Location: {factory.location}</p>
          <DeviceList devices={factory.devices} />
        </div>
      )}
    </div>
  );
}

export default FactoryCard;
