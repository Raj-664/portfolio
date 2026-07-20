import React, { useState } from 'react';
import FactoryCard from './FactoryCard';
import '../styles/FactoryList.css';

function FactoryList({ factories }) {
  const [expandedFactories, setExpandedFactories] = useState({});

  const toggleFactory = (factoryId) => {
    setExpandedFactories((prev) => ({
      ...prev,
      [factoryId]: !prev[factoryId],
    }));
  };

  return (
    <div className="factory-list">
      <div className="factory-summary">
        <p>Total Factories: {factories.length}</p>
        <p>Total Machines: {factories.reduce((sum, f) => sum + f.devices.length, 0)}</p>
      </div>

      {factories.map((factory) => (
        <FactoryCard
          key={factory.id}
          factory={factory}
          isExpanded={expandedFactories[factory.id] || false}
          onToggle={() => toggleFactory(factory.id)}
        />
      ))}
    </div>
  );
}

export default FactoryList;
