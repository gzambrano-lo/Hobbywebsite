export function ProjectSenpaiNav() {
  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'about', href: '#about' },
    { label: 'media log', href: '#media-log' },
    { label: 'blog', href: '#blog' },
    { label: 'links', href: '#links' },
    { label: 'guestbook', href: '#guestbook' },
    { label: 'garden log', href: '#garden-log' },
    { label: 'music', href: '#music' },
    { label: 'learn to code', href: '#learn-to-code' },
    { label: 'gallery', href: '#gallery' },
    { label: 'bleach shrine', href: '#bleach-shrine' },
    { label: 'project senpai', href: '#project-senpai', active: true },
  ];

  return (
    <nav id="nav_menu" className="project-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.label} className={item.active ? 'current' : ''}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
