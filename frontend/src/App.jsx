// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; 

// Import các trang
import HomePage from './pages/HomePage';
import CurrencyPage from './pages/CurrencyPage'; // Giữ lại trang Chuyển đổi tiền tệ

// Import Modal
import LoginModal from './components/auth/LoginModal'; 
import RegisterModal from './components/auth/RegisterModal'; 

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const openLogin = () => setShowLogin(true);
  const openRegister = () => setShowRegister(true);

  return (
    <div className="app-container">
      <Routes>
        {/* Trang chủ: Truyền hàm mở modal vào */}
        <Route 
          path="/" 
          element={<HomePage onOpenLogin={openLogin} onOpenRegister={openRegister} />} 
        />

        {/* Trang Chuyển đổi tiền tệ */}
        <Route 
          path="/currency-converter" 
          element={<CurrencyPage onOpenLogin={openLogin} onOpenRegister={openRegister} />} 
        />
      </Routes>

      {/* Logic hiển thị Modal (Global) */}
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onRegisterClick={switchToRegister} 
        />
      )}
      
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
}

export default App;