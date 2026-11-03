const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);

// display the form for creating a user.
usersRouter.get("/create", usersController.usersCreateGet);

// handle the submitted form data.
usersRouter.post("/create", usersController.usersCreatePost);

module.exports = usersRouter;
