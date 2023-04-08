import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({});

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/user/login`, {
        username: user.username,
        password: user.password,
      });

      console.log("handleLogin", response);
    } catch (error) {
      alert(`login error`);
    }
  };

  const handleRegister = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8080/user/register`, {
        username: user.username,
        password: user.password,
      });

      console.log("handleRegister : ", data);
    } catch (error) {
      alert(`${error?.response?.data?.message}`)
    }
  };

  return (
    <div className="form__user">
      <div className="form__user__item">
        <label htmlFor="">User name</label>
        <input
          type="text"
          onChange={(e) =>
            setUser((pre) => ({ ...pre, username: e.target.value }))
          }
        />
      </div>
      <div className="form__user__item">
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={(e) =>
            setUser((pre) => ({ ...pre, password: e.target.value }))
          }
        />
      </div>

      <button onClick={handleLogin}>login</button>
      <button onClick={handleRegister}>register</button>
    </div>
  );
};

export default Form;
