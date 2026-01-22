// src/components/layout/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onOpenLogin, onOpenRegister, onLogoClick }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
    navigate('/');
  };

  return (
    <header className="header">
      {/* Bấm vào Logo thì về trang chủ '/' */}
      <div className="header-item header-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Forex</div>
      
      <div className="header-item">Thị trường</div>
      <div className="header-item">Tin tức & phân tích</div>
      
      {/* --- SỬA ĐOẠN NÀY: Mục Công cụ có Dropdown --- */}
      <div className="header-item has-dropdown">
        <span>Công cụ</span>
        
        {/* Menu con sẽ hiện ra khi hover (nhờ CSS đã thêm vào App.css) */}
        <div className="dropdown-menu">
          <div 
            className="dropdown-item" 
            onClick={() => navigate('/currency-converter')} 
          >
            Chuyển đổi tiền tệ
          </div>
          <div 
            className="dropdown-item"
            onClick={() => navigate('/ai-advisor')} 
          >
            AI tư vấn tài chính
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
      
      <div className="header-item header-search">
        <div className="search-box">
          <input type="text" placeholder="Tìm kiếm..." className="search-input" />
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      </div>
      
      <div className="header-item">
        <svg className="notification-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>

      {/* Nút Đăng ký/Đăng nhập: Giữ nguyên logic mở modal cũ của bạn */}
      <div 
        className="header-item header-auth"
        onClick={onOpenLogin} 
        style={{ cursor: 'pointer' }}
      >
        <div className="auth-box">
          <span className="auth-register" onClick={(e) => {
            e.stopPropagation();
            onOpenRegister();
          }}>Đăng ký</span>
          <span className="auth-separator">/</span>
          <span className="auth-login">Đăng nhập</span>
        </div>
      </div>
    </header>
  );
};

export default Header;