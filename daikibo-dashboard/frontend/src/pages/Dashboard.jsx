import React, { useState, useEffect } from 'react';
import FactoryList from '../components/FactoryList';
import Header from '../components/Header';
import { fetchFactories } from '../services/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const [factories, setFactories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFactories = async () => {
      try {
        const data = await fetchFactories();
        setFactories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFactories();

    // Refresh data every 30 seconds
    const interval = setInterval(loadFactories, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="dashboard-loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="dashboard-error">Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <h1>Machine Health Status Dashboard</h1>
        <FactoryList factories={factories} />
      </div>
    </div>
  );
}

export default Dashboard;
