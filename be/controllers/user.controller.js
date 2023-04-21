// tuowng tac api

import userModel from "../models/user.model.js";

export const login = async (req, res) => {

    const { username , password} = req.body;

    const checkUser = await userModel.findOne({ username : username});
    console.log(checkUser);
    if(!checkUser) {
        return res.status(400).json({
            message : "tài khoản không tồn tại"
        });
    };
    if(checkUser.password !== password){
        return res.status(400).json({
            message : "mật khẩu không đúng !"
        })
    }

    return res.status(200).json({
        message : "ban đã login",
        token : "token",
        refresh_token : "refresh_token"
    });
};

export const register = async (req, res) => {
    const { username, password } = req.body;

    const checkUser = await userModel.findOne({ username : username });

    if(checkUser) {
        return res.status(400).json({
            "message" : "Tạo không thành công do tài khoản tồn tại"
        });
    };

    const newUser = userModel({ username : username, password : password });
    await newUser.save()

    return res.status(200).json({
        message : "đăng ký thành công"
    });
};

// cookie, localStorage

