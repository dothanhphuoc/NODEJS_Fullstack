import express from "express";
import {
    getHomePage,
    getCRUD,
    postCRUD,
    displayCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD
} from "../controllers/homeController";
import {
    handleLogin,
} from "../controllers/userControllers";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    router.get("/create-crud", getCRUD);

    router.post("/post-crud", postCRUD);

    router.get("/display-crud", displayCRUD);

    router.get("/edit-crud", getEditCRUD);

    router.post("/put-crud", putCRUD);

    router.get("/delete-crud", deleteCRUD);


    /** REACTJS text POSTMAN*/
    router.post("/api/login", handleLogin);

    return app.use("/", router);
}

module.exports = initWebRoutes;