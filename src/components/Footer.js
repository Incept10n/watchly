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
          <p><span className="icon">📞</span> +7 (931) 000-51-59</p>
        </div>
        <div className="footer-section">
          <h4>Соцсети</h4>
          <div className="social-links">
            <a href="https://vk.ru/club240513824" target="_blank" rel="noopener noreferrer">VK</a>
            <a href="https://www.youtube.com/@watchly-custom" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://ru.pinterest.com/WatchlyCustom/" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Watchly</p>
      </div>
    </footer>
  );
}

export default Footer;