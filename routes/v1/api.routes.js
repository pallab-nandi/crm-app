const express = require('express');

const router = express.Router();

const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const ticketRoutes = require('./ticket.routes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/tickets', ticketRoutes);

module.exports = router;