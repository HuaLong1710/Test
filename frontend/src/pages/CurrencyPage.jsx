// src/pages/CurrencyPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CurrencyPage.css';
import Header from '../components/layout/Header';

const CurrencyPage = ({ onOpenLogin, onOpenRegister }) => {
  const navigate = useNavigate();
  const currencies = ['USD', 'EUR', 'AUD', 'THB', 'SGD', 'JPY', 'CNY'];
  
  // Mapping tiền tệ sang mã quốc gia cho flagcdn.com
  const currencyCountryCodes = {
    'USD': 'us',
    'EUR': 'eu',
    'AUD': 'au',
    'THB': 'th',
    'SGD': 'sg',
    'JPY': 'jp',
    'CNY': 'cn',
    'VND': 'vn'
  };

  // Hàm lấy URL cờ từ CDN
  const getFlagUrl = (currencyCode) => {
    const countryCode = currencyCountryCodes[currencyCode];
    return `https://flagcdn.com/w80/${countryCode}.png`;
  };
  
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('VND');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleLogoClick = () => {
    navigate('/');
  };

  // Lọc danh sách tiền tệ: bên kia không hiển thị tiền đã chọn
  const getAvailableCurrencies = (selectedCurrency, isSide) => {
    if (isSide === 'from') {
      return currencies.filter(c => c !== toCurrency);
    } else {
      return currencies.filter(c => c !== fromCurrency);
    }
  };

  return (
    <div className="app-container">
      <Header 
        onOpenLogin={onOpenLogin} 
        onOpenRegister={onOpenRegister}
        onLogoClick={handleLogoClick}
      />
      <div className="currency-container">
      {/* --- Phần 1: Chuyển đổi --- */}
      <h1 className="page-title">Chuyển đổi ngoại tệ</h1>
      
      <div className="section-label">Chọn ngân hàng</div>
      <div className="bank-actions">
        <button className="btn-action active">Mua tiền mặt</button>
        <button className="btn-action">Mua chuyển khoản</button>
        <button className="btn-action">Bán</button>
      </div>

      <div className="section-label">Số tiền cần bán</div>
      <div className="conversion-row">
        {/* Khối bên trái: Chọn ngoại tệ */}
        <div className="input-box">
          <div className="currency-selector">
            <img 
              src={getFlagUrl(fromCurrency)} 
              alt={fromCurrency}
              className="currency-flag-img"
            />
            <select 
              className="currency-select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {getAvailableCurrencies(fromCurrency, 'from').map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>
          <input 
            type="text" 
            placeholder="Nhập số tiền" 
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
          />
        </div>

        {/* Khối bên phải: Chọn ngoại tệ */}
        <div className="input-box">
          <div className="currency-selector">
            <img 
              src={getFlagUrl(toCurrency)} 
              alt={toCurrency}
              className="currency-flag-img"
            />
            <select 
              className="currency-select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="VND">VND</option>
              {getAvailableCurrencies(toCurrency, 'to').map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>
          <input 
            type="text" 
            placeholder="Nhập số tiền"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
          />
        </div>
      </div>

      {/* --- Phần 2: Bảng tỷ giá --- */}
      <h2 className="section-title">Tỷ giá ngoại tệ</h2>
      
      <div className="date-section">
        <div className="section-label">Ngày cập nhật</div>
        <div className="date-picker-wrapper">
          <svg className="date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <DatePicker
            selected={new Date(selectedDate)}
            onChange={(date) => setSelectedDate(date.toISOString().split('T')[0])}
            dateFormat="dd/MM/yyyy"
            className="date-input"
          />
        </div>
      </div>

      <table className="rate-table">
        <thead>
          <tr>
            <th>Mã ngoại tệ</th>
            <th>Tên ngoại tệ</th>
            <th>Mua tiền mặt</th>
            <th>Mua chuyển khoản</th>
            <th>Bán</th>
          </tr>
        </thead>
        <tbody>
          {/* Dữ liệu mẫu (tạo các dòng trống như hình) */}
          {[1, 2, 3, 4].map((item, index) => (
            <tr key={index}>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CurrencyPage;