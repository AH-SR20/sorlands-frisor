import { useState } from 'react'
import './App.css'

import heroImg from './assets/hero.jpg'
import herreklippImg from './assets/herreklipp.jpg'
import dameklippImg from './assets/dameklipp.jpg'
import barneklippImg from './assets/barneklipp.jpg'
import skjeggBartImg from './assets/skjegg-bart.jpg'
import dropInBackground from "./assets/drop-in-background.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#hjem" onClick={closeMenu}>
          <span>SØRLAND'S</span>
          <small>FRISØR</small>
        </a>

        <button
          className="menu-button"
          aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className="desktop-nav" aria-label="Hovedmeny">
  
          
          <a href="#behandlinger">Priser</a>
          <a href="#om-oss">Om oss</a>
          <a href="#finne-oss">Finne oss</a>
          <a href="#finne-oss">Kontakt</a>
        </nav>
      </header>

     
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobilmeny">
          <a href="#behandlinger" onClick={closeMenu}>Priser</a>
          <a href="#om-oss" onClick={closeMenu}>Om oss</a>
          <a href="#finne-oss" onClick={closeMenu}>Finne oss</a>
          <a href="#finne-oss" onClick={closeMenu}>Kontakt</a>
        </nav>
      )}


      <main>
        <section id="hjem" className="hero hero-split">
  <div className="hero-image hero-logo-panel">
    <img src={heroImg} alt="Sørland's Frisør – logo" />
  </div>

  <div className="hero-content hero-text-panel">
    <p className="eyebrow">VELKOMMEN TIL</p>

    <h1>
      SØRLAND'S
      <br />
      FRISØR
    </h1>

    <p className="hero-text">
      Mer enn en klipp – en bedre versjon av deg.
    </p>

    <a className="hero-button" href="#drop-in">
    velkommen innom →
    </a>
  </div>
</section>

        <section id="behandlinger" className="services">
          <div className="services-header">
            <p className="section-eyebrow">VÅRE TJENESTER</p>
            <h2>Populære behandlinger</h2>
            <p className="section-description">
              Vi tilbyr profesjonelle behandlinger for hele familien.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src={herreklippImg} alt="Herreklipp" />
              </div>
              <span className="service-number">01</span>
              <h3>Herreklipp</h3>
              <p>Profesjonell klipp tilpasset din stil.</p>
              <span className="service-price">299 kr</span>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={dameklippImg} alt="Dameklipp" />
              </div>
              <span className="service-number">02</span>
              <h3>Dameklipp</h3>
              <p>Klipp og styling tilpasset ditt hår.</p>
              <span className="service-price">599 kr</span>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={barneklippImg} alt="Barneklipp" />
              </div>
              <span className="service-number">03</span>
              <h3>Barneklipp</h3>
              <p>En hyggelig og trygg klipp for barn.</p>
              <span className="service-price">249 kr</span>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={skjeggBartImg} alt="Skjegg og bart" />
              </div>
              <span className="service-number">04</span>
              <h3>Skjegg og bart</h3>
              <p>Forming og trimming av skjegg og bart.</p>
              <span className="service-price">199 kr</span>
            </div>
          </div>
        </section>

        <section id="om-oss" className="about">
          <div className="about-content">
            <p className="section-eyebrow">OM OSS</p>

            <h2>
              Stil, kvalitet
              <br />
              og personlig service.
            </h2>

            <p className="about-text">
              Sørland's Frisør er en moderne frisørsalong på Odden senter
              i Grimstad. Hos oss får du profesjonell hårpleie, gode
              produkter og en hyggelig atmosfære.
            </p>

            <p className="about-text">
              Vi legger vekt på at hver kunde skal føle seg velkommen
              og få en behandling som passer deres stil og ønsker.
            </p>

            <a className="about-button" href="#finne-oss">
  Finn oss →
