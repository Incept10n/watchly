import React, { useState } from 'react';
import EmailForm from './EmailForm';
import './OrderModal.css';

function OrderModal({ isOpen, onClose }) {
  const [step, setStep] = useState('choice'); // 'choice' | 'email' | 'thanks'
  const [showEmailForm, setShowEmailForm] = useState(false);

  if (!isOpen) return null;

  const handleAvito = () => {
    // Замените на реальную ссылку на вашу услугу на Авито
    window.location.href = 'https://www.avito.ru/...';
  };

  const handleEmailChoice = () => {
    setShowEmailForm(true);
    setStep('email');
  };

  const handleEmailSent = () => {
    setStep('thanks');
  };

  const handleClose = () => {
    setStep('choice');
    setShowEmailForm(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>✕</button>

        {step === 'choice' && (
          <div className="choice-step">
            <h2>Как вы хотите заказать?</h2>
            <div className="choice-buttons">
              <button onClick={handleEmailChoice} className="choice-btn email-btn">
                📧 Написать нам на почту
              </button>
              <button onClick={handleAvito} className="choice-btn avito-btn">
                📦 Услуга на Авито
              </button>
            </div>
          </div>
        )}

        {step === 'email' && (
          <EmailForm onSuccess={handleEmailSent} onCancel={() => setStep('choice')} />
        )}

        {step === 'thanks' && (
          <div className="thanks-step">
            <h2>✅ Спасибо!</h2>
            <p>Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
            <button onClick={handleClose} className="close-thanks-btn">Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderModal;