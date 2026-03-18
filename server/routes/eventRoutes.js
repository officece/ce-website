const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// GET /api/events - PUBLIC (Used by Events.jsx and Home.jsx)
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'desc' }
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;