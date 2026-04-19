import { profileData, projectsData } from '../data/resumeData';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Create a comprehensive context about Hassan from the portfolio
const createPortfolioContext = () => {
  const context = `
You are Hassan Jamal's AI Assistant. You represent Hassan and answer questions on his behalf based on his portfolio information.

ABOUT HASSAN:
Name: ${profileData.name}
Title: ${profileData.title}
Email: ${profileData.email}
Phone: ${profileData.phone}
Location: ${profileData.location}
Bio: ${profileData.bio}

EDUCATION:
${profileData.education.map(edu => `
- ${edu.degree} at ${edu.institution}
  Duration: ${edu.duration}
  ${edu.description}
`).join('\n')}

SKILLS:
Programming Languages: ${profileData.skills.languages.join(', ')}
Frontend: ${profileData.skills.frontend.join(', ')}
Backend: ${profileData.skills.backend.join(', ')}
Tools: ${profileData.skills.tools.join(', ')}

EXPERIENCE:
${profileData.experience.map(exp => `
- ${exp.position} at ${exp.company}
  Duration: ${exp.duration}
  ${exp.description}
`).join('\n')}

PROJECTS:
${projectsData.map(project => `
- ${project.title}
  Technologies: ${project.technologies.join(', ')}
  Description: ${project.description}
  GitHub: ${project.github}
  Live Demo: ${project.link}
`).join('\n')}

SOCIAL LINKS:
GitHub: ${profileData.social.github}
LinkedIn: ${profileData.social.linkedin}

INSTRUCTIONS:
- Answer questions as if you are Hassan's assistant representing him
- Use the information provided above to answer questions accurately
- If asked about skills, projects, or experience, refer to the specific details above
- Be professional, friendly, and concise
- If asked something not in the portfolio, politely say you don't have that information
- Always speak in first person when referring to Hassan (e.g., "Hassan has experience in..." or "He worked on...")
- Provide contact information when asked how to reach Hassan
`;
  
  return context;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const portfolioContext = createPortfolioContext();
    const fullMessage = `${portfolioContext}\n\nUser Question: ${userMessage}\n\nPlease answer this question based on Hassan's portfolio information above.`;

    const response = await fetch(`${API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: fullMessage
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success && data.message) {
      return data.message;
    }
    
    throw new Error(data.error || 'Invalid response format');
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};
