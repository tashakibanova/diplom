import * as React from 'react';
import'./styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">о нас</h2>
      <div className="about-content">
        <div className="about-accent" />
        <div className="about-text">
        Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.
        <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
        <p><strong>Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</strong></p>
        </div>
      </div>
    </section>
  );
}