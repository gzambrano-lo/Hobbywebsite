import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYxNDM0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxNTMwMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Firebase"],
      link: "#",
    },
    {
      title: "Design Portfolio",
      description: "A stunning portfolio website for a creative agency, featuring smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjE0NDkzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Motion", "CSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="card">
      <h2>featured projects</h2>
      <p className="meta" style={{ marginBottom: '1.5rem' }}>
        here are some of my recent projects that showcase my skills and experience
      </p>

      <div className="link-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            onClick={(e) => e.preventDefault()}
          >
            <div style={{ 
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              borderRadius: '8px',
              marginBottom: '0.5rem',
            }}>
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="lg-title">{project.title}</div>
            <div className="lg-sub">{project.description}</div>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              marginTop: '0.75rem',
            }}>
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  style={{
                    padding: '0.25rem 0.5rem',
                    background: 'var(--soft)',
                    color: 'var(--text)',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
