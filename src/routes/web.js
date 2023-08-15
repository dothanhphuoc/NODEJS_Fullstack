import express from "express";
import { getHomePage, getAboutPage, getDemo } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get("/about", getAboutPage);

    router.get("/demo", getDemo);

    return app.use("/", router);
}

module.exports = initWebRoutes;