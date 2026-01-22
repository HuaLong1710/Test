// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import MarketChart from '../components/charts/MarketChart';
import PriceBoard from '../components/dashboard/PriceBoard';
import LoginModal from '../components/auth/LoginModal';
import RegisterModal from '../components/auth/RegisterModal';

const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <Header 
        onOpenLogin={() => setShowLoginModal(true)}
        onOpenRegister={() => setShowRegisterModal(true)}
        onLogoClick={() => {
          setShowLoginModal(false);
          setShowRegisterModal(false);
        }}
      />
      <main className="main-content">
        <div className="left-column">
          <section className="chart-section">
             <MarketChart />
          </section>
          <section className="bottom-section">
             <span>(Khu vực thông tin bổ sung/Lịch sử lệnh)</span>
          </section>
        </div>
        <aside className="right-column">
          <PriceBoard />
        </aside>
      </main>
      
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onSwitchToRegister={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}
      
      {showRegisterModal && (
        <RegisterModal 
          onClose={() => setShowRegisterModal(false)}
          onSwitchToLogin={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </>
  );
};

export default HomePage;