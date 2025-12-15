import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../store/cartContext';
import type { Product } from '../types';

// Mock данные - в реальном приложении это будет запрос к API
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Классическая футболка',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    description: 'Удобная хлопковая футболка классического фасона. Идеально подходит для повседневной носки. Изготовлена из 100% органического хлопка, обеспечивая комфорт в течение всего дня.',
    category: 'Топы',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Белый', 'Серый', 'Синий'],
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Джинсы Slim Fit',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600',
    description: 'Модные джинсы облегающего кроя из качественного денима. Проверенный классический стиль, который никогда не выходит из моды.',
    category: 'Брюки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Темно-синий', 'Светло-синий', 'Черный'],
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Летний сарафан',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1495777861801-cd382e6ba6a2?w=600',
    description: 'Легкий сарафан идеален для жаркого дня. Выполнен из дышащей ткани с красивым фасоном.',
    category: 'Платья',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Розовый', 'Желтый', 'Белый', 'Голубой'],
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Кожаная куртка',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600',
    description: 'Стильная куртка из натуральной кожи. Идеальный выбор для осенне-весеннего сезона.',
    category: 'Верхняя одежда',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Коричневый', 'Бордо'],
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Спортивный топ',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506629082632-401ba2b727b0?w=600',
    description: 'Функциональный топ для активного образа жизни. Влагоотводящая ткань помогает оставаться комфортным во время тренировок.',
    category: 'Спорт',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Голубой', 'Розовый'],
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Длинное платье',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1595777707802-221d02d93f1c?w=600',
    description: 'Элегантное вечернее платье длины макси. Идеально для особых случаев и торжественных мероприятий.',
    category: 'Платья',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Красный', 'Золотой', 'Фиолетовый'],
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Вязаный свитер',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    description: 'Теплый и уютный свитер из мягкой пряжи. Идеален для холодных дней и уютных вечеров дома.',
    category: 'Топы',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Кремовый', 'Черный', 'Темно-синий'],
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Льняные брюки',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600',
    description: 'Комфортные брюки из натурального льна. Отлично подходят для летнего сезона.',
    category: 'Брюки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Бежевый', 'Светло-серый', 'Черный'],
    rating: 4.5,
  },
  {
    id: 9,
    name: 'Пиджак',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1591047990366-85a88b8e96d7?w=600',
    description: 'Классический пиджак для офиса. Идеальный выбор для делового стиля.',
    category: 'Верхняя одежда',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Серый', 'Темно-синий', 'Бордо'],
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Кроп-топ',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1506629082632-401ba2b727b0?w=600',
    description: 'Модный укороченный топ. Идеален для летнего образа.',
    category: 'Топы',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Розовый', 'Фиолетовый'],
    rating: 4.4,
  },
  {
    id: 11,
    name: 'Шорты',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506629082632-401ba2b727b0?w=600',
    description: 'Удобные шорты на лето. Идеальный выбор для активного отдыха.',
    category: 'Брюки',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Белый', 'Хаки', 'Синий'],
    rating: 4.6,
  },
  {
    id: 12,
    name: 'Кардиган',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600',
    description: 'Легкий кардиган для переходного сезона. Универсален и практичен.',
    category: 'Верхняя одежда',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Белый', 'Черный', 'Розовый'],
    rating: 4.7,
  },
];

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = MOCK_PRODUCTS.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Товар не найден</h1>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Вернуться к каталогу
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }
    if (!selectedColor) {
      alert('Пожалуйста, выберите цвет');
      return;
    }

    addToCart({
      id: Date.now(),
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });

    alert('Товар добавлен в корзину!');
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        <button className="btn btn-secondary btn-small" onClick={() => navigate(-1)}>
          ← Назад
        </button>

        <div className="product-detail">
          <img src={product.image} alt={product.name} className="product-image-large" />

          <div className="product-detail-info">
            <div className="product-category">{product.category}</div>
            <h1 className="product-detail-name">{product.name}</h1>
            <div className="product-detail-price">${product.price}</div>
            <div className="product-rating">
              {'⭐'.repeat(Math.round(product.rating))} {product.rating.toFixed(1)} / 5
            </div>

            <p className="product-description">{product.description}</p>

            <div className="size-color-selector">
              <div className="selector-group">
                <label className="selector-label">Размер</label>
                <div className="selector-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`selector-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="selector-group">
                <label className="selector-label">Цвет</label>
                <div className="selector-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`selector-option ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="quantity-selector">
              <label style={{ fontWeight: '600' }}>Количество:</label>
              <button
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                className="quantity-input"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>

            <button className="btn btn-primary" onClick={handleAddToCart} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              🛒 Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
