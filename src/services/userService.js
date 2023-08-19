import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from "bcryptjs"

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            //isExist: ton tai
            let isExist = await checkUserEmail(email);

            if (isExist) {  //user already axist
                let user = await db.User.findOne({
                    where: {
                        email: email,
                    },
                    attributes: ['email', 'roleId', 'password'],
                    raw: true
                })

                if (user) {
                    //compare password: so sanh password
                    let checkPassword = bcrypt.compareSync(password, user.password);
                    if (checkPassword) {
                        userData.errCode = 0;
                        userData.errMessage = "Has Password";

                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = "Wrong Password";
                    }
                } else {
                    // return err
                    userData.errCode = 2;
                    userData.errMessage = `User's not found!`
                }

            } else {
                // return err
                userData.errCode = 1;
                userData.errMessage = "Your Gmail does not exist in system, please try again!!"
            }

            resolve(userData);

        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })

            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

export default handleUserLogin;