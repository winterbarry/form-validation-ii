// import Express Router and the controller module.
const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

// display the user list.
usersRouter.get("/", usersController.usersListGet);

// display the form for creating a user.
usersRouter.get("/create", usersController.usersCreateGet);

// handle the submitted form data.
usersRouter.post("/create", usersController.usersCreatePost);

// display the selected user's update form.
usersRouter.get("/:id/update", usersController.usersUpdateGet);

// handle submitted user update data.
usersRouter.post("/:id/update", usersController.usersUpdatePost);

// delete the selected user.
usersRouter.post("/:id/delete", usersController.usersDeletePost);

// export the router so app.js can use these routes.
module.exports = usersRouter;
