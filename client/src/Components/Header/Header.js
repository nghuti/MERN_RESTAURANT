import React from 'react';
import { Helmet } from 'react-helmet';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="headerbar">
          <div className="nav">
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">Chúng tôi</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
              <li><Link to="/booktable">Đặt bàn</Link></li>
              <li><Link to="/login" className="login-btn">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="logo-info" style={{ cursor: 'none' }}>
          <div className="logo">
            Tewaiseuu
          </div>
          <div className="logo-name">
            TAIWAN FOOD RESTAURANT
          </div>
        </div>

        <div className="bar">
          <i className="fa-solid fa-list fa-2xl"></i>
          <i className="fa-solid fa-x fa-2xl"></i>
        </div>

        <div className="nav-bar">
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
            <li><Link to="/reservation"><button className='book-btn'>Đặt bàn</button></Link></li>
            <li><Link to="/login" className="login-btn">Đăng nhập</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
 
  
export default Header;
