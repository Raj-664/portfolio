import React, { useState } from 'react';
import DeviceCard from './DeviceCard';
import '../styles/DeviceList.css';

function DeviceList({ devices }) {
  const [expandedDevices, setExpandedDevices] = useState({});

  const toggleDevice = (deviceId) => {
    setExpandedDevices((prev) => ({
      ...prev,
      [deviceId]: !prev[deviceId],
    }));
  };

  if (!devices || devices.length === 0) {
    return <p className="no-devices">No devices found</p>;
  }

  return (
    <div className="device-list">
      {devices.map((device) => (
        <DeviceCard
          key={device.id}
          device={device}
          isExpanded={expandedDevices[device.id] || false}
          onToggle={() => toggleDevice(device.id)}
        />
      ))}
    </div>
  );
}

export default DeviceList;
