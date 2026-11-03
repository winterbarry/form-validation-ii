const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);

// display the form for creating a user.
usersRouter.get("/create", usersController.usersCreateGet);

// handle the submitted form data.
usersRouter.post("/create", usersController.usersCreatePost);

usersRouter.get("/:id/update", usersController.usersUpdateGet);

// handle form update
usersRouter.post("/:id/update", usersController.usersUpdatePost);

module.exports = usersRouter;
