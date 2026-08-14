import React from "react";

const navItems = ["Home", "About", "Segments", "Products", "Careers", "Contact"];

const segments = [
  {
    number: "01",
    title: "Residential & Commercial",
    text: "Smart charging infrastructure designed for homes, offices, apartments, hotels and commercial spaces."
  },
  {
    number: "02",
    title: "EV Fleet Operators",
    text: "Reliable charging solutions that help fleets keep vehicles moving with less downtime."
  },
  {
    number: "03",
    title: "EV Dealers & Service Providers",
    text: "Deploy dependable charging solutions as part of the EV ownership and service experience."
  },
  {
    number: "04",
    title: "Charging Operators",
    text: "Build and operate connected charging stations with hardware, software and network capabilities."
  }
];

const products = [
  {
    category: "AC CHARGERS",
    name: "Bijlify UNIV",
    power: "3.3kW – 22kW",
    text: "Smart AC charging for everyday EV charging requirements.",
    image: "/assets/bijlify-univ-iii-9-9kw-ev-ac-smart-charger (1).png"
  },
  {
    category: "AC TYPE II",
    name: "Bijlify PRO",
    power: "7.4kW – 11kW",
    text: "Compact Type II charging solutions for residential and commercial use.",
    image: "/assets/bijlify-pro-1 (1).png"
  },
  {
    category: "DC FAST CHARGERS",
    name: "Bijlify XTREME",
    power: "30kW – 120kW",
    text: "High-performance DC fast charging for public and commercial infrastructure.",
    image: "/assets/bijlify-charger.png"
  }
];

function BijlifyMark() {
  return (
    <svg className="bijlify-mark" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M7 10h18c5.5 0 10 4.5 10 10s-4.5 10-10 10H7" />
      <path d="M7 17h12" />
      <path d="M7 24h8" />
      <path d="M7 31h12" />
      <path d="M25 10c3.3 0 6 2.7 6 6s-2.7 6-6 6H18" />
    </svg>
  );
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Bijlify home">
        <BijlifyMark />
        <span className="brand-name">Bijlify</span>
        <sup>™</sup>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={item === "Home" ? "active" : ""}
          >
            {item}
          </a>
        ))}
      </nav>

      <a className="nav-app-button" href="#app">
        Get the App
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="eyebrow">KICKSTART YOUR BUSINESS</div>

        <h1>
          Get Everything You
          <br />
          Need to Get Started
          <br />
          With Your EV Charging
          <br />
          Business
        </h1>

        <p className="hero-description">
          Bijlify app for discovery and seamless EV charging. Get our app and
          kickstart your business with Bijlify. Get it on Play Store or App Store.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#app">
            Get the App <Arrow />
          </a>
          <a className="secondary-button" href="#contact">
            Talk to our experts
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-accent visual-accent-left" />
        <div className="visual-accent visual-accent-right" />
        <img
          className="phone-image"
          src="/assets/bijlify-mobile.png"
          alt="Bijlify mobile app"
        />
        <img
          className="charger-image"
          src="/assets/bijlify-charger.png"
          alt="Bijlify EV charger"
        />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="intro section">

      <div className="intro-grid">
        <h2>
          Building the infrastructure
          <br />
          for a more electric India.
        </h2>

        <div>
          <p className="large-copy">
            Bijlify brings together smart EV charging hardware, charging
            management software and a consumer app to make electric mobility
            easier to deploy, manage and use.
          </p>
          <p className="body-copy">
            From AC chargers to DC fast chargers, our solutions are designed
            for residential, commercial and public charging environments.
            Hardware, software and service work together as one connected
            charging ecosystem.
          </p>
          <a className="text-link" href="#products">
            Explore our solutions <Arrow />
          </a>
        </div>
      </div>

      <div className="stat-row">
        <div className="stat">
          <strong>3.3–120</strong>
          <span>kW charging range</span>
        </div>
        <div className="stat">
          <strong>AC + DC</strong>
          <span>smart charging portfolio</span>
        </div>
        <div className="stat">
          <strong>360°</strong>
          <span>charging ecosystem</span>
        </div>
        <div className="stat">
          <strong>Pan India</strong>
          <span>service & deployment</span>
        </div>
      </div>
    </section>
  );
}

