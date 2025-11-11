export function About() {
  const features = [
    {
      icon: "💻",
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards.",
    },
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Crafting beautiful, user-friendly interfaces that provide exceptional user experiences.",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency to deliver lightning-fast experiences.",
    },
  ];

  const funFacts = [
    "🌙 i do my best coding late at night",
    "🎮 video games inspire my UI designs",
    "🍕 pizza is my debugging fuel",
    "🎵 can't code without good music",
    "📝 i keep way too many browser tabs open",
    "🌈 obsessed with color palettes and gradients",
  ];

  return (
    <>
      <section id="about" className="card">
        <h2>✨ about me</h2>
        
        <p>
          hey there! 👋 i'm a dedicated developer with a passion for creating exceptional digital 
          experiences. with expertise in modern web technologies and a keen eye for design, i transform 
          ideas into reality (and have fun doing it!).
        </p>
        <p>
          my approach combines technical excellence with creative problem-solving, ensuring that 
          every project i work on not only looks great but also performs flawlessly. i believe the 
          best websites are the ones that make people smile! 😊
        </p>
        <p>
          when i'm not coding, you'll find me exploring new technologies, contributing to open 
          source projects, sharing knowledge with the developer community, or just vibing with 
          some good music and coffee. ☕✨
        </p>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>🌟 what i do</h3>
        
        <div className="link-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: '1rem',
                background: '#fff',
                border: '1px solid var(--soft)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow)',
              }}
            >
              <div className="lg-emoji">{feature.icon}</div>
              <div className="lg-title" style={{ marginTop: '0.5rem' }}>
                {feature.title}
              </div>
              <div className="lg-sub" style={{ marginTop: '0.25rem' }}>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="card" style={{ background: 'linear-gradient(135deg, rgba(245, 202, 195, 0.2), rgba(216, 226, 220, 0.2))' }}>
        <h2>🎉 fun facts about me</h2>
        <p className="meta" style={{ marginBottom: '1rem' }}>
          because who doesn't love random trivia? here are some quirky things about me:
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '0.75rem',
        }}>
          {funFacts.map((fact, index) => (
            <div
              key={index}
              style={{
                padding: '0.75rem 1rem',
                background: '#fff',
                borderRadius: '12px',
                border: '2px solid var(--soft)',
                fontSize: '0.95rem',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--coral)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--soft)';
              }}
            >
              {fact}
            </div>
          ))}
        </div>
      </section>

      {/* My Tech Stack */}
      <section className="card">
        <h2>🛠️ my favorite tools</h2>
        <p className="meta" style={{ marginBottom: '1.5rem' }}>
          these are the awesome technologies i love working with:
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
        }}>
          {[
            { name: 'React', emoji: '⚛️', color: 'var(--sage)' },
            { name: 'TypeScript', emoji: '📘', color: 'var(--coral)' },
            { name: 'Node.js', emoji: '🟢', color: 'var(--sage)' },
            { name: 'Tailwind', emoji: '🎨', color: 'var(--coral)' },
            { name: 'Next.js', emoji: '▲', color: 'var(--sage)' },
            { name: 'Git', emoji: '🔀', color: 'var(--coral)' },
            { name: 'Figma', emoji: '🎯', color: 'var(--sage)' },
            { name: 'VS Code', emoji: '💙', color: 'var(--coral)' },
          ].map((tech, index) => (
            <div
              key={index}
              style={{
                padding: '0.75rem 1.25rem',
                background: '#fff',
                border: `2px solid ${tech.color}`,
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = tech.color;
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = 'inherit';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>{tech.emoji}</span>
              <span style={{ fontWeight: 600 }}>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="tip" style={{ marginTop: '2rem' }}>
          <strong>💡 always learning:</strong> the tech world moves fast, and i'm always exploring 
          new tools and frameworks to stay sharp and deliver the best solutions!
        </div>
      </section>
    </>
  );
}
