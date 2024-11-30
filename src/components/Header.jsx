import * as React from 'react';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import'./styles/Header.css';

export default function Header() {
  return (
    <header className="header">  
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a5cbbbd0336a2f92d6771ac2ee4797c3b2a73337b3594cea6971714b85a1246?placeholderIfAbsent=true&apiKey=02efe553601046acb8eaf6df5f0f3842" 
        alt="" 
        className="header-bg" 
        loading="lazy"
      />
      <div className="logo">Лого</div>
      <Navigation />
      
      <div className="hero">
        <h1 className="hero-title">
          Вся жизнь -<br />
          <strong>путешествие!</strong>
        </h1>
        <SearchForm />
      </div>
      <div className="horizontal-line"></div>
    </header>
  );
}