const { db } = require('../models/index.model');

class UserService {
  schema;
  constructor() {
    this.schema = db.users;
  }

  addUser(user) {
    return this
      .schema
      .create(user);
  }

  getAllUser(queryObj) {
    return this
      .schema
      .find(queryObj)
  }

  getUserById(id) {
    return this
      .schema
      .findOne({ _id: id })
  }

  updateUser(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update, { new: true })
  }

  deleteUser(id) {
    return this
      .schema
      .deleteOne({ _id: id })
  }

  findOneByUserId(userId) {
    return this
      .schema
      .findOne({ userId: userId })
  }

  findOneByQuery(query) {
    return this
      .schema
      .findOne(query)
  }
}

const userService = new UserService();

module.exports = { userService }