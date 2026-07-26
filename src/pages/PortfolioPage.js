import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <h1>Наше портфолио</h1>
      <p className="subtitle">Посмотрите, какие часы мы уже создали, и узнайте цены</p>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <Link to={`/portfolio/${item.id}`}>
              <div className="card-image">
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <p className="short-desc">{item.description.substring(0, 80)}...</p>
                <span className="view-link">Подробнее →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;