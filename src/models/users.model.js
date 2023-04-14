const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  userType: {
    type: String,
    required: true,
    enum: [
      'ADMIN',
      'ENGINEER',
      'CUSTOMER'
    ],
    default: 'CUSTOMER'
  },
  userStatus: {
    type: String,
    required: true,
    default: 'PENDING'
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

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
})

userSchema.methods.isValidPass = async function (pass) {
  return await bcrypt.compare(pass, this.password);
}

const userModel = mongoose.model('users', userSchema);

module.exports = { userModel }