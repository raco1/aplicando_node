const { Router } = require("express");
const ensureAuthenticated = require("../middleware/EnsureAuthentication")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const usersRoutes = Router();

const UserController = require("../controllers/UserController");
const UserAvatarController = require("../controllers/UserAvatarController")
const upload = multer(uploadConfig.MULTER)

const userController = new UserController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;