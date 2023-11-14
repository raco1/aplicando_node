const { Router } = require("express");

const ensureAuthenticated = require("../middleware/EnsureAuthentication")

const usersRoutes = Router();

const UserController = require("../controllers/UserController");

const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);

module.exports = usersRoutes;