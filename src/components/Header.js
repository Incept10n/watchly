import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderModal from './OrderModal';
import './Header.css';

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">⌚ Watchly</Link>
        </div>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/portfolio">Портфолио</Link>
          <button className="cta-button" onClick={openModal}>
            Заказать часы
          </button>
        </nav>
      </div>
      <OrderModal isOpen={modalOpen} onClose={closeModal} />
    </header>
  );
}

export default Header;