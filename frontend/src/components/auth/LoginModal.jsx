// src/components/auth/LoginModal.jsx
import React from 'react';
import './LoginModal.css'; 

const LoginModal = ({ onClose, onSwitchToRegister }) => {
  return (
    <div className="modal-overlay" onClick={onClose}> 
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-left">
          <h2 className="modal-logo">
            <span className="logo-forex">Forex</span>
            <span className="logo-app">App</span>
          </h2>
          <p className="modal-slogan">
            Hỗ trợ phân tích thị trường để giúp <br />
            bạn đưa ra quyết định chính xác hơn.
          </p>
        </div>

        <div className="modal-right">
          <form className="login-form">
            <input type="text" placeholder="Email hoặc số điện thoại" className="modal-input" />
            <input type="password" placeholder="Mật khẩu" className="modal-input" />
            
            <button type="button" className="modal-btn primary-btn">Đăng nhập</button>
            <div className="forgot-password">Quên mật khẩu ?</div>
            
            <button 
              type="button" 
              className="modal-btn secondary-btn"
              onClick={onSwitchToRegister} 
            >
              Tạo tài khoản mới
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;