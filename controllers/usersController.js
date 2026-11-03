const usersStorage = require("../storages/usersStorage");

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User List",
    users: usersStorage.getUsers(),
  });
};

// handle GET requests to /create and display the creation form.
exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

// handle POST requests to /create when the form is submitted.
exports.usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body;
  usersStorage.addUser({ firstName, lastName });
  res.redirect("/");
};
