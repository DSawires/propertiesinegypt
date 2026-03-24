import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-container">
          <div className="logo">
             <span className="text-gold">Properties</span> In Egypt
          </div>
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#featured" className="nav-link">Featured</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </nav>
        </div>
      </header>
      
      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content animate-fade-in">
            <h1 className="hero-title">
              Discover Your Dream <br/>
              <span className="text-gold">Home in Egypt</span>
            </h1>
            <p className="hero-subtitle">
              Exclusive properties and premium investments tailored for you. 
              Whether it's a luxurious second home or a high-yield investment in the heart of Egypt.
            </p>
            <div className="hero-cta">
              <a href="#featured" className="btn-primary">View Properties</a>
              <a href="#contact" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>Contact an Advisor</a>
            </div>
          </div>
        </section>

        {/* WHY INVEST IN EGYPT SECTION */}
        <section id="why-invest" style={{ padding: 'var(--space-24) 0', backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Why Invest in Egyptian Real Estate?</h2>
              <p className="section-desc">A booming market offering unprecedented returns, luxury living, and strategic growth.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
              <article style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>High Return on Investment (ROI)</h3>
                <p style={{ color: 'var(--color-text-light)' }}>
                  Egypt’s real estate sector has historically proven to be one of the most resilient and profitable markets in the MENA region. With ongoing mega-projects like the New Administrative Capital and the continuous development of the North Coast, property values are experiencing rapid appreciation. Investors from the Gulf and Egyptian expatriates are seeing exceptional capital gains and strong rental yields, making it an ideal hedge against inflation.
                </p>
              </article>
              <article style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Strategic Mega-Developments</h3>
                <p style={{ color: 'var(--color-text-light)' }}>
                  The expansion of urban infrastructure is staggering. The government and top-tier private developers are collaborating to build smart cities, advanced road networks, and world-class amenities. From luxury waterfront properties on the Red Sea and North Coast to high-end residential compounds in New Cairo and Sheikh Zayed, the diversity of premium developments guarantees an option for every investment portfolio.
                </p>
              </article>
              <article style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Unmatched Lifestyle & Heritage</h3>
                <p style={{ color: 'var(--color-text-light)' }}>
                  Beyond financial returns, buying a second home in Egypt means investing in a lifestyle. Enjoy year-round sunshine, pristine beaches, and a rich cultural heritage that dates back millennia. For Gulf residents and expats, Egypt offers a familiar yet distinctly vibrant atmosphere, boasting world-class dining, elite international schools, and premium healthcare facilities seamlessly integrated into these new luxury communities.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FEATURED PROPERTIES SECTION */}
        <section id="featured" className="properties-section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Featured Properties</h2>
              <p className="section-desc">Handpicked premium real estate opportunities curated for international and local investors.</p>
            </div>
            
            <div className="properties-grid">
              {/* Property Card 1 */}
              <article className="property-card">
                <div className="property-image-wrapper">
                  <div className="property-placeholder"></div>
                  <div className="property-badge">New Launch</div>
                </div>
                <div className="property-info">
                  <h3 className="property-name">North Coast Luxury Villa</h3>
                  <p className="property-location">Sidi Abdel Rahman, North Coast</p>
                  <div className="property-meta">
                    <span>4 Beds</span>
                    <span>5 Baths</span>
                    <span>350 sqm</span>
                  </div>
                  <div className="property-footer">
                    <span className="property-price">From $450,000</span>
                    <button className="btn-outline">Details</button>
                  </div>
                </div>
              </article>

              {/* Property Card 2 */}
              <article className="property-card">
                <div className="property-image-wrapper">
                  <div className="property-placeholder"></div>
                  <div className="property-badge secondary">Ready to Move</div>
                </div>
                <div className="property-info">
                  <h3 className="property-name">New Cairo Penthouse</h3>
                  <p className="property-location">Golden Square, New Cairo</p>
                  <div className="property-meta">
                    <span>3 Beds</span>
                    <span>3 Baths</span>
                    <span>220 sqm</span>
                  </div>
                  <div className="property-footer">
                    <span className="property-price">From $320,000</span>
                    <button className="btn-outline">Details</button>
                  </div>
                </div>
              </article>
              
              {/* Property Card 3 */}
              <article className="property-card">
                <div className="property-image-wrapper">
                  <div className="property-placeholder"></div>
                </div>
                <div className="property-info">
                  <h3 className="property-name">Red Sea Seafront Chalet</h3>
                  <p className="property-location">El Gouna, Red Sea</p>
                  <div className="property-meta">
                    <span>2 Beds</span>
                    <span>2 Baths</span>
                    <span>140 sqm</span>
                  </div>
                  <div className="property-footer">
                    <span className="property-price">From $280,000</span>
                    <button className="btn-outline">Details</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT US / EXPERTISE SECTION */}
        <section id="about" style={{ padding: 'var(--space-24) 0', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-accent)' }}>
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="section-title">Your Trusted Real Estate Partners</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>
                Navigating the international real estate market requires local expertise, transparency, and a dedicated team. At <strong className="text-gold">Properties in Egypt</strong>, we specialize in curating exclusive property portfolios for Egyptians living abroad and Gulf-based investors.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: 'var(--space-6)' }}>
                Our proprietary partnerships with Egypt's top-tier developers—such as Emaar Misr, SODIC, Palm Hills, and Talaat Moustafa Group—ensure our clients receive priority access to off-market launches and premium units before they reach the general public. We handle everything end-to-end: from initial virtual property tours and rigorous legal due diligence to securing the best payment plans and finalizing the contracts.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
                Whether you are seeking a luxurious summer retreat on the Mediterranean coast, a high-yield commercial asset in the New Capital, or a legacy residential home in New Cairo, our advisory team is committed to securing your financial future and lifestyle dreams.
              </p>
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE SECTION */}
        <section id="contact" className="contact-section">
          <div className="container contact-container">
            <div className="contact-info">
              <h2>Find Your Perfect Investment</h2>
              <p>Leave your details and our expert property advisors will contact you shortly with personalized recommendations.</p>
              <ul className="contact-features">
                <li>✓ Exclusive Off-Market Properties</li>
                <li>✓ Tailored Investment Plans</li>
                <li>✓ VIP Tours & Consultation</li>
              </ul>
            </div>
            <div className="contact-form-wrapper">
              <form className="lead-form" action="https://formspree.io/f/mgonggge" method="POST">
                <h3>Request a Consultation</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+971 50 123 4567" required />
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Primary Interest</label>
                  <select id="interest" name="interest" required>
                    <option value="">Select an option...</option>
                    <option value="investment">Investment Property</option>
                    <option value="second_home">Second Home / Vacation</option>
                    <option value="relocation">Relocation to Egypt</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary btn-block">Get Expert Advice</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo" style={{ color: 'white' }}>
              <span className="text-gold">Properties</span> In Egypt
            </div>
            <p>Your trusted partner for premium real estate investments in Egypt.</p>
          </div>
          <div className="footer-links">
            <p>&copy; {new Date().getFullYear()} Properties In Egypt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
