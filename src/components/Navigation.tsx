export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "home", id: "hero" },
    { name: "about", id: "about" },
    { name: "projects", id: "projects" },
    { name: "skills", id: "skills" },
    { name: "contact", id: "contact" },
  ];

  return (
    <nav id="nav_menu" aria-label="Main">
      <ul>
        {navLinks.map((link, index) => (
          <li key={link.id} className={index === 0 ? "current" : ""}>
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
