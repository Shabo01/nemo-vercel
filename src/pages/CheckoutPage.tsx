import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../store/cartContext';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.cardNumber
    ) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    setIsSubmitting(true);

    // Имитируем обработку платежа
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>Корзина пуста</h1>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Вернуться в каталог
        </button>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h1>Спасибо за ваш заказ!</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            Ваш заказ успешно оформлен. На почту {formData.email} будет отправлено
            подтверждение с деталями доставки.
          </p>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
            Номер заказа: <strong>#ORD-{Date.now()}</strong>
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  const total = getTotalPrice();

  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>Оформление заказа</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
          <form className="checkout-form" onSubmit={handleSubmit} style={{ maxWidth: 'none' }}>
            {/* Personal Information */}
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>1. Личные данные</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Имя *</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Фамилия *</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Телефон</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Shipping Address */}
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', marginTop: '2rem' }}>
              2. Адрес доставки
            </h2>

            <div className="form-group">
              <label className="form-label">Адрес *</label>
              <input
                type="text"
                name="address"
                className="form-input"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Город</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Почтовый индекс</label>
                <input
                  type="text"
                  name="postalCode"
                  className="form-input"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Payment */}
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', marginTop: '2rem' }}>
              3. Платежные данные
            </h2>

            <div className="form-group">
              <label className="form-label">Номер карты *</label>
              <input
                type="text"
                name="cardNumber"
                className="form-input"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Срок действия</label>
                <input
                  type="text"
                  name="cardExpiry"
                  className="form-input"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">CVC</label>
                <input
                  type="text"
                  name="cardCVC"
                  className="form-input"
                  placeholder="123"
                  value={formData.cardCVC}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '2rem' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Обработка...' : `Подтвердить заказ ($${total.toFixed(2)})`}
            </button>
          </form>

          {/* Order Summary */}
          <div className="cart-summary" style={{ position: 'sticky', top: '80px', height: 'fit-content' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ваш заказ</h2>
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
              {cartItems.map((item) => (
                <div key={item.id} className="summary-row" style={{ paddingBottom: '0.5rem' }}>
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-row">
              <span>Доставка:</span>
              <span>Бесплатно</span>
            </div>
            <div className="summary-row">
              <span className="summary-total">Итого:</span>
              <span className="summary-total">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
