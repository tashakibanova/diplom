import React, { useState } from "react";

export default function BrandLogo({ src, width, aspectRatio, alt }) {
  const [isActive, setIsActive] = useState(false); // Состояние для отслеживания нажатия

  const handleClick = () => {
    setIsActive(!isActive); // Переключение состояния при нажатии
  };

  return (
    <>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`brand-logo ${isActive ? 'active' : ''}`} // Добавление класса при активации
        onClick={handleClick} // Обработчик клика
      />
      <style jsx>{`
        .brand-logo {
          aspect-ratio: ${aspectRatio};
          object-fit: contain;
          object-position: center;
          width: ${width}px;
        }
        .brand-logo.active {
          filter: brightness(0) saturate(100%) invert(1) sepia(1) saturate(1000%) hue-rotate(50deg); // Изменение цвета на желтый
        }
      `}</style>
    </>
  );
}
