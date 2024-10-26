import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    
    <div className="login-container">
    <h2 className="login-title">Đăng nhập</h2>
    <form className="login-form">
      <div className="form-group">
        
        <input type="email" id="email" className="form-input" placeholder='email...' required />
      </div>
      <div className="form-group">
        <input type="password" id="password" className="form-input" placeholder='mật khẩu...' required />
      </div>
      <button type="submit" className="submit-btn">Đăng nhập</button>

      <div className="google-login">
        <button className="btn-google-btn">
        Đăng Nhập với Google
          <i className="fa-brands fa-google"></i> {/* Đảm bảo bạn đã cài đặt Font Awesome */}
        </button>
      </div>
    </form>
    <p className="register-prompt">
      Bạn chưa có tài khoản? <Link to="/sign-up" className="register-link">Đăng ký ngay</Link>
    </p>
      
  </div>
  );
};

export default Login;




