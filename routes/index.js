const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Index Route
router.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages });
});

// New Message Form Route
router.get('/new', (req, res) => {
  res.render('form', { title: "New Message" });
});

// Handle New Message Submission
router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

// View individual message
router.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.status(404).send('Message not found.');
  res.render('message', { title: "Message Details", message });
});

module.exports = router;
