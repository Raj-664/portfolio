const express = require('express');
const router = express.Router();

router.get('/:deviceId', (req, res) => {
  const { deviceId } = req.params;
  res.json({
    deviceId,
    temperature: Math.floor(Math.random() * 30 + 40),
    humidity: Math.floor(Math.random() * 30 + 40),
    pressure: Math.floor(Math.random() * 100 + 900),
    timestamp: new Date(),
  });
});

router.get('/:deviceId/range', (req, res) => {
  const { deviceId } = req.params;
  const { start, end } = req.query;
  res.json([
    { timestamp: new Date(start), temperature: 45, humidity: 55, pressure: 1013 },
    { timestamp: new Date(end), temperature: 48, humidity: 58, pressure: 1015 },
  ]);
});

module.exports = router;
