export function ProjectSenpai() {
  return (
    <div className="project-page">
      {/* Improved Header */}
      <header className="project-header">
        <h1 className="project-title">
          <span className="project-emoji">🎬</span>
          project senpai
        </h1>
        <p className="project-subtitle">your personal anime watchlist & tracker</p>
      </header>

      {/* Main Content Grid */}
      <div className="project-content-grid">
        {/* Video Player Section */}
        <div className="video-section">
          <div className="video-card">
            <div className="video-header">
              <h2>Chainsaw Man Season 1</h2>
              <span className="badge-dub">ENGLISH DUB</span>
            </div>
            
            <div className="video-player-wrapper">
              {/* Video player would go here */}
              <div className="video-placeholder">
                <div className="private-notice">
                  <span className="private-icon">🔒</span>
                  <p>This video is private</p>
                </div>
              </div>
            </div>

            <div className="video-meta">
              <span className="meta-badge quality">1080p</span>
              <span className="meta-badge source">YouTube</span>
              <span className="meta-badge mirror">Mirror A</span>
            </div>
          </div>

          {/* Episode Navigation */}
          <div className="episode-nav">
            <button className="nav-button prev">⬅️ Previous Episode</button>
            <span className="episode-info">Episode 1 of 12</span>
            <button className="nav-button next">Next Episode ➡️</button>
          </div>
        </div>

        {/* Recommended Sidebar */}
        <aside className="recommended-section">
          <h3 className="sidebar-title">
            <span>⭐</span> Recommended
          </h3>
          
          <div className="recommended-list">
            <a href="#" className="recommended-card">
              <span className="rec-emoji">🎬</span>
              <div className="rec-content">
                <h4>Chainsaw Man - The Movie: Reze Arc Official Trailer (2025)</h4>
                <span className="rec-meta">Movie • 2025</span>
              </div>
            </a>

            <a href="#" className="recommended-card">
              <span className="rec-emoji">😤</span>
              <div className="rec-content">
                <h4>Kobeni Goes Beserk</h4>
                <span className="rec-meta">Clip</span>
              </div>
            </a>

            <a href="#" className="recommended-card">
              <span className="rec-emoji">⚡</span>
              <div className="rec-content">
                <h4>Makima's Power</h4>
                <span className="rec-meta">Analysis</span>
              </div>
            </a>

            <a href="#" className="recommended-card">
              <span className="rec-emoji">🚂</span>
              <div className="rec-content">
                <h4>Makima's Creepy Train Station Scene</h4>
                <span className="rec-meta">Clip</span>
              </div>
            </a>

            <a href="#" className="recommended-card">
              <span className="rec-emoji">🎯</span>
              <div className="rec-content">
                <h4>Denji's First</h4>
                <span className="rec-meta">Clip</span>
              </div>
            </a>

            <a href="#" className="recommended-card">
              <span className="rec-emoji">🚽</span>
              <div className="rec-content">
                <h4>Power Doesn't Flush The Toilet</h4>
                <span className="rec-meta">Funny Moment</span>
              </div>
            </a>

            <a href="#" className="recommended-card">
              <span className="rec-emoji">💕</span>
              <div className="rec-content">
                <h4>Chainsaw Man: A Love Story</h4>
                <span className="rec-meta">AMV</span>
              </div>
            </a>
          </div>
        </aside>
      </div>

      {/* Series Info Section */}
      <section className="series-info card">
        <h2>📺 About This Series</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Status</span>
            <span className="info-value">Completed</span>
          </div>
          <div className="info-item">
            <span className="info-label">Episodes</span>
            <span className="info-value">12</span>
          </div>
          <div className="info-item">
            <span className="info-label">Genre</span>
            <span className="info-value">Action, Dark Fantasy</span>
          </div>
          <div className="info-item">
            <span className="info-label">Studio</span>
            <span className="info-value">MAPPA</span>
          </div>
        </div>
        
        <p style={{ marginTop: '1rem' }}>
          Denji is a young boy who works as a Devil Hunter with the "Chainsaw Devil" Pochita. 
          One day, as he was living his miserable life trying to pay off the debt he inherited 
          from his parents, he got betrayed and killed. As he was losing his consciousness, 
          he made a deal with Pochita, and got resurrected as the "Chainsaw Man."
        </p>
      </section>
    </div>
  );
}
