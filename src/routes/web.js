import express from "express";
import { getHomePage, getAboutPage, getCRUD, postCRUD, displayCRUD } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get("/about", getAboutPage);

    router.get("/crud", getCRUD);

    router.post("/post-crud", postCRUD);

    router.get("/display-crud", displayCRUD)

    return app.use("/", router);
}

module.exports = initWebRoutes;