function Segments() {
  return (
    <section id="segments" className="segments section dark-section">
      <div className="section-topline">
        <span>CHARGING FOR EVERY TOUCHPOINT</span>
      </div>

      <div className="section-heading-row">
        <h2>One ecosystem.<br />Every charging need.</h2>
        <p>
          Whether you're charging at home, managing a fleet or operating a
          public network, Bijlify gives you the infrastructure to build the
          experience around your users.
        </p>
      </div>

      <div className="segment-grid">
        {segments.map((segment) => (
          <article className="segment-card" key={segment.number}>
            <span className="card-number">{segment.number}</span>
            <div className="card-icon">↗</div>
            <h3>{segment.title}</h3>
            <p>{segment.text}</p>
            <a href="#contact">Know more <Arrow /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="products section">
      <div className="section-topline light">
        <span>HARDWARE + SOFTWARE</span>
      </div>

      <div className="products-heading">
        <div>
          <div className="eyebrow dark">OUR CHARGING PORTFOLIO</div>
          <h2>Smart chargers.<br />Built to scale.</h2>
        </div>
        <p>
          A complete range of AC and DC charging solutions engineered for
          residential, commercial, fleet and public applications.
        </p>
      </div>

<div className="product-grid">
  {products.map((product) => (
    <article className="product-card" key={product.name}>

      <div className="product-image-wrap">

        <img
          src={product.image}
          alt={`${product.name} charger`}
        />

        <span className="product-power">
          {product.power}
        </span>

      </div>

      <div className="product-info">
        <span>{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.text}</p>

        <a href="#contact">
          View products <Arrow />
        </a>
      </div>

    </article>
  ))}
</div>
    </section>
  );
}

function Software() {
  return (
    <section id="app" className="software section">
      <div className="software-copy">
        <div className="eyebrow dark">THE BIJLIFY PLATFORM</div>
        <h2>Hardware that charges.<br />Software that connects.</h2>
        <p>
          Discover stations, start charging and manage your EV experience
          through the Bijlify consumer app. For operators, connected charging
          software brings visibility, control and network management together.
        </p>

        <div className="software-features">
          <div>
            <strong>01</strong>
            <span>Find charging stations</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Start & manage charging</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Connected charging management</span>
          </div>
        </div>

        <a className="primary-button blue-button" href="#contact">
          Explore the app <Arrow />
        </a>
      </div>

      <div className="software-visual">
        <div className="software-orbit orbit-one" />
        <div className="software-orbit orbit-two" />
        <img
          src="/assets/bijlify-mobile.png"
          alt="Bijlify app screens"
        />
        <div className="software-badge">
          <span>BIJLIFY</span>
          <strong>CONNECTED<br />MOBILITY</strong>
        </div>
      </div>
    </section>
  );
}

function StarterPack() {
  return (
    <section className="starter section">
      <div className="starter-image">
        <img src="/assets/bijlify-charger.png" alt="Bijlify charger" />
      </div>

      <div className="starter-copy">
        <div className="eyebrow">BUILT FOR BUSINESS</div>
        <h2>Start your charging<br />business with Bijlify.</h2>
        <p>
          From charger selection and installation to software and operations,
          build your EV charging business with an integrated solution.
        </p>

        <div className="starter-points">
          <span>Hardware</span>
          <span>Software</span>
          <span>Installation</span>
          <span>Support</span>
        </div>

        <a className="secondary-button light-button" href="#contact">
          Talk to our experts <Arrow />
        </a>
      </div>
    </section>
  );
}

function WhyBijlify() {
  return (
    <section className="why section">
      <div className="section-topline light">
        <span>ENGINEERED FOR THE REAL WORLD</span>
      </div>

      <div className="why-heading">
        <h2>Everything you need<br />to keep charging moving.</h2>
      </div>

      <div className="why-grid">
        <article>
          <span>01</span>
          <h3>Reliable hardware</h3>
          <p>Robust AC and DC chargers designed for dependable everyday operation.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Smart connectivity</h3>
          <p>Connected charging with remote monitoring, communication and management capabilities.</p>
        </article>
        <article>
          <span>03</span>
          <h3>End-to-end support</h3>
          <p>From planning and installation to operations and service, keep your network moving.</p>
        </article>
        <article>
          <span>04</span>
          <h3>One ecosystem</h3>
          <p>Hardware, software and consumer experience designed to work together.</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-copy">
        <div className="eyebrow dark">LET'S TALK</div>
        <h2>Ready to<br />Bijlify India?</h2>
        <p>
          Tell us what you're building and our EV charging experts will help
          you find the right solution.
        </p>
      </div>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Work email
          <input type="email" placeholder="you@company.com" />
        </label>

        <label>
          Phone
          <input type="tel" placeholder="+91" />
        </label>

        <label>
          Tell us about your requirement
          <textarea rows="4" placeholder="I'm looking for..."></textarea>
        </label>

        <button className="primary-button submit-button" type="submit">
          Send enquiry <Arrow />
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a className="brand footer-logo" href="#home">
          <BijlifyMark />
          <span className="brand-name">Bijlify</span>
          <sup>™</sup>
        </a>
        <p>Let's Bijlify India.</p>
      </div>

      <div className="footer-links">
        <div>
          <span>EXPLORE</span>
          <a href="#about">About</a>
          <a href="#segments">Segments</a>
          <a href="#products">Products</a>
        </div>
        <div>
          <span>CONNECT</span>
          <a href="#app">Get the App</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Careers</a>
        </div>
        <div>
          <span>FOLLOW</span>
          <a href="#contact">LinkedIn</a>
          <a href="#contact">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Bijlify. All rights reserved.</span>
        <span>EV CHARGING • HARDWARE • SOFTWARE</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Intro />
      <Segments />
      <Products />
      <Software />
      <StarterPack />
      <WhyBijlify />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
