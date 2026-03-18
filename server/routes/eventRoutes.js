const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth'); // Our security checkpoint

const prisma = new PrismaClient();

// GET /api/events - PUBLIC (Fetches all events, newest first)
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'desc' }
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Server Error loading events' });
  }
});

// POST /api/events - PROTECTED (Admin adds a new event/news)
router.post('/', auth, async (req, res) => {
  try {
    const { title, date, time, venue, description, category, registrationLink, isNews } = req.body;
    
    // Prisma requires a valid ISO DateTime object
    const eventDate = new Date(date);

    const newEvent = await prisma.event.create({
      data: {
        title,
        date: eventDate,
        time,
        venue,
        description,
        category,
        registrationLink,
        isNews: Boolean(isNews) // If true, it shows on the Home page marquee
      }
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error creating event' });
  }
});

// DELETE /api/events/:id - PROTECTED (Admin deletes an event)
router.delete('/:id', auth, async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    await prisma.event.delete({
      where: { id: eventId }
    });
    res.json({ message: 'Event obliterated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error during deletion' });
  }
});

// PUT /api/events/:id - PROTECTED (Admin edits an event)
router.put('/:id', auth, async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const { title, date, time, venue, description, category, registrationLink, isNews } = req.body;
    
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        title,
        date: new Date(date),
        time,
        venue,
        description,
        category,
        registrationLink,
        isNews: Boolean(isNews)
      }
    });
    res.json(updatedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error during update' });
  }
});
module.exports = router;