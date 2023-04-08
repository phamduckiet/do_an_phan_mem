// tuowng tac api

import userModel from "../models/user.model.js";

export const login = async (req, res) => {

    const { username } = req.body;

    const checkUser = await userModel.findOne({ name : username });

    if(!checkUser) {
        return res.status(400).json({
            message : "tài khoản không tồn tại"
        });
    };

    return res.status(200).json({
        message : "ban đã login",
        token : "token",
        refresh_token : "refresh_token"
    });
};

export const register = async (req, res) => {
    const { username, password } = req.body;

    const checkUser = await userModel.findOne({ name : username });

    if(checkUser) {
        return res.status(400).json({
            "message" : "tạo không thành công do tài khoản đã tồn tại"
        });
    };

    const newUser = userModel({ name : username, password : password });
    await newUser.save()

    return res.status(400).json({
        message : "đăng ký thành công"
    });
};

// cookie, localStorage

