import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderModal from '../components/OrderModal';
import './HomePage.css';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Часы, которых нет в магазинах</h1>
          <p>Полная кастомизация: от цвета циферблата до формы стрелок. Создайте аксессуар, который отражает вашу личность.</p>
          <button onClick={openModal} className="hero-cta">Заказать часы</button>
          <Link to="/portfolio" className="hero-link">Посмотреть портфолио →</Link>
        </div>
      </section>

      {/* О нас */}
      <section className="about">
        <h2>О нас</h2>
        <p>
          Мы – команда энтузиастов, которые превращают обычные часы в уникальные произведения.
          Наша страсть – создавать аксессуары с душой, учитывая каждое пожелание клиента.
          Мы работаем с механизмами, корпусами, циферблатами и ремешками, чтобы ваши часы стали продолжением вас.
        </p>
      </section>

      {/* Услуги */}
      <section className="services">
        <h2>Как мы работаем</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Вы присылаете идею</h3>
            <p>Фото, описание, абстрактный образ – расскажите, что вы хотите почувствовать, глядя на циферблат.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Мы создаём концепцию</h3>
            <p>Визуализация будущих часов: рисунок, чертёж или подбор элементов.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Согласовываем</h3>
            <p>Обсуждаем, вносим правки, пока вы не скажете: «Да, это идеально!»</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Предоплата 50%</h3>
            <p>После согласования концепции мы начинаем сборку.</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Финальная демонстрация</h3>
            <p>Фото, видео, Zoom-звонок – вы видите часы до оплаты остатка.</p>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <h3>Получение</h3>
            <p>Оплачиваете оставшиеся 50% – и мы отправляем часы к вам.</p>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="advantages">
        <h2>Почему мы?</h2>
        <div className="advantage-grid">
          <div className="advantage-item">
            <h3>✅ Гарантия 1 год</h3>
            <p>На работу и механизм. Бесплатный ремонт при любой поломке.</p>
          </div>
          <div className="advantage-item">
            <h3>🔄 Политика «Примерки»</h3>
            <p>Надоели часы после носки? Оформите возврат – мы вернём 50% стоимости.</p>
          </div>
          <div className="advantage-item">
            <h3>🎁 Бонус за отзыв</h3>
            <p>Оставьте отзыв на Авито – получите стильную шкатулку в подарок.</p>
          </div>
          <div className="advantage-item">
            <h3>💬 Бесплатная консультация</h3>
            <p>Обсуждаем идеи бесплатно, без обязательств.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Готовы создать свои идеальные часы?</h2>
        <button onClick={openModal} className="cta-large">Заказать сейчас</button>
      </section>

      <OrderModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default HomePage;