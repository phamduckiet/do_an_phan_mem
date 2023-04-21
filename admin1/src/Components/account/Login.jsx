import axios from "axios";
import React, { useState } from "react";
import "../../styles/taikhoan.scss";
import { toast } from 'react-toastify';
import { setUser } from "../../redux/slice/userSlice";
import {  useDispatch } from 'react-redux';

const Form = () => {
  const [user, setUserc] = useState({});
  const dispatch = useDispatch()
  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8080/user/login`, {
        username: user.username,
        password: user.password,
      });
      toast.success(`Đăng nhập thành công`);
      dispatch(setUser(data))
    } catch (error) {
        toast.error(`${error?.response?.data?.message}`)
  }
  };

  return (
    <div className="login">
      <div className="form">
        <h2>Login Account</h2>
        <input type="text" placeholder="Username" 
         onChange={(e) =>
          setUserc((pre) => ({ ...pre, username: e.target.value }))
        }/>
        <input type="password" placeholder="Password" 
         onChange={(e) =>
          setUserc((pre) => ({ ...pre, password: e.target.value }))
        }/>
        <input onClick={handleLogin} type="submit" value="Sign In" className="submit" />
      </div>
    </div>
  );
};

export default Form;
