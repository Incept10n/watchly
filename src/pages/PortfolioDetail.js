import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import './PortfolioDetail.css';

function PortfolioDetail() {
  const { id } = useParams();
  const item = portfolioItems.find(p => p.id === parseInt(id));

  if (!item) {
    return (
      <div className="not-found">
        <h2>Заказ не найден</h2>
        <Link to="/portfolio">Вернуться в портфолио</Link>
      </div>
    );
  }

  return (
    <div className="portfolio-detail">
      <Link to="/portfolio" className="back-link">← Назад к портфолио</Link>

      <h1>{item.title}</h1>
      <p className="price-large">{item.price}</p>

      <div className="detail-gallery">
        {item.images.map((img, idx) => (
          <img key={idx} src={img} alt={`${item.title} - ${idx+1}`} />
        ))}
      </div>

      <div className="detail-info">
        <div className="info-block">
          <h3>Что хотел клиент</h3>
          <p>{item.clientWish}</p>
        </div>
        <div className="info-block">
          <h3>Что получил</h3>
          <p>{item.result}</p>
        </div>
        <div className="info-block">
          <h3>Описание заказа</h3>
          <p>{item.description}</p>
        </div>
        <div className="info-block">
          <h3>Стоимость</h3>
          <p className="price-final">{item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetail;