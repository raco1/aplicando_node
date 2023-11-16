const sessionsRoutes = require("./sessions.routes");
const notesRoutes = require("./notes.routes");
const usersRoutes = require("./user.routes");
const tagsRoutes = require("./tags.routes");
const { Router } = require("express");
const routes = Router();

routes.use("/sessions", sessionsRoutes)
routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;