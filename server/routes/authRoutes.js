const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// POST /api/admin/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) return res.status(400).json({ message: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

    // Create JWT Payload
    const payload = { admin: { id: admin.id, username: admin.username } };

    // Sign Token
    jwt.sign(
      payload, 
      process.env.JWT_SECRET || 'supersecretkey123', 
      { expiresIn: '10h' }, 
      (err, token) => {
        if (err) throw err;
        res.json({ token, username: admin.username });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;