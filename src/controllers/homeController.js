import db from '../models/index';
import { createNewUser, displayAllUser, getUserInfoId, updateUserData, deleteUserById } from '../services/CRUDService';

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

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;

    if (userId) {
        await deleteUserById(userId);
        // let userAfterDelete = 
        return res.send("Delete user Success!");
    } else {
        return res.send("User not found!");
    }
}

module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
}