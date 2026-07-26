import React, { useState } from 'react';
import './EmailForm.css';

function EmailForm({ onSuccess, onCancel }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !message) {
      setError('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);
    if (file) {
      formData.append('attachment', file);
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onSuccess();
      } else {
        const data = await response.json();
        setError(data.detail || 'Ошибка отправки. Попробуйте ещё раз.');
      }
    } catch (err) {
      setError('Не удалось отправить сообщение. Проверьте интернет-соединение.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-form-container">
      <h2>Написать нам на почту</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <label htmlFor="email">Ваш Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@mail.ru"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Ваше сообщение *</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            placeholder="Опишите свою идею: какие часы вы хотите, цвет, материал, ремешок, особые пожелания..."
          />
          <small className="hint">Подсказка: расскажите о своих предпочтениях, вдохновении, бюджете. Чем подробнее – тем точнее мы поймём вашу идею.</small>
        </div>

        <div className="form-group">
          <label htmlFor="file">Прикрепить фото (необязательно)</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />
          <small>Фото часов, эскизов или референсов.</small>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-btn">Назад</button>
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;