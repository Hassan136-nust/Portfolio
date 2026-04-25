/**
 * Resume PDF Generator
 * Generates a downloadable PDF resume from resume data
 */

export const generateAndDownloadResume = () => {
  // Create a new window with resume content
  const resumeWindow = window.open('', '_blank');
  
  if (!resumeWindow) {
    alert('Please allow pop-ups to download the resume');
    return;
  }

  const resumeHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hassan Jamal - Resume</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: white;
          padding: 40px;
        }
        
        .container {
          max-width: 8.5in;
          height: 11in;
          margin: 0 auto;
          background: white;
          padding: 40px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        header {
          text-align: center;
          margin-bottom: 20px;
          border-bottom: 2px solid #2c3e50;
          padding-bottom: 15px;
        }
        
        .name {
          font-size: 28px;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        
        .contact-info {
          font-size: 11px;
          color: #555;
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .contact-info a {
          color: #2c3e50;
          text-decoration: none;
        }
        
        section {
          margin-bottom: 15px;
        }
        
        .section-title {
          font-size: 14px;
          font-weight: bold;
          color: #2c3e50;
          text-transform: uppercase;
          border-bottom: 1px solid #34495e;
          padding-bottom: 5px;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }
        
        .entry {
          margin-bottom: 12px;
        }
        
        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 3px;
        }
        
        .entry-title {
          font-weight: bold;
          color: #2c3e50;
          font-size: 12px;
        }
        
        .entry-subtitle {
          font-size: 11px;
          color: #555;
          font-style: italic;
        }
        
        .entry-date {
          font-size: 11px;
          color: #888;
        }
        
        .entry-description {
          font-size: 11px;
          color: #333;
          margin-top: 3px;
          line-height: 1.4;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          font-size: 11px;
        }
        
        .skill-category {
          margin-bottom: 8px;
        }
        
        .skill-category-title {
          font-weight: bold;
          color: #2c3e50;
          font-size: 11px;
          margin-bottom: 3px;
        }
        
        .skill-items {
          color: #333;
          font-size: 10px;
          line-height: 1.3;
        }
        
        ul {
          margin-left: 15px;
          font-size: 11px;
          color: #333;
        }
        
        li {
          margin-bottom: 3px;
        }
        
        @media print {
          body {
            padding: 0;
          }
          .container {
            box-shadow: none;
            max-width: 100%;
            height: auto;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <div class="name">HASSAN JAMAL</div>
          <div class="contact-info">
            <span>📧 hjamal.bscs24seecs@seecs.edu.pk</span>
            <span>📱 0328-9082754</span>
            <span>📍 Islamabad, Pakistan</span>
            <a href="https://linkedin.com/in/hassan-jamal-a92191324/">LinkedIn</a>
            <a href="https://github.com/Hassan136-nust">GitHub</a>
          </div>
        </header>

        <section>
          <div class="section-title">Education</div>
          <div class="entry">
            <div class="entry-header">
              <div class="entry-title">National University of Sciences and Technology (NUST)</div>
              <div class="entry-date">2024 – Present</div>
            </div>
            <div class="entry-subtitle">BS Computer Science — 4th Semester — CGPA: 3.32</div>
          </div>
        </section>

        <section>
          <div class="section-title">Skills</div>
          <div class="skills-grid">
            <div class="skill-category">
              <div class="skill-category-title">Programming Languages</div>
              <div class="skill-items">Python, C++, Java, JavaScript, PL/SQL</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Frontend</div>
              <div class="skill-items">React.js, HTML, CSS, Tailwind CSS, Bootstrap</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Backend</div>
              <div class="skill-items">Node.js, Express.js, MongoDB, REST APIs, JWT, MVC</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Cloud & DevOps</div>
              <div class="skill-items">Docker, AWS (ECR, ECS, ALB), Nginx</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Tools & IDEs</div>
              <div class="skill-items">Git, GitHub, VS Code, Postman, Figma</div>
            </div>
            <div class="skill-category">
              <div class="skill-category-title">Systems & Concepts</div>
              <div class="skill-items">DSA, OOP, Database Systems, AI Algorithms, CRDTs</div>
            </div>
          </div>
        </section>

        <section>
          <div class="section-title">Experience & Projects</div>
          
          <div class="entry">
  <div class="entry-header">
    <div class="entry-title">FREYA – AI-Powered Collaborative Code Editor</div>
    <div class="entry-date">2026</div>
  </div>
  <div class="entry-subtitle">Gen-AI + MERN + WebContainers</div>
  <ul>
    <li>Built a real-time multi-user collaborative development environment with live code editing, file synchronization, and in-browser execution using WebContainer API</li>
    <li>Integrated Groq LLM for AI-powered code generation via @freya, with automatic code-to-file conversion and backend architecture (Socket.io, JWT, Redis) implemented from scratch</li>
  </ul>
</div>

          <div class="entry">
            <div class="entry-header">
              <div class="entry-title">Dimensional Aspect-Based Sentiment Analysis</div>
              <div class="entry-date">2026</div>
            </div>
            <div class="entry-subtitle">SemEval-2026 Task 3 — International Workshop</div>
            <ul>
              <li>Worked on aspect-level and dimensional sentiment analysis using NLP and deep learning models</li>
              <li>Performed dataset preprocessing, feature engineering, and model optimization</li>
            </ul>
          </div>


            <div class="entry">
  <div class="entry-header">
    <div class="entry-title">Gapify AI - Resume & Interview Analyzer</div>
    <div class="entry-date">2026</div>
  </div>
  <div class="entry-subtitle">Gen-AI + MERN Stack Deployment</div>
  <ul>
    <li>Built a full-stack MERN application that analyzes resumes and job descriptions using Gen-AI to generate match scores, skill gaps, and interview questions</li>
    <li>Integrated Groq API for LLM-based insights and deployed frontend on Vercel and backend on Render with authentication and file handling</li>
  </ul>
</div>

          <div class="entry">
            <div class="entry-header">
              <div class="entry-title">UrbanPulse: GeoSpatial Urban Intelligence Platform</div>
              <div class="entry-date">In Progress</div>
            </div>
            <div class="entry-subtitle">MERN Stack</div>
            <ul>
              <li>Building a full-stack MERN application for geospatial urban analysis using OpenStreetMap APIs</li>
              <li>Implementing REST APIs and backend services for processing spatial data with MongoDB</li>
              <li>Designing infrastructure scoring algorithms and route planning modules</li>
            </ul>
          </div>

          <div class="entry">
            <div class="entry-header">
              <div class="entry-title">Real-Time Collaborative Code Editor</div>
              <div class="entry-date">2024</div>
            </div>
            <div class="entry-subtitle">Docker + AWS Deployment</div>
            <ul>
              <li>Built a real-time multi-user code editor with live cursor synchronization using CRDT-based state management</li>
              <li>Deployed on AWS using ECR, ECS, and Application Load Balancer for scalable public access</li>
            </ul>
          </div>

          <div class="entry">
  <div class="entry-header">
    <div class="entry-title">Chess Arena - Real-Time Multiplayer Game</div>
    <div class="entry-date">2024</div>
  </div>
  <div class="entry-subtitle">Docker + Render Deployment</div>
  <ul>
    <li>Built a real-time multiplayer chess game with live chat using WebSockets for instant move synchronization across devices</li>
    <li>Containerized the application with Docker and deployed on Render, handling real-time connections and debugging production issues</li>
  </ul>
</div>

          <div class="entry">
            <div class="entry-header">
              <div class="entry-title">Recommendation System with Graph Analysis</div>
            </div>
            <ul>
              <li>Built a graph-based recommendation engine using user-item relationships</li>
              <li>Applied network analysis techniques for pattern extraction and optimization</li>
            </ul>
          </div>

          <div class="entry">
            <div class="entry-header">
              <div class="entry-title">Encrypted VPN with Login System</div>
            </div>
            <ul>
              <li>Developed a secure VPN system with encrypted communication and authentication</li>
              <li>Implemented client-server architecture with session management and packet handling</li>
            </ul>
          </div>
        </section>

        <section>
          <div class="section-title">Technical Interests</div>
          <ul>
            <li>Artificial Intelligence and Machine Learning (with focus on NLP and intelligent systems)</li>
            <li>Backend development and REST API design</li>
            <li>Full-stack MERN applications</li>
            <li>Scalable backend systems and data-driven application development</li>
          </ul>
        </section>
      </div>

      <script>
        window.print();
      </script>
    </body>
    </html>
  `;

  resumeWindow.document.write(resumeHTML);
  resumeWindow.document.close();
};
