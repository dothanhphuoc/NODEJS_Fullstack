import express from "express";
import { getHomePage, getAboutPage, getCRUD, postCRUD, displayCRUD, getEditCRUD, putCRUD, deleteCRUD } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get("/about", getAboutPage);

    router.get("/create-crud", getCRUD);

    router.post("/post-crud", postCRUD);

    router.get("/display-crud", displayCRUD);

    router.get("/edit-crud", getEditCRUD);

    router.post("/put-crud", putCRUD);

    router.get("/delete-crud", deleteCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;