import { useState } from "react";
import { X, Sparkles } from "lucide-react";

export function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--coral), var(--pink))',
      padding: '1rem',
      borderRadius: 'var(--radius)',
      marginBottom: '1rem',
      position: 'relative',
      border: '3px solid #fff',
      boxShadow: '0 4px 15px rgba(242, 132, 130, 0.3)',
    }}>
      <button
        onClick={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          background: 'rgba(255, 255, 255, 0.3)',
          border: 'none',
          borderRadius: '50%',
          width: '2rem',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
        }}
        aria-label="Close banner"
      >
        <X size={16} />
      </button>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        color: '#fff',
        paddingRight: '2rem',
      }}>
        <Sparkles size={32} style={{
          animation: 'wiggle 2s ease-in-out infinite',
        }} />
        <div>
          <div style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>
            <strong>✨ welcome to my personal site! ✨</strong>
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.95 }}>
            this is a work-in-progress digital garden where i share my projects, 
            thoughts, and creative experiments. feel free to explore! 🌱
          </div>
        </div>
      </div>
    </div>
  );
}
