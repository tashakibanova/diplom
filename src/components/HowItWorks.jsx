import * as React from 'react';

import'./styles/HowItWorks.css';

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65b788cf96dcec5d0aaa868606add8c0bce8e9c143dd47852351924a3f122c0c?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842",
    title: "Удобный заказ на сайте"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a36bfb3e7d1085f5c73c3103e0631863e7301179ea08b9c006951a2ad5dc7b82?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842",
    title: "Нет необходимости ехать в офис"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/872e0981a532f4201b370c7c26cb23722d5eedbe41e081bffd3fb4f04869d5a7?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842",
    title: "Огромный выбор направлений"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff511604ea7c0f6998a0dd38bbd132393a415f9591c6d8aecf18a3889533b1c?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" alt="" className="how-it-works-bg" loading="lazy" />
      
      <div className="how-it-works-content">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">Как это работает</h2>
          <button className="learn-more">Узнать больше</button>
        </div>
        
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <div className="feature-icon">
                <img src={feature.icon} alt="" loading="lazy" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}