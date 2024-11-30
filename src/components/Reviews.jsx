import * as React from 'react';

import'./styles/Reviews.css';

const reviews = [
  {
    author: "Екатерина Вальнова",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/762bb0c9e2205f477f7c075fa1dc9259b5ce9df447b8f0fe9c4a92c5226b7561?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842",
    text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
  },
  {
    author: "Евгений Стрыкало",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc87f2b148b92ebfa50f94ee7b51697ec796eb5e866c68cc1b157baa1817f3ee?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842",
    text: "СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2 className="section-title">отзывы</h2>
      
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-image">
              <img src={review.image} alt="" loading="lazy" />
            </div>
            <div className="review-content">
              <h3 className="review-author">{review.author}</h3>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="review-dots">
        <div className="dot active" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </section>
  );
}