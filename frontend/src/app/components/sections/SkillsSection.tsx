import { motion } from 'motion/react';
import { Scene3D } from '../3d/Scene3D';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface SkillsSectionProps {
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

// Icon URLs for different skills using CDN
const getSkillIcon = (skill: string): string => {
  const iconMap: { [key: string]: string } = {
    // Languages
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'PL/SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    
    // Frontend
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    
    // Backend
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'REST APIs': 'https://cdn.simpleicons.org/fastapi/009688',
    'JWT Authentication': 'https://cdn.simpleicons.org/jsonwebtokens/000000',
    'MVC Architecture': 'https://cdn.simpleicons.org/dotnet/512BD4',
    
    // Tools - AI & Development
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Web Container': 'https://webcontainers.io/img/favicon.png',
    'Cursor': 'https://substack-post-media.s3.amazonaws.com/public/images/e8faacfd-274f-4f71-802d-c544f5ee37ae_400x400.jpeg',
    'Gen-AI': 'https://media.licdn.com/dms/image/v2/D4D22AQE-eTTF4DjVlA/feedshare-shrink_800/B4DZoWZAloJUAo-/0/1761312248558?e=2147483647&v=beta&t=3pFKp3uqedyAw8vPLTuVlocCJzW7e7UUdDNGqhaDo14',
    'Antigravity': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvinjxr8MVZ69diNIbNNMfcUljy04dIjkqPQ&s',
    'GitHub Copilot': 'https://api.iconify.design/simple-icons:githubcopilot.svg',
    'Kiro': 'https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/kiro_51769_logo_1753086501_0boi4.jpeg',
    'Lovable': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ68l5UaflfP4iIhMlzUzn2o3051x_HwxLKg&s',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Nginx(Basic)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'PyCharm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  };

  return iconMap[skill] || 'https://cdn.simpleicons.org/codepen/000000';
};

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Flatten all skills into a single array with their categories
  const allSkillsFlat = [
    ...skills.languages.map(skill => ({ name: skill, category: 'Language' })),
    ...skills.frontend.map(skill => ({ name: skill, category: 'Frontend' })),
    ...skills.backend.map(skill => ({ name: skill, category: 'Backend' })),
    ...skills.tools.map(skill => ({ name: skill, category: 'Tools' }))
  ];

  // Filter skills based on search and category
  const filteredSkills = allSkillsFlat.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Language', 'Frontend', 'Backend', 'Tools'];

  const shapes = [
    { type: 'octahedron' as const, position: [-4, 2, 0] as [number, number, number], speed: 1.2, color: '#A67C52' },
    { type: 'sphere' as const, position: [4, -2, -1] as [number, number, number], speed: 0.9, color: '#C4A57B' },
    { type: 'torus' as const, position: [0, 0, -2] as [number, number, number], speed: 1.1, color: '#8B6F47' },
    { type: 'box' as const, position: [-2, -3, 1] as [number, number, number], speed: 0.8, color: '#D4B896' },
    { type: 'octahedron' as const, position: [3, 3, -3] as [number, number, number], speed: 1.3, color: '#A67C52' }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--primary)_0.08,_transparent_28%),radial-gradient(circle_at_80%_35%,_var(--primary)_0.06,_transparent_24%)]" />
      <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-10%] bottom-20 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground border border-border hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => {
              const iconUrl = getSkillIcon(skill.name);
              
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-2xl border border-border bg-card p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-card flex items-center justify-center">
                      <img 
                        src={iconUrl} 
                        alt={`${skill.name} icon`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // Fallback: show first letter if image fails
                          const target = e.currentTarget;
                          const parent = target.parentElement;
                          if (parent) {
                            target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm';
                            fallback.textContent = skill.name.charAt(0).toUpperCase();
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground mb-1 truncate">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No skills found matching your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
