import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const TG_URL = "https://kieerj.lol/3a2zvig2j3nn";

/* ── Хук: плавное появление ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed');
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Живые часы ── */
function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');
  const ss = String(time.getSeconds()).padStart(2, '0');

  return (
    <span className="live-clock">
      {hh}:{mm}:{ss}
    </span>
  );
}

function App() {
  const heroRef = useReveal();
  const featuresRef = useReveal();
  const footerRef = useReveal();

  return (
    <div className="page">
      <div className="bg-glow" />
      <div className="bg-nebula" />
      <div className="bg-vignette" />
      <div className="bg-scanline" />

      <div className="container">
        <header className="header">
          <div className="header-left">
            <div className="logo-box">
              <span className="logo-letter">C</span>
            </div>

            <div className="header-text">
              <div className="header-title">CASHERS</div>
              <div className="header-sub">
                Обмен криптовалют
              </div>
            </div>
          </div>

          <div className="header-badge">
            <ShieldIcon className="icon-teal" />
            <div className="badge-text-red">
              ВАЖНО! ПЕРЕВОД СТРОГО<br />
              ПРИ ВСТРЕЧЕ В ОТДЕЛЕНИИ
            </div>
          </div>
        </header>

        <section className="hero reveal" ref={heroRef}>
          <h1 className="hero-title">
            Обмен криптовалют
          </h1>

          <h2 className="hero-subtitle">
            по лучшему курсу
          </h2>

          <div className="hero-coins">
            USDT <span className="dot">•</span>
            BTC <span className="dot">•</span>
            ETH
          </div>

          <div className="hero-image">
            <img
              src="/ChatGPT Image 11 июн. 2026 г., 11_12_19.png"
              alt="Coins"
              className="shark-img"
              draggable={false}
            />
          </div>

          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button pulse"
          >
            <TelegramIcon className="icon-teal-lg" />
            <span>Получить курс в Telegram</span>
          </a>

          <div className="hero-tags">
            Быстро <span className="dot">•</span>
            Безопасно <span className="dot">•</span>
            Без комиссий
          </div>
        </section>

        <section className="features reveal" ref={featuresRef}>
          <div className="feature">
            <BoltIcon className="icon-feature" />
            <div className="feature-title">Быстро</div>
            <div className="feature-desc">
              Обмен за 10 минут
            </div>
          </div>

          <div className="feature">
            <ShieldCheckIcon className="icon-feature" />
            <div className="feature-title">
              Безопасно
            </div>
            <div className="feature-desc">
              Только личная встреча
            </div>
          </div>

          <div className="feature">
            <PercentIcon className="icon-feature" />
            <div className="feature-title">
              Выгодно
            </div>
            <div className="feature-desc">
              Лучшие курсы в городе
            </div>
          </div>
        </section>

        <footer className="footer reveal" ref={footerRef}>
          <div className="footer-divider" />

          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-col-title">
                <ClockIcon className="footer-mini-icon" />
                Режим работы
              </div>
              <div className="footer-hours">
                Ежедневно
                <span className="teal"> 24 </span>/
                <span className="teal"> 7</span>
              </div>
              <div className="footer-live">
                <span className="live-dot" />
                <span>На связи сейчас · <LiveClock /></span>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">
                <ShieldMiniIcon className="footer-mini-icon" />
                Безопасность
              </div>
              <div className="footer-security-text">
                Переводы только<br />
                при личной встрече
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">
                <TelegramIcon className="footer-mini-icon" />
                Связь
              </div>
              <a
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-tg"
              >
                Telegram
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © 2024 CASHERS. Все права защищены.
            </div>
            <div className="footer-disclaimer">
              Информация на сайте не является публичной офертой. Курс уточняйте у менеджера.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function PercentIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function ShieldMiniIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 3.5L2.5 11l5.5 2 2 6 3-3.5 5 4 3.5-16zM10 14l8-7-10 6.5z" />
    </svg>
  );
}

export default App;