import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">Nemo</div>
        <div className="links">
          <a href="#features">Фишки</a>
          <a href="#about">О нас</a>
          <a className="cta" href="#">Запуск</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Красивый сайт на React</h1>
          <p className="lead">Шаблон с плавным градиентом, адаптивной вёрсткой и CTA.</p>
          <div className="actions">
            <a className="btn primary" href="#features">Узнать больше</a>
            <a className="btn ghost" href="#about">Связаться</a>
          </div>
        </div>
        <div className="mockup">🌊</div>
      </div>
    </header>
  );
}

function Features() {
  const items = [
    { title: "Быстро", text: "Vite + React для молниеносной разработки." },
    { title: "Адаптивно", text: "Красиво смотрится на любом экране." },
    { title: "Просто", text: "Чистая структура и понятный код." }
  ];
  return (
    <section id="features" className="features container">
      {items.map((it) => (
        <div key={it.title} className="card">
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">© {new Date().getFullYear()} Nemo — Все права защищены</div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
