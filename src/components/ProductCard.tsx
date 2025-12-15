import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">
            {'⭐'.repeat(Math.round(product.rating))} {product.rating.toFixed(1)}
          </div>
        </div>
      </div>
    </Link>
  );
};
