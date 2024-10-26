import React from 'react';
import './Signup.css'; 
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    
    <div className="register-container">
    <h2 className="register-title">Đăng ký</h2>
    <form className="register-form">
      <div className="form-group">
        <input type="text" id="name" className="form-input" placeholder='Tên...' required />
      </div>

      <div className="form-group">
        <input type="text" id="phone" className="form-input" placeholder='Số điện thoại...' required />
      </div>

      <div className="form-group">
        <input type="email" id="email" className="form-input" placeholder='Email...' required />
      </div>

      <div className="form-group">
        <input type="password" id="password" className="form-input" placeholder='Mật khẩu...' required />
      </div>

      <button type="submit" className="submit-btn">Đăng ký</button>

    
    </form>
    <p className="login-prompt">
      Bạn đã có tài khoản? <Link to="/login" className="register-link">Đăng nhập</Link>
    </p>
      
  </div>
  );
};

export default Signup;




