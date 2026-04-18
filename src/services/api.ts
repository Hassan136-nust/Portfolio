import { profileData, projectsData } from '../data/resumeData';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getProfile() {
    await delay(300);
    return profileData;
  },

  async getProjects() {
    await delay(300);
    return projectsData;
  },

  async submitContact(data: { name: string; email: string; message: string }) {
    await delay(500);
    console.log('Contact form submission:', data);
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    };
  }
};
