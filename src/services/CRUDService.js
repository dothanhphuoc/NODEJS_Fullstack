import bcrypt from "bcryptjs";
import db from "../models/index";

let salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordWithBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordWithBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            });

            resolve('create user success!');
        } catch (e) {
            reject(e);
        }
    })


}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = { createNewUser };