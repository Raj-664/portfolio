const express = require('express');
const router = express.Router();

const mockDevices = [
  { id: 1, deviceId: 'DEV-001', name: 'Assembly Robot A1', status: 'Operational', temperature: 45, uptime: 99.8 },
  { id: 2, deviceId: 'DEV-002', name: 'Assembly Robot A2', status: 'Operational', temperature: 48, uptime: 98.5 },
];

const mockHistory = [
  { timestamp: new Date(Date.now() - 3600000), status: 'Operational', details: 'Normal operation' },
  { timestamp: new Date(Date.now() - 7200000), status: 'Operational', details: 'Normal operation' },
  { timestamp: new Date(Date.now() - 10800000), status: 'Warning', details: 'Temperature spike detected' },
  { timestamp: new Date(Date.now() - 14400000), status: 'Operational', details: 'Returned to normal' },
  { timestamp: new Date(Date.now() - 18000000), status: 'Operational', details: 'Normal operation' },
];

router.get('/', (req, res) => {
  res.json(mockDevices);
});

router.get('/:id', (req, res) => {
  const device = mockDevices.find((d) => d.id === parseInt(req.params.id));
  if (!device) {
    return res.status(404).json({ error: 'Device not found' });
  }
  res.json(device);
});

router.get('/:id/history', (req, res) => {
  res.json(mockHistory);
});

module.exports = router;
