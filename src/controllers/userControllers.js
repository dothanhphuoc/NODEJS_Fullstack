import handleUserLogin from "../services/userService";

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

module.exports = { handleLogin }