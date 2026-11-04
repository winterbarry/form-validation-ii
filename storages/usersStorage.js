// store users in memory using an object and automatically generated IDs.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  // add a new user and assign them a unique ID.
  addUser({ firstName, lastName }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName };
    this.id++;
  }

  // return all stored users as an array
  getUsers() {
    return Object.values(this.storage);
  }

  // find and return a user using their ID.
  getUser(id) {
    return this.storage[id];
  }

  // replace the stored details of an existing user.
  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName };
  }

  // remove a user from storage using their ID.
  deleteUser(id) {
    delete this.storage[id];
  }
}

// export a single storage instance for the application to share.
module.exports = new UsersStorage();
