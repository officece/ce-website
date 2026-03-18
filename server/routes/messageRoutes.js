const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');

const prisma = new PrismaClient();

// POST /api/messages - PUBLIC (Used by the Contact form on the website)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, category, message } = req.body;
    const newMessage = await prisma.contactMessage.create({
      data: { name, email, subject, category, message }
    });
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error while sending message' });
  }
});

// GET /api/messages - PROTECTED (Admin fetches all messages)
router.get('/', auth, async (req, res) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server Error loading messages' });
  }
});

// PUT /api/messages/:id/read - PROTECTED (Admin marks message as read)
router.put('/:id/read', auth, async (req, res) => {
  try {
    const messageId = parseInt(req.params.id);
    const updatedMessage = await prisma.contactMessage.update({
      where: { id: messageId },
      data: { isRead: true }
    });
    res.json(updatedMessage);
  } catch (err) {
    res.status(500).json({ message: 'Server Error updating message status' });
  }
});

// DELETE /api/messages/:id - PROTECTED (Admin deletes a message)
router.delete('/:id', auth, async (req, res) => {
  try {
    const messageId = parseInt(req.params.id);
    await prisma.contactMessage.delete({
      where: { id: messageId }
    });
    res.json({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error deleting message' });
  }
});

module.exports = router;