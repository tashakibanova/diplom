import * as React from 'react';
import BrandLogos from './BrandLogos';

import './styles/Footer.css';

export default function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h2 className="contact-title">Свяжитесь с нами</h2>
          
          <div className="contact-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/10f020d18f661b290ccc07d71e416a4f88c62163e20256fab5ae74df510d59ae?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
            <span className="contact-text">8 (800) 000 00 00</span>
          </div>
          
          <div className="contact-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a6d7f796b4af1603e8f0cb627c5bc4fa8baf7095091b7bf71346251b452cb7?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
            <span className="contact-text">inbox@mail.ru</span>
          </div>
          
          <div className="contact-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/db5135b71788d9c56d02d4e919f1deb8b09759beb67c97c043c7af3a68aa4660?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
            <span className="contact-text">tu.train.tickets</span>
          </div>
          
          <div className="contact-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94415836eb1f2dfe46fec7fe8815002b84cc099d6ff7afdf106e5b37bf18f30?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
            <address className="contact-text">
              г. Москва<br />
              ул. Московская 27-35<br />
              555 555
            </address>
          </div>
        </div>

        <div className="newsletter">
          <h2 className="newsletter-title">Подписка</h2>
          <p className="contact-text">Будьте в курсе событий</p>
          
          <form className="newsletter-form">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input type="email" id="email" className="newsletter-input" placeholder="e-mail" />
            <button type="submit" className="newsletter-button">отправить</button>
          </form>

          <h3 className="social-title">Подписывайтесь на нас</h3>

            
            <BrandLogos />
            
        </div>
      </div>

      <div className="footer-divider" />
      
      <div className="footer-bottom">
        <div className="footer-logo">Лого</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2313494f3fb5f9b7b72b95e1ccad8936fda6064afbd3dff6740599bff358f9f?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" loading="lazy" />
        <div className="copyright">2018 WEB</div>
      </div>
    </footer>
  );
}