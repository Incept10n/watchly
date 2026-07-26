import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Watchly</h4>
          <p>Кастомизация часов с душой.</p>
          <p>Сделаем часы, которые отражают вашу личность.</p>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p><span className="icon">📧</span> Incept1on.hf@yandex.ru</p>
          <p><span className="icon">📞</span> +7 (999) 123-45-67</p>
          <p><span className="icon">📍</span> Москва, ул. Тверская, д. 1</p>
        </div>
        <div className="footer-section">
          <h4>Соцсети</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Watchly. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;