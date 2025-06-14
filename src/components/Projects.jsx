import { useState } from 'react';

const projectsData = {
  all: [
    {
      name: 'Waste Segregator',
      rank: 'gold',
      description: 'Seperating Bio and Non-Bio Waste using a CNN model and IoT.',
      link: 'https://github.com/adithyakr2005/Waste-Segregator.git',
    },
    {
      name: 'Weather App',
      rank: 'silver',
      description: 'Real-time readings recorded using a Raspberry Pi and sensors and stored in a database.',
      link: 'https://github.com/adithyakr2005/Weather-App.git',
    },
    {
      name: 'Cyber Bullying',
      rank: 'gold',
      description: 'Comparison of Different LLM models on a HateXplain Dataset on which model works best.',
      link: 'https://github.com/SriSathwik1905/CyberBullying.git',
    },
    {
      name: 'Smart Home',
      rank: 'silver',
      description: 'IoT-based automation system for controlling appliances remotely and monitoring the temperature and humidity of that house.',
      link: 'https://github.com/adithyakr2005/Smart-Home-Prototype-.git',
    },
    {
      name: 'Email Phishing Detection',
      rank: 'silver',
      description: 'A classifier to detect phishing emails using NLP techniques.',
      link: 'https://github.com/adithyakr2005/Email_Phishin_Detection.git',
    },
    {
      name: 'Library Manager',
      rank: 'bronze',
      description: 'My first ever project, a Simple CRUD app to manage library book records.',
      link: 'https://github.com/adithyakr2005/Library-Manager.git',
    },
    {
      name: 'Enigma',
      rank: 'bronze',
      description: 'Python recreation of WWII Enigma machine for text encryption.',
      link: 'https://github.com/adithyakr2005/Enigma-Encryption-Decryption-tool.git',
    },
    {
      name: 'Automatic Gate',
      rank: 'bronze',
      description: 'An Arduino-based system to open gates automatically using proximity sensors.',
      link: 'https://github.com/adithyakr2005/Automatic-Gate.git',
    },
    {
      name: 'Video Transmission using Sockets',
      rank: 'bronze',
      description: 'Bi-directional video transmission through 2 computers using pythonsockets.',
      link: 'https://github.com/adithyakr2005/Video-Transmission.git',
    },
    
  ],
  'AI/ML': [
    {
      name: 'Waste Segregator',
      rank: 'gold',
      description: 'Seperating Bio and Non-Bio Waste using a CNN model and IoT.',
      link: 'https://github.com/adithyakr2005/Waste-Segregator.git',
    },
    {
      name: 'Cyber Bullying',
      rank: 'gold',
      description: 'Comparison of Different LLM models on a HateXplain Dataset on which model works best.',
      link: 'https://github.com/SriSathwik1905/CyberBullying.git',
    },
    {
      name: 'Email Phishing Detection',
      rank: 'silver',
      description: 'A classifier to detect phishing emails using NLP techniques.',
      link: '',
    },
  ],
  IoT: [
    {
      name: 'Waste Segregator',
      rank: 'gold',
      description: 'Seperating Bio and Non-Bio Waste using a CNN model and IoT.',
      link: 'https://github.com/adithyakr2005/Waste-Segregator.git',
    },
    {
      name: 'Weather App',
      rank: 'silver',
      description: 'Real-time readings recorded using a Raspberry Pi and sensors and stored in a database.',
      link: 'https://github.com/adithyakr2005/Weather-App.git',
    },
    {
      name: 'Smart Home',
      rank: 'silver',
      description: 'IoT-based automation system for controlling appliances remotely and monitoring the temperature and humidity of that house.',
      link: 'https://github.com/adithyakr2005/Smart-Home-Prototype-.git',
    },
    {
      name: 'Automatic Gate',
      rank: 'bronze',
      description: 'An Arduino-based system to open gates automatically using motion sensors.',
      link: 'https://github.com/adithyakr2005/Automatic-Gate.git',
    },
  ],
  Cybersecurity: [
    {
      name: 'Email Phishing Detection',
      rank: 'silver',
      description: 'A classifier to detect phishing emails using NLP techniques.',
      link: '',
    },
    {
      name: 'Enigma',
      rank: 'bronze',
      description: 'Recreation of WWII Enigma machine for text encryption.',
      link: 'https://github.com/adithyakr2005/Enigma-Encryption-Decryption-tool.git',
    },
  ],
  WebDev: [
    {
      name: 'This Website',
      rank: 'gold',
      description: 'My personal portfolio showcasing my skills and projects. Also this website is hosted by a Raspberry Pi.',
      link: '',
    },
    {
      name: 'Smart Home',
      rank: 'bronze',
      description: 'IoT-based automation system for controlling appliances remotely.',
      link: 'https://github.com/adithyakr2005/Smart-Home-Prototype-.git',
    },
    {
      name: 'Email Phishing Detection',
      rank: 'bronze',
      description: 'A classifier to detect phishing emails using NLP techniques.',
      link: 'https://github.com/adithyakr2005/Email_Phishin_Detection.git',
    },
    
  ],
};

const rankColors = {
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
};

const rankOrder = ['gold', 'silver', 'bronze'];

function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = projectsData[activeTab];

  // Group projects by rank
  const groupedProjects = rankOrder.reduce((acc, rank) => {
    acc[rank] = projects.filter((p) => p.rank === rank);
    return acc;
  }, {});

  return (
    <div style={{ marginTop: '5rem', textAlign: 'center' }} id="projects">
      <h2>Projects</h2>

      {/* Tabs */}
      <div
        style={{
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {Object.keys(projectsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#ff0000' : '#111',
              color: '#fff',
              border: '1px solid #ff0000',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontFamily: 'VCR OSD Mono, monospace',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects grouped by rank */}
      {rankOrder.map((rank) =>
        groupedProjects[rank]?.length > 0 ? (
          <div
            key={rank}
            style={{
              margin: '1rem 0',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {groupedProjects[rank].map((project) => {
              const isHovered = hoveredProject === project.name;
              const bgColor = isHovered ? rankColors[project.rank] : '#222';
              const textColor = isHovered ? '#000' : '#fff';
              const boxShadow = isHovered
                ? `0 0 15px 4px ${rankColors[project.rank]}99`
                : 'none';

              return (
                <div
                  key={project.name}
                  onMouseEnter={() => setHoveredProject(project.name)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => {
                    if (project.link) window.open(project.link, '_blank');
                  }}
                  style={{
                    padding: '1rem',
                    minWidth: '200px',
                    maxWidth: '250px',
                    backgroundColor: bgColor,
                    borderRadius: '8px',
                    color: textColor,
                    fontWeight: 'bold',
                    fontFamily: 'VCR OSD Mono, monospace',
                    cursor: project.link ? 'pointer' : 'default',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    boxShadow: boxShadow,
                  }}
                >
                  <div>{project.name}</div>

                  {/* Show description on hover */}
                  {isHovered && project.description && (
                    <div
                      style={{
                        marginTop: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 'normal',
                        color: textColor,
                      }}
                    >
                      {project.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : null
      )}

      {/* Bottom spacing */}
      <div style={{ height: '10rem' }} />
    </div>
  );
}

export default Projects;
