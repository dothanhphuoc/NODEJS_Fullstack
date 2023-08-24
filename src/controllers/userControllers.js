import { handleUserLogin, displayListUser, createNewUser, editUser, deleteUser } from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // check email
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Input parameter is missing!!!'
        })
    }

    let userData = await handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData : {},
    })
}

let handleDisplayListUser = async (req, res) => {
    let id = req.query.id; //All, id

    if (id) {
        let users = await displayListUser(id);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Ok Neil',
            users
        })
    } else {
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Missing request parameters!!!',
            users: []
        })
    }
}

let handleCreateNewUser = async (req, res) => {
    let message = await createNewUser(req.body);
    return res.status(200).json(message)
}

let handleEditUser = async (req, res) => {
    let dataUser = req.body;
    let message = await editUser(dataUser);
    return res.status(200).json(message)
}

let handleDeleteUser = async (req, res) => {

    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter'
        })
    }

    let message = await deleteUser(req.body.id);
    return res.status(200).json(message)
}

module.exports = { handleLogin, handleDisplayListUser, handleCreateNewUser, handleEditUser, handleDeleteUser }