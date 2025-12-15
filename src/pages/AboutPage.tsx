export const AboutPage = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>О FashionHub</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Наша история</h2>
            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
              FashionHub был основан в 2020 году с целью предоставить качественную модную одежду
              по доступным ценам. Мы верим, что каждый человек заслуживает красивую и удобную одежду.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
              Наш магазин представляет собой уникальное сочетание современного дизайна и классического стиля.
              Мы тщательно отбираем каждый товар в нашем каталоге, чтобы гарантировать качество.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8' }}>
              Сегодня FashionHub обслуживает тысячи довольных клиентов по всему миру, предлагая
              быструю доставку и отличный сервис.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1485579149c0-123123123123?w=500"
              alt="About us"
              style={{
                width: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
                height: '300px',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500';
              }}
            />
          </div>
        </div>

        <section style={{ background: '#f5f5f5', padding: '3rem', borderRadius: '8px', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Почему выбирают нас</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
              <h3>Быстрая доставка</h3>
              <p style={{ color: '#666' }}>Доставляем в течение 3-5 рабочих дней по всей стране</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3>Качество гарантировано</h3>
              <p style={{ color: '#666' }}>Только оригинальные товары от проверенных производителей</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3>Лучшие цены</h3>
              <p style={{ color: '#666' }}>Регулярные скидки и акции для постоянных клиентов</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎧</div>
              <h3>Поддержка 24/7</h3>
              <p style={{ color: '#666' }}>Наша команда всегда готова помочь вам</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3>Безопасность</h3>
              <p style={{ color: '#666' }}>Все платежи защищены современным шифрованием</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>↩️</div>
              <h3>Простой возврат</h3>
              <p style={{ color: '#666' }}>Возвраты и обмены в течение 30 дней</p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Контакты</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            <div>
              <h3 style={{ marginBottom: '1rem' }}>📍 Адрес</h3>
              <p style={{ color: '#666' }}>г. Москва, ул. Мода, 1</p>
              <p style={{ color: '#666' }}>Офис 101</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>📞 Телефон</h3>
              <p style={{ color: '#666' }}>+7 (999) 123-45-67</p>
              <p style={{ color: '#666' }}>Пн-Пт: 09:00 - 18:00</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>📧 Email</h3>
              <p style={{ color: '#666' }}>info@fashionhub.com</p>
              <p style={{ color: '#666' }}>support@fashionhub.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
