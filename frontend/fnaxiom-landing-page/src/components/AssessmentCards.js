import React from 'react';
import './AssessmentCards.css';

const assessments = [
  { title: "Coding Challenge", description: "Various coding tasks to improve your skills." },
  { title: "Project Submission", description: "Submit your project for review and feedback." },
  { title: "Project Quiz", description: "Complete quizzes to test your knowledge." },
  { title: "Code Assessment", description: "Assess your coding abilities in real-time." },
  { title: "Live Assessment", description: "Participate in live coding assessments." },
  { title: "Portfolio Assessment", description: "Get feedback on your portfolio." }
];

const AssessmentCards = () => {
  return (
    <div className="assessment-cards">
      {assessments.map((assessment, index) => (
        <div key={index} className="card">
          <h3>{assessment.title}</h3>
          <p>{assessment.description}</p>
          <button>Get Started</button>
        </div>
      ))}
    </div>
  );
};

export default AssessmentCards;
