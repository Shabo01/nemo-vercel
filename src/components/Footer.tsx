import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>О магазине</h3>
            <p>FashionHub - это онлайн магазин модной одежды с лучшими брендами и стилями.</p>
          </div>
          <div className="footer-section">
            <h3>Быстрые ссылки</h3>
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/products">Каталог</a></li>
              <li><a href="/about">О нас</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Контакты</h3>
            <ul>
              <li>Email: info@fashionhub.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Адрес: г. Москва, ул. Мода, 1</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Соцсети</h3>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FashionHub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
