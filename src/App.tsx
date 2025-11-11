import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { WelcomeBanner } from "./components/WelcomeBanner";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <h1>✨ your name ✨</h1>
      </header>

      <Navigation />

      <main id="main" className="container">
        <WelcomeBanner />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="site-footer">
        <p>made with 💖 and lots of ☕ • &copy; 2025</p>
      </footer>
    </>
  );
}