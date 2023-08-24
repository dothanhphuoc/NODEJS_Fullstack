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

let displayAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let userList = await db.User.findAll({
                raw: true
            });
            resolve(userList);
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfoId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userInfo = await db.User.findOne({
                where: { id: userId },
                raw: true
            })

            if (userInfo) {
                resolve(userInfo);
            } else {
                resolve({})
            }

        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = (infoUpdateUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: infoUpdateUser.id },
                raw: false
            })

            if (user) {
                user.firstName = infoUpdateUser.firstName;
                user.lastName = infoUpdateUser.lastName;
                user.address = infoUpdateUser.address;

                await user.save();

                let userListUpdate = await db.User.findAll();
                resolve(userListUpdate);
            } else {
                resolve();
            }

        } catch (e) {
            reject(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User

            if (user) {
                await user.destroy({
                    where: { id: userId }
                });
            }
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = { createNewUser, displayAllUser, getUserInfoId, updateUserData, deleteUserById };