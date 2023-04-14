const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ticketPriority: {
    type: Number,
    required: true,
    default: 4
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      'OPEN',
      'BLOCKED',
      'IN_PROGRESS',
      'CLOSED'
    ],
    default: 'OPEN'
  },
  reporter: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  assignee: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    }
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    }
  }
})

const ticketModel = mongoose.model('tickets', ticketSchema);

module.exports = { ticketModel }