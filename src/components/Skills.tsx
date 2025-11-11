export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="card">
      <h2>skills & expertise</h2>
      <p className="meta" style={{ marginBottom: '1.5rem' }}>
        a comprehensive overview of my technical skills and proficiency levels
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
      }}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 style={{ 
              color: 'var(--text)',
              marginBottom: '1rem',
            }}>
              {category.category}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem',
                  }}>
                    <span style={{ color: 'var(--text)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ '--pct': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
