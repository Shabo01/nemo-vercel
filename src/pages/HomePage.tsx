import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types';

// Mock данные для продуктов
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Классическая футболка',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    description: 'Удобная хлопковая футболка классического фасона',
    category: 'Топы',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Белый', 'Серый', 'Синий'],
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Джинсы Slim Fit',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400',
    description: 'Модные джинсы облегающего кроя из качественного денима',
    category: 'Брюки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Темно-синий', 'Светло-синий', 'Черный'],
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Летний сарафан',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1495777861801-cd382e6ba6a2?w=400',
    description: 'Легкий сарафан идеален для жаркого дня',
    category: 'Платья',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Розовый', 'Желтый', 'Белый', 'Голубой'],
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Кожаная куртка',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400',
    description: 'Стильная куртка из натуральной кожи',
    category: 'Верхняя одежда',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Коричневый', 'Бордо'],
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Спортивный топ',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506629082632-401ba2b727b0?w=400',
    description: 'Функциональный топ для активного образа жизни',
    category: 'Спорт',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Голубой', 'Розовый'],
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Длинное платье',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1595777707802-221d02d93f1c?w=400',
    description: 'Элегантное вечернее платье длины макси',
    category: 'Платья',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Красный', 'Золотой', 'Фиолетовый'],
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Вязаный свитер',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    description: 'Теплый и уютный свитер из мягкой пряжи',
    category: 'Топы',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Кремовый', 'Черный', 'Темно-синий'],
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Льняные брюки',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400',
    description: 'Комфортные брюки из натурального льна',
    category: 'Брюки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Бежевый', 'Светло-серый', 'Черный'],
    rating: 4.5,
  },
  {
    id: 9,
    name: 'Пиджак',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1591047990366-85a88b8e96d7?w=400',
    description: 'Классический пиджак для офиса',
    category: 'Верхняя одежда',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Серый', 'Темно-синий', 'Бордо'],
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Кроп-топ',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1506629082632-401ba2b727b0?w=400',
    description: 'Модный укороченный топ',
    category: 'Топы',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Розовый', 'Фиолетовый'],
    rating: 4.4,
  },
  {
    id: 11,
    name: 'Шорты',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506629082632-401ba2b727b0?w=400',
    description: 'Удобные шорты на лето',
    category: 'Брюки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Хаки', 'Синий'],
    rating: 4.6,
  },
  {
    id: 12,
    name: 'Кардиган',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400',
    description: 'Легкий кардиган для переходного сезона',
    category: 'Верхняя одежда',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Белый', 'Черный', 'Розовый'],
    rating: 4.7,
  },
];

export const HomePage = () => {
  const [featured] = useState<Product[]>(MOCK_PRODUCTS.slice(0, 6));

  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Шабдан, добро пожаловать в FashionHub</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Откройте для себя последние модные тренды</p>
          <a href="/products" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Начать покупки
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Популярные товары</h2>
          <div className="products-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Категории</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {['Топы', 'Брюки', 'Платья', 'Верхняя одежда', 'Спорт'].map((category) => (
              <a
                key={category}
                href="/products"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  background: '#f5f5f5',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = '#e0e0e0';
                  (e.target as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = '#f5f5f5';
                  (e.target as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                <h3>{category}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
