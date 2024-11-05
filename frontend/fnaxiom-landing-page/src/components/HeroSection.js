import React from 'react';
import './HeroSection.css';


function HeroSection() {
    return (
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to FNAXIOM Full Stack Internship</h1>
          <p>Your journey into technology and innovation starts here.</p>
          <button className="btn btn-primary">Get Started</button>
  
          {/* Cards Container */}
          <div className="cards-container">
            {[
              { title: 'Coding Challenge', description: 'Test your coding skills', buttonText: 'Get Started' },
              { title: 'Project Submission', description: 'Submit your projects', buttonText: 'Submit Now' },
              { title: 'Project Quiz', description: 'Take the quiz', buttonText: 'Start Quiz' },
              { title: 'Live Assessment', description: 'Join live assessments', buttonText: 'Join Now' },
              { title: 'Portfolio Assessment', description: 'Submit your portfolio', buttonText: 'Get Assessed' },
            ].map((card, index) => (
              <div key={index} className="card">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <button className="card-button">{card.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default HeroSection;
