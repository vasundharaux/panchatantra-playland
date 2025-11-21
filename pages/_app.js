import React, { useState } from "react";
import "./App.css";

const STORIES = [
  {
    id: 1,
    title: "The Lion and the Clever Rabbit",
    tag: "Cleverness",
    duration: "6 min",
    grade: "Ages 7–12",
    mood: "Tricky • Fun",
    description:
      "A proud lion learns a lesson in overconfidence when a tiny rabbit uses wit instead of strength.",
  },
  {
    id: 2,
    title: "The Monkey and the Crocodile",
    tag: "Friendship",
    duration: "7 min",
    grade: "Ages 8–12",
    mood: "Adventure • Trust",
    description:
      "A clever monkey outsmarts a crocodile and discovers the true meaning of trust and loyalty.",
  },
  {
    id: 3,
    title: "The Tortoise and the Geese",
    tag: "Self-Control",
    duration: "5 min",
    grade: "Ages 6–11",
    mood: "Gentle • Reflective",
    description:
      "A talkative tortoise learns why listening and patience are sometimes the best superpowers.",
  },
  {
    id: 4,
    title: "The Blue Jackal",
    tag: "Honesty",
    duration: "6 min",
    grade: "Ages 7–12",
    mood: "Playful • Lesson",
    description:
      "A jackal pretending to be a king discovers that pretending to be someone else never lasts.",
  },
];

function App() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="app-root">
      {/* Floating background shapes */}
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />

      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">Panchatantra PlayLand</span>
        </div>
        <nav className="nav-links">
          <button className="nav-pill">Stories</button>
          <button className="nav-pill">Moral Lessons</button>
          <button className="nav-pill">Parent Corner</button>
        </nav>
      </header>

      <main className="main-layout">
        {/* Left: Hero section */}
        <section className="hero-section">
          <div className="hero-badge">New • Animated Story Worlds</div>
          <h1 className="hero-title">
            Turn classic <span className="hero-highlight">Panchatantra tales</span>
            <br />
            into a colorful, animated playland.
          </h1>
          <p className="hero-subtitle">
            Tap a story card to explore scenes, morals, and playful prompts that help kids reflect,
            imagine, and share what they learned.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              ▶ Start a Story Session
            </button>
            <button className="ghost-btn">
              🎨 Build Your Own Storyboard
            </button>
          </div>

          <div className="hero-tags">
            <div className="hero-chip">Bedtime stories</div>
            <div className="hero-chip">Animated scenes</div>
            <div className="hero-chip">Reflection prompts</div>
          </div>
        </section>

        {/* Right: Story grid */}
        <section className="story-section">
          <div className="story-header">
            <h2>Pick a Story World</h2>
            <p>Each card opens an animated flow of scenes, questions, and a simple moral.</p>
          </div>

          <div className="story-grid">
            {STORIES.map((story, index) => (
              <button
                key={story.id}
                className={`story-card card-${(index % 4) + 1}`}
                onClick={() => setSelectedStory(story)}
              >
                <div className="story-pill">{story.tag}</div>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-description">{story.description}</p>

                <div className="story-meta">
                  <span>⏱ {story.duration}</span>
                  <span>⭐ {story.grade}</span>
                </div>

                <div className="story-mood">{story.mood}</div>

                <div className="story-footer">
                  <span>Tap to open scenes →</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Simple modal for selected story (fake “scenes” for now) */}
      {selectedStory && (
        <div className="modal-backdrop" onClick={() => setSelectedStory(null)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-tag">{selectedStory.tag}</div>
            <h2 className="modal-title">{selectedStory.title}</h2>
            <p className="modal-text">
              Imagine this as your animated flow:  
              <br />
              <strong>Scene 1</strong> – Introduce the characters with a colorful forest or riverbank.  
              <br />
              <strong>Scene 2</strong> – Build the conflict or tricky situation.  
              <br />
              <strong>Scene 3</strong> – Show the clever solution and the turning point.  
              <br />
              <strong>Moral Card</strong> – One simple line that kids can repeat back.
            </p>

            <ul className="modal-list">
              <li>✨ Add AI-generated backgrounds and character animations.</li>
              <li>💬 Ask 1–2 reflection questions for kids/parents.</li>
              <li>📝 Let them type or record their own ending.</li>
            </ul>

            <button
              className="primary-btn modal-btn"
              onClick={() => setSelectedStory(null)}
            >
              Close Story World
            </button>
          </div>
        </div>
      )}

      <footer className="app-footer">
        Built for curious kids & thoughtful parents · Panchatantra PlayLand
      </footer>
    </div>
  );
}

export default App;
