import { handleUserLogin, displayListUser } from "../services/userService";

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

module.exports = { handleLogin, handleDisplayListUser }