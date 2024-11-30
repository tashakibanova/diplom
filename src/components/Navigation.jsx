import * as React from 'react';

const navItems = [
  { text: 'О нас', href: '#about' },
  { text: 'Как это работает', href: '#how-it-works' },
  { text: 'Отзывы', href: '#reviews' },
  { text: 'Контакты', href: '#contacts' }
];

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}