import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("thank you for your message! i'll get back to you soon 💌");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      label: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      link: "https://github.com",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: "https://linkedin.com",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      link: "https://twitter.com",
    },
  ];

  return (
    <>
      <section id="contact" className="card">
        <h2>get in touch</h2>
        <p className="meta" style={{ marginBottom: '1.5rem' }}>
          have a project in mind or just want to say hello? feel free to reach out!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              style={{
                padding: '1rem',
                background: '#fff',
                border: '1px solid var(--soft)',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {info.icon}
              </div>
              <div style={{ 
                fontSize: '0.85rem',
                color: 'var(--muted)',
                marginBottom: '0.25rem',
              }}>
                {info.label}
              </div>
              {info.link ? (
                <a
                  href={info.link}
                  className="highlight-link"
                  style={{ fontSize: '0.9rem' }}
                >
                  {info.value}
                </a>
              ) : (
                <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                  {info.value}
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ marginBottom: '1rem' }}>follow me</h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'var(--sage)',
                color: 'white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      <section className="form-card">
        <h2 className="form-title">send me a message</h2>
        <p className="form-subtitle">
          i'd love to hear from you! fill out the form below and i'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="guestbook-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="your message..."
            required
            rows={6}
          />

          <button type="submit" className="btn">
            send message
          </button>
        </form>
      </section>
    </>
  );
}