</a>
          </div>

          <div className="about-decoration">
            <div className="about-circle">
              <span>SØRLAND'S</span>
              <small>FRISØR</small>
            </div>
          </div>
        </section>

        <section id="drop-in" className="drop-in">
          <div className="drop-in-content">
            <p className="section-eyebrow">INGEN TIME NØDVENDIG</p>
            <h2>Drop-in – velkommen innom!</h2>

            <p>
              Du trenger ikke å bestille time på forhånd. Kom innom
              Sørland's Frisør på Odden senter i Grimstad, så hjelper
              vi deg så snart vi har anledning.
            </p>

          
          </div>

      
        </section>

        

<section id="finne-oss" className="contact">
  <div className="contact-container">

    {/* VENSTRE: ÅPNINGSTIDER */}
    <div className="opening-hours">
      <p className="section-eyebrow">NÅR VI ER ÅPNE</p>
      <h2>Åpningstider</h2>

      <div className="hours-list">
        <div className="hours-row"><span>Mandag</span><span>09:00 – 20:00</span></div>
        <div className="hours-row"><span>Tirsdag</span><span>09:00 – 20:00</span></div>
        <div className="hours-row"><span>Onsdag</span><span>09:00 – 20:00</span></div>
        <div className="hours-row"><span>Torsdag</span><span>09:00 – 20:00</span></div>
        <div className="hours-row"><span>Fredag</span><span>09:00 – 20:00</span></div>
        <div className="hours-row"><span>Lørdag</span><span>10:00 – 18:00</span></div>
        <div className="hours-row closed"><span>Søndag</span><span>Stengt</span></div>
      </div>
    </div>

    {/* MIDTEN: FINNE OSS */}
    <div className="contact-info">
      <p className="section-eyebrow">BESØK OSS</p>
      <h2>Finne oss</h2>

      <p className="contact-intro">
        Vi holder til på Odden senter i Grimstad.
        Kom innom oss for en hyggelig behandling.
      </p>

      <div className="address">
        <strong>Sørland's Frisør</strong>
        <p>
          Odden senter<br />
          Odden 1<br />
          4876 Grimstad
        </p>
      </div>

      <a
        className="map-link"
        href="https://www.google.com/maps/search/?api=1&query=Odden%201%2C%204876%20Grimstad"
        target="_blank"
        rel="noopener noreferrer"
      >
        Se på kart →
      </a>
    </div>

    {/* HØYRE: KONTAKT OSS */}
    <div className="contact-social">
      <p className="section-eyebrow">TA KONTAKT</p>
      <h2>Kontakt oss</h2>

      <p className="contact-intro">
        Har du spørsmål? Ta gjerne kontakt med oss,
        eller følg oss på sosiale medier.
      </p>

      <div className="contact-details">
        <a href="tel:+4740078277" className="contact-item">
          <span className="contact-label">Telefon</span>
          <span>+47 400 78 277</span>
        </a>

        <a
          href="mailto:soledairsalon738@gmail.com"
          className="contact-item"
        >
          <span className="contact-label">E-post</span>
          <span>soledairsalon738@gmail.com</span>
        </a>
      </div>

      <h3>Følg oss</h3>

     
<div className="social-links">
  <a
    href="https://instagram.com/_sorlandssalong?dlrf=MXdmM3dodG4za2ppeg%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="social-link"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
    <span>Instagram</span>
  </a>

  <a
    href="https://www.tiktok.com/@_sorlandssalong"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="social-link"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3v11.2a4.2 4.2 0 1 1-3.5-4.1" />
      <path d="M14 3c.5 3 2.3 4.8 5 5" />
    </svg>
    <span>TikTok</span>
  </a>

  <a
    href="https://www.facebook.com/share/1DHRp31iUB/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="social-link"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17.2 1.3 16.2 1.2 15 1.2c-3.5 0-5.5 2.1-5.5 5.8V9H6v4h3.5v8z" />
    </svg>
    <span>Facebook</span>
  </a>
</div>

    </div>

  </div>
</section>


      </main>

      <footer>
        <a className="logo" href="#hjem">
          <span>SØRLAND'S</span>
          <small>FRISØR</small>
        </a>

        <p>© 2026 Sørland's Frisør. Alle rettigheter reservert.</p>
      </footer>
    </>
  )
}

export default App