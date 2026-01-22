// src/components/auth/RegisterModal.jsx
import React, { useState } from 'react';
import './RegisterModal.css';

const RegisterModal = ({ onClose, onSwitchToLogin }) => {
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="register-container" onClick={(e) => e.stopPropagation()}>
        
        <h2 className="register-logo">
          <span className="logo-forex">Forex</span>
          <span className="logo-app">App</span>
        </h2>

        <form className="register-form-box">
          {/* Hàng 1: Họ và Tên */}
          <div className="form-row">
            <input type="text" placeholder="Họ" className="reg-input" />
            <input type="text" placeholder="Tên" className="reg-input" />
          </div>

          {/* Hàng 2: Ngày tháng năm sinh */}
          <div className="form-group">
            <label>Ngày sinh:</label>
            <div className="date-options">
              <input 
                type="number" 
                placeholder="Ngày" 
                min="1" 
                max="31" 
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="date-input"
              />
              <input 
                type="number" 
                placeholder="Tháng" 
                min="1" 
                max="12" 
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="date-input"
              />
              <input 
                type="number" 
                placeholder="Năm" 
                min="1900" 
                max={new Date().getFullYear()}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="date-input"
              />
            </div>
          </div>

          {/* Hàng 3: Giới tính */}
          <div className="form-group">
            <label>Giới tính:</label>
            <div className="gender-options">
              <button 
                type="button"
                className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
                onClick={() => setGender('male')}
              >
                Nam
              </button>
              <button 
                type="button"
                className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
                onClick={() => setGender('female')}
              >
                Nữ
              </button>
            </div>
          </div>

          {/* Hàng 4: Email */}
          <input type="email" placeholder="Email" className="reg-input full-width" />

          {/* Hàng 5: Số điện thoại */}
          <input type="tel" placeholder="Số điện thoại" className="reg-input full-width" />

          {/* Hàng 6: Mật khẩu */}
          <input type="password" placeholder="Mật khẩu" className="reg-input full-width" />

          {/* Hàng 7: Xác nhận mật khẩu */}
          <input type="password" placeholder="Xác nhận mật khẩu" className="reg-input full-width" />

          {/* Nút Đăng ký */}
          <button type="submit" className="register-submit-btn">Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;