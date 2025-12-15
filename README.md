# 👗 FashionHub - E-Commerce Website

Полнофункциональный онлайн магазин по продаже одежды, построенный на **React 18 + Vite + TypeScript**, готовый к развертыванию на **Vercel** в течение 2 минут! 🚀

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-latest-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-green)

## 🎯 Быстрый старт

```bash
# 1. Установка зависимостей
npm install

# 2. Запуск разработки
npm run dev

# 3. Откройте http://localhost:5173
```

## 🚀 Развертывание на Vercel

**Способ 1 - GitHub (рекомендуется):**
1. Загрузите проект на GitHub
2. Откройте [vercel.com](https://vercel.com) → New Project
3. Выберите репозиторий и нажмите Deploy
4. ✅ Готово за 1-2 минуты!

**Способ 2 - Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

## ✨ Основные возможности

| Компонент | Описание |
|-----------|---------|
| 🏠 **Главная** | Красивая главная страница с популярными товарами и категориями |
| 🛍️ **Каталог** | 12+ товаров с фильтрацией по категориям и поиском по названию |
| 📄 **Детали товара** | Выбор размера, цвета, количества и добавление в корзину |
| 🛒 **Корзина** | Управление товарами, изменение количества, удаление |
| 💳 **Оформление** | Полная форма с личными данными и информацией о доставке |
| ℹ️ **О нас** | Информация о магазине, преимущества и контакты |
| 📱 **Адаптивность** | Идеально работает на всех размерах экранов |

## 📁 Структура проекта

```
src/
├── components/           # Переиспользуемые компоненты
│   ├── Header.tsx       # Шапка с навигацией
│   ├── Footer.tsx       # Подвал сайта
│   └── ProductCard.tsx  # Карточка товара
├── pages/                # Страницы приложения
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   └── AboutPage.tsx
├── store/                # Управление состоянием
│   └── cartContext.tsx  # Context API для корзины
├── styles/               # Стили
│   └── index.css
├── types/                # TypeScript интерфейсы
│   └── index.ts
├── App.tsx              # Главный компонент
└── main.tsx             # Точка входа
```

## 🌐 Маршруты

| URL | Страница |
|-----|---------|
| `/` | Главная |
| `/products` | Каталог товаров |
| `/product/:id` | Детали товара |
| `/cart` | Корзина покупок |
| `/checkout` | Оформление заказа |
| `/about` | О магазине |

## 🛠️ Доступные команды

```bash
npm run dev      # Разработка с HMR на http://localhost:5173
npm run build    # Production сборка в папку dist
npm run preview  # Просмотр production версии
npm run tsc      # Проверка типов TypeScript
```

## 💾 Хранилище данных

- **localStorage** - Автосохранение корзины в браузере
- **Mock API** - Товары хранятся как константы в компонентах
- Легко заменить на реальное API!

## 🎨 Технологии

- **React 18** - UI библиотека
- **React Router v6** - Динамическая навигация
- **Vite** - Молниеносный build tool
- **TypeScript** - Типизация кода
- **CSS3** - Адаптивный дизайн

## 🔒 Функциональность корзины

```typescript
// useCart() hook предоставляет:
- cartItems: CartItem[]        // Товары в корзине
- addToCart(item)              // Добавить товар
- removeFromCart(id)           // Удалить товар
- updateQuantity(id, qty)      // Изменить количество
- clearCart()                  // Очистить корзину
- getTotalPrice()              // Получить сумму
```

## 📦 Зависимости

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.0"
}
```

## 🔧 Конфигурация Vercel

Проект автоматически развертывается с помощью `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "outputDirectory": "dist"
}
```

## 🚀 Готово к production

✅ TypeScript компилируется без ошибок
✅ Production сборка оптимизирована (~267 KB)
✅ CSS минифицирован (~5.5 KB)
✅ Все маршруты работают на Vercel
✅ localStorage работает безопасно

## 💡 Примеры кода

### Добавить товар в корзину

```typescript
import { useCart } from './store/cartContext';

const { addToCart } = useCart();

addToCart({
  id: Date.now(),
  productId: 1,
  name: 'Футболка',
  price: 29.99,
  image: 'url...',
  quantity: 1,
  size: 'M',
  color: 'Черный'
});
```

### Использовать данные корзины

```typescript
const { cartItems, getTotalPrice } = useCart();

return (
  <div>
    <h2>Товаров: {cartItems.length}</h2>
    <p>Сумма: ${getTotalPrice().toFixed(2)}</p>
  </div>
);
```

## 🎯 Дальнейшее развитие

Просто добавьте:

```typescript
// 1. Real API
const products = await fetch('/api/products').then(r => r.json());

// 2. Payment gateway
import { loadStripe } from '@stripe/js';

// 3. User authentication
import { useAuth } from './hooks/useAuth';

// 4. Analytics
import { analytics } from './services/analytics';
```

## 📚 Документация

- **[QUICKSTART.md](QUICKSTART.md)** - Быстрый старт
- **[VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)** - Подробный гайд по развертыванию
- **[README_FASHIONHUB.md](README_FASHIONHUB.md)** - Детальная документация

## 📄 Лицензия

MIT License - используйте свободно!

## 👥 Контрибьютинг

Улучшения приветствуются! Создавайте PR с новыми фичами.

## 🎉 Успешного развертывания!

Этот проект полностью готов к развертыванию на Vercel. Следуйте инструкциям выше и запустите свой e-commerce магазин за 2 минуты!

---

**Создано с ❤️ на React + Vite**  
**Готово для Vercel ✨**
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
