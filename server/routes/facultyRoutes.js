const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth'); // Protects routes

const prisma = new PrismaClient();

// GET /api/faculty - PUBLIC (Used by People.jsx)
router.get('/', async (req, res) => {
  try {
    const faculty = await prisma.faculty.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    });
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /api/faculty - PROTECTED (Used by Admin Portal)
router.post('/', auth, async (req, res) => {
  try {
    const newFaculty = await prisma.faculty.create({
      data: req.body
    });
    res.json(newFaculty);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});
// DELETE /api/faculty/:id - PROTECTED
router.delete('/:id', auth, async (req, res) => {
  try {
    const facultyId = parseInt(req.params.id);
    await prisma.faculty.delete({
      where: { id: facultyId }
    });
    res.json({ message: 'Faculty member removed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error during deletion' });
  }
});

module.exports = router;