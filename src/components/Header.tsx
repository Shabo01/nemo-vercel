import { Link } from 'react-router-dom';
import { useCart } from '../store/cartContext';

export const Header = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            👗 FashionHub
          </Link>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/products">Каталог</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
            </ul>
          </nav>
          <Link to="/cart" className="cart-icon">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};
