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
    
    // Send email via mailto - use a more reliable method
    const subject = `Portfolio Contact from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Use window.open for better compatibility
    window.open(mailtoLink, '_blank');
    
    console.log('Contact form submission:', data);
    return {
      success: true,
      message: 'Thank you for your message! Opening your email client...'
    };
  },

  async sendWhatsApp(data: { name: string; email: string; message: string }) {
    const whatsappMessage = `Hi Hassan, I'm ${data.name}. ${data.message} (Email: ${data.email})`;
    const whatsappLink = `https://wa.me/${profileData.phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
    
    return {
      success: true,
      message: 'Opening WhatsApp...'
    };
  }
};
