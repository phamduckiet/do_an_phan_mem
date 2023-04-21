import axios from "axios";
import React, { useState } from "react";
import "../../styles/taikhoan.scss";
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  const handleRegister = async () => {
  	if( user.password !==  user.repassword) {
			toast.error('Mật khẩu nhập không khớp')
      return;
    }

    try {
      const { data } = await axios.post(`http://localhost:8080/user/register`, {
        username: user.username,
        password: user.password,
        repassword: user.repassword,
      });
      toast.success("Đăng ký thành công!");
      navigate('/admin/login');
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`)
    }

  };

  return (
    <div className="login">
      <div className="form">
        <h2>Register Account</h2>
        <input type="text" placeholder="Username" 
         onChange={(e) =>
          setUser((pre) => ({ ...pre, username: e.target.value }))
        }/>
        <input type="password" placeholder="Password" 
         onChange={(e) =>
          setUser((pre) => ({ ...pre, password: e.target.value }))
        }/>
        <input type="password" placeholder="Repassword" 
         onChange={(e) =>
          setUser((pre) => ({ ...pre, repassword: e.target.value }))
        }/>
        <input onClick={handleRegister} type="submit" value="Sign In" className="submit" />
      </div>
    </div>
  );
};

export default Form;
