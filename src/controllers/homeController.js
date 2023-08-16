import db from '../models/index';
import { createNewUser } from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    }
    catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render("aboutPage.ejs");
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await createNewUser(req.body);
    console.log(message);
    return res.send("Post CRUD")
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD
}