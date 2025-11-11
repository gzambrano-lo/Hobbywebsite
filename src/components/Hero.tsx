import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <>
      <section id="hero" className="home-intro card">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1617975178139-4b9f9260a5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW4lMjBjb2xvcmZ1bCUyMGRlc2t8ZW58MXx8fHwxNzYxNTQ0MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Profile picture"
          className="profile-pic"
        />
        <div className="intro-text">
          <div className="name-wrapper">
            <h2 className="hero-name">
              hi, i'm <span className="name-gradient">your name</span>!{' '}
              <span className="wave-emoji">👋</span>
            </h2>
            <svg className="name-underline" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 7 Q 75 3, 150 7 T 295 7"
                stroke="var(--coral)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="tagline">✨ developer • designer • creator ✨</p>
          <p className="tagline">🌱 building beautiful things on the web</p>
          <p style={{ marginTop: '1rem' }}>
            welcome to my cozy corner of the internet! grab a virtual cup of coffee ☕ 
            and explore my projects, thoughts, and creative adventures. this is where 
            the magic happens! 🎨💻
          </p>
        </div>
      </section>

      {/* Fun "Currently" Section */}
      <section className="card" style={{ background: 'linear-gradient(135deg, rgba(245, 202, 195, 0.3), rgba(216, 226, 220, 0.3))' }}>
        <h2>✨ currently</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}>
          <div style={{
            padding: '1rem',
            background: '#fff',
            borderRadius: '12px',
            border: '2px solid var(--pink)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎵</div>
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>listening to</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>lo-fi beats to code to</p>
          </div>
          <div style={{
            padding: '1rem',
            background: '#fff',
            borderRadius: '12px',
            border: '2px solid var(--soft)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>reading</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>The Pragmatic Programmer</p>
          </div>
          <div style={{
            padding: '1rem',
            background: '#fff',
            borderRadius: '12px',
            border: '2px solid var(--pink)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>working on</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>cool new web projects!</p>
          </div>
          <div style={{
            padding: '1rem',
            background: '#fff',
            borderRadius: '12px',
            border: '2px solid var(--soft)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌱</div>
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.5rem' }}>learning</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>advanced React patterns</p>
          </div>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="card">
        <h2>🎮 fun stats</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
          textAlign: 'center',
        }}>
          <div style={{
            padding: '1.5rem 1rem',
            background: 'var(--soft)',
            borderRadius: '16px',
            border: '3px solid var(--sage)',
          }}>
            <div style={{ fontSize: '2rem', color: 'var(--sage)' }}>50+</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              projects completed
            </div>
          </div>
          <div style={{
            padding: '1.5rem 1rem',
            background: 'var(--pink)',
            borderRadius: '16px',
            border: '3px solid var(--coral)',
          }}>
            <div style={{ fontSize: '2rem', color: 'var(--coral)' }}>∞</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              cups of coffee
            </div>
          </div>
          <div style={{
            padding: '1.5rem 1rem',
            background: 'var(--soft)',
            borderRadius: '16px',
            border: '3px solid var(--sage)',
          }}>
            <div style={{ fontSize: '2rem', color: 'var(--sage)' }}>24/7</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              learning mode
            </div>
          </div>
          <div style={{
            padding: '1.5rem 1rem',
            background: 'var(--pink)',
            borderRadius: '16px',
            border: '3px solid var(--coral)',
          }}>
            <div style={{ fontSize: '2rem', color: 'var(--coral)' }}>100%</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              passion driven
            </div>
          </div>
        </div>
      </section>

      {/* What is this site */}
      <section className="card">
        <h2>💭 what is this website?</h2>
        <p>
          this is my little space on the internet, part of the <strong className="highlight-link">indie web</strong>! 
          🌐 the indie web is about creating personal websites instead of relying only on big social media 
          platforms. think of it like an online scrapbook meets digital garden! 🌸
        </p>
        <p>
          here you'll find a mix of personal projects, things i enjoy, and random bits of my life. 
          it's constantly evolving as i learn and create new things. feel free to explore and maybe 
          even get inspired to create your own little corner of the web! ✨
        </p>
        
        <div className="tip" style={{ marginTop: '1.5rem' }}>
          <strong>💡 tip:</strong> bookmark this page and come back often - i'm always adding new stuff!
        </div>
      </section>

      {/* Quick Links */}
      <section className="card" style={{ background: 'linear-gradient(135deg, rgba(216, 226, 220, 0.3), rgba(245, 202, 195, 0.3))' }}>
        <h2>🚀 quick links</h2>
        <p className="meta" style={{ marginBottom: '1rem' }}>
          jump to the good stuff! here's what you can explore on this site:
        </p>
        
        <ul className="fancy-list" style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a 
              href="#about" 
              className="highlight-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              learn more about me
            </a> - my story, what i do, and what makes me tick
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a 
              href="#projects" 
              className="highlight-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              check out my projects
            </a> - cool things i've built and i'm proud of
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a 
              href="#skills" 
              className="highlight-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              see my skills
            </a> - what i'm good at and what i'm learning
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a 
              href="#contact" 
              className="highlight-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              get in touch
            </a> - let's connect and create something together!
          </li>
        </ul>

        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: '#fff',
          borderRadius: '12px',
          border: '2px dashed var(--sage)',
          textAlign: 'center',
        }}>
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--coral)' }}>✨ pro tip:</strong> use the navigation above 
            to jump around, or just scroll down and enjoy the journey! 🎨
          </p>
        </div>
      </section>
    </>
  );
}
