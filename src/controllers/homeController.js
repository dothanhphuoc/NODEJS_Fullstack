import db from '../models/index';
import { createNewUser, displayAllUser, getUserInfoId, updateUserData } from '../services/CRUDService';

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
    return res.render('createCRUD.ejs')
}

let postCRUD = async (req, res) => {
    let message = await createNewUser(req.body);
    console.log(message);
    return res.send("Post CRUD");
}

let displayCRUD = async (req, res) => {
    let userList = await displayAllUser();
    // console.log(userList)
    return res.render('displayCRUD.ejs', { userList: userList });
}

let getEditCRUD = async (req, res) => {

    let userId = req.query.id;
    if (userId) {
        let userData = await getUserInfoId(userId);
        //check user data not found
        if (userData) {
            return res.render("editCRUD.ejs", { userData: userData })
        }
    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async (req, res) => {
    let infoUpdateUser = req.body;
    let userListUpdate = await updateUserData(infoUpdateUser);
    return res.render("displayCRUD.ejs", { userList: userListUpdate })
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayCRUD,
    getEditCRUD,
    putCRUD
}