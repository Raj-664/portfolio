const express = require('express');
const router = express.Router();

// Mock data - replace with database queries
const factories = [
  {
    id: 1,
    name: 'Factory Tokyo',
    location: 'Tokyo, Japan',
    status: 'Operational',
    devices: [
      { id: 1, deviceId: 'DEV-001', name: 'Assembly Robot A1', model: 'ABB IRB 6700', status: 'Operational', temperature: 45, uptime: 99.8, lastUpdated: new Date() },
      { id: 2, deviceId: 'DEV-002', name: 'Assembly Robot A2', model: 'ABB IRB 6700', status: 'Operational', temperature: 48, uptime: 98.5, lastUpdated: new Date() },
      { id: 3, deviceId: 'DEV-003', name: 'CNC Machine B1', model: 'Haas VF-4', status: 'Warning', temperature: 62, uptime: 95.2, lastUpdated: new Date(), errorMessage: 'Spindle temperature high' },
      { id: 4, deviceId: 'DEV-004', name: 'CNC Machine B2', model: 'Haas VF-4', status: 'Operational', temperature: 55, uptime: 99.1, lastUpdated: new Date() },
      { id: 5, deviceId: 'DEV-005', name: 'Conveyor System C1', model: 'Siemens S7', status: 'Operational', temperature: 32, uptime: 100, lastUpdated: new Date() },
      { id: 6, deviceId: 'DEV-006', name: 'Conveyor System C2', model: 'Siemens S7', status: 'Operational', temperature: 30, uptime: 100, lastUpdated: new Date() },
      { id: 7, deviceId: 'DEV-007', name: 'Welding Unit D1', model: 'FANUC ArcMate', status: 'Operational', temperature: 58, uptime: 99.5, lastUpdated: new Date() },
      { id: 8, deviceId: 'DEV-008', name: 'Welding Unit D2', model: 'FANUC ArcMate', status: 'Error', temperature: 72, uptime: 45.3, lastUpdated: new Date(), errorMessage: 'Connection lost' },
      { id: 9, deviceId: 'DEV-009', name: 'Quality Control E1', model: 'Cognex InSight', status: 'Operational', temperature: 35, uptime: 99.9, lastUpdated: new Date() },
    ],
  },
  {
    id: 2,
    name: 'Factory Osaka',
    location: 'Osaka, Japan',
    status: 'Operational',
    devices: [
      { id: 10, deviceId: 'DEV-010', name: 'Assembly Robot A1', model: 'ABB IRB 6700', status: 'Operational', temperature: 46, uptime: 99.2, lastUpdated: new Date() },
      { id: 11, deviceId: 'DEV-011', name: 'Assembly Robot A2', model: 'ABB IRB 6700', status: 'Operational', temperature: 47, uptime: 99.0, lastUpdated: new Date() },
      { id: 12, deviceId: 'DEV-012', name: 'CNC Machine B1', model: 'Haas VF-4', status: 'Operational', temperature: 54, uptime: 99.6, lastUpdated: new Date() },
      { id: 13, deviceId: 'DEV-013', name: 'CNC Machine B2', model: 'Haas VF-4', status: 'Warning', temperature: 65, uptime: 94.8, lastUpdated: new Date(), errorMessage: 'Coolant level low' },
      { id: 14, deviceId: 'DEV-014', name: 'Conveyor System C1', model: 'Siemens S7', status: 'Operational', temperature: 31, uptime: 100, lastUpdated: new Date() },
      { id: 15, deviceId: 'DEV-015', name: 'Conveyor System C2', model: 'Siemens S7', status: 'Operational', temperature: 29, uptime: 100, lastUpdated: new Date() },
      { id: 16, deviceId: 'DEV-016', name: 'Welding Unit D1', model: 'FANUC ArcMate', status: 'Operational', temperature: 56, uptime: 99.8, lastUpdated: new Date() },
      { id: 17, deviceId: 'DEV-017', name: 'Welding Unit D2', model: 'FANUC ArcMate', status: 'Operational', temperature: 57, uptime: 99.7, lastUpdated: new Date() },
      { id: 18, deviceId: 'DEV-018', name: 'Quality Control E1', model: 'Cognex InSight', status: 'Operational', temperature: 36, uptime: 99.8, lastUpdated: new Date() },
    ],
  },
  {
    id: 3,
    name: 'Factory Kyoto',
    location: 'Kyoto, Japan',
    status: 'Warning',
    devices: [
      { id: 19, deviceId: 'DEV-019', name: 'Assembly Robot A1', model: 'ABB IRB 6700', status: 'Offline', temperature: null, uptime: 0, lastUpdated: new Date(), errorMessage: 'No signal' },
      { id: 20, deviceId: 'DEV-020', name: 'Assembly Robot A2', model: 'ABB IRB 6700', status: 'Operational', temperature: 49, uptime: 98.8, lastUpdated: new Date() },
      { id: 21, deviceId: 'DEV-021', name: 'CNC Machine B1', model: 'Haas VF-4', status: 'Operational', temperature: 53, uptime: 99.4, lastUpdated: new Date() },
      { id: 22, deviceId: 'DEV-022', name: 'CNC Machine B2', model: 'Haas VF-4', status: 'Operational', temperature: 52, uptime: 99.3, lastUpdated: new Date() },
      { id: 23, deviceId: 'DEV-023', name: 'Conveyor System C1', model: 'Siemens S7', status: 'Operational', temperature: 33, uptime: 99.9, lastUpdated: new Date() },
      { id: 24, deviceId: 'DEV-024', name: 'Conveyor System C2', model: 'Siemens S7', status: 'Operational', temperature: 32, uptime: 99.8, lastUpdated: new Date() },
      { id: 25, deviceId: 'DEV-025', name: 'Welding Unit D1', model: 'FANUC ArcMate', status: 'Operational', temperature: 59, uptime: 99.4, lastUpdated: new Date() },
      { id: 26, deviceId: 'DEV-026', name: 'Welding Unit D2', model: 'FANUC ArcMate', status: 'Operational', temperature: 58, uptime: 99.5, lastUpdated: new Date() },
      { id: 27, deviceId: 'DEV-027', name: 'Quality Control E1', model: 'Cognex InSight', status: 'Operational', temperature: 37, uptime: 99.7, lastUpdated: new Date() },
    ],
  },
  {
    id: 4,
    name: 'Factory Hiroshima',
    location: 'Hiroshima, Japan',
    status: 'Operational',
    devices: [
      { id: 28, deviceId: 'DEV-028', name: 'Assembly Robot A1', model: 'ABB IRB 6700', status: 'Operational', temperature: 44, uptime: 99.9, lastUpdated: new Date() },
      { id: 29, deviceId: 'DEV-029', name: 'Assembly Robot A2', model: 'ABB IRB 6700', status: 'Operational', temperature: 46, uptime: 99.1, lastUpdated: new Date() },
      { id: 30, deviceId: 'DEV-030', name: 'CNC Machine B1', model: 'Haas VF-4', status: 'Operational', temperature: 51, uptime: 99.7, lastUpdated: new Date() },
      { id: 31, deviceId: 'DEV-031', name: 'CNC Machine B2', model: 'Haas VF-4', status: 'Operational', temperature: 50, uptime: 99.8, lastUpdated: new Date() },
      { id: 32, deviceId: 'DEV-032', name: 'Conveyor System C1', model: 'Siemens S7', status: 'Operational', temperature: 28, uptime: 100, lastUpdated: new Date() },
      { id: 33, deviceId: 'DEV-033', name: 'Conveyor System C2', model: 'Siemens S7', status: 'Operational', temperature: 27, uptime: 100, lastUpdated: new Date() },
      { id: 34, deviceId: 'DEV-034', name: 'Welding Unit D1', model: 'FANUC ArcMate', status: 'Operational', temperature: 55, uptime: 99.9, lastUpdated: new Date() },
      { id: 35, deviceId: 'DEV-035', name: 'Welding Unit D2', model: 'FANUC ArcMate', status: 'Operational', temperature: 56, uptime: 99.8, lastUpdated: new Date() },
      { id: 36, deviceId: 'DEV-036', name: 'Quality Control E1', model: 'Cognex InSight', status: 'Operational', temperature: 34, uptime: 100, lastUpdated: new Date() },
    ],
  },
];

router.get('/', (req, res) => {
  res.json(factories);
});

router.get('/:id', (req, res) => {
  const factory = factories.find((f) => f.id === parseInt(req.params.id));
  if (!factory) {
    return res.status(404).json({ error: 'Factory not found' });
  }
  res.json(factory);
});

module.exports = router;
