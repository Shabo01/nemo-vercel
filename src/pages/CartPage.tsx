import { useNavigate } from 'react-router-dom';
import { useCart } from '../store/cartContext';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Корзина пуста');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>Корзина покупок</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Ваша корзина пуста</h2>
            <p style={{ marginBottom: '2rem' }}>Добавьте товары для начала покупок</p>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Перейти в каталог
            </button>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-meta">
                      Цена: ${item.price}
                      {item.size && <> | Размер: {item.size}</>}
                      {item.color && <> | Цвет: {item.color}</>}
                    </div>
                    <div className="quantity-selector">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity-input"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      />
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ff6b6b' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="btn btn-danger btn-small"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2 style={{ marginBottom: '1rem' }}>Итог</h2>
              <div className="summary-row">
                <span>Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт):</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <div className="summary-row">
                <span className="summary-total">К оплате:</span>
                <span className="summary-total">${getTotalPrice().toFixed(2)}</span>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleCheckout}
                style={{ width: '100%', marginBottom: '0.5rem' }}
              >
                Оформить заказ
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate('/products')}
                style={{ width: '100%', marginBottom: '0.5rem' }}
              >
                Продолжить покупки
              </button>
              <button
                className="btn btn-secondary"
                onClick={clearCart}
                style={{ width: '100%' }}
              >
                Очистить корзину
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
