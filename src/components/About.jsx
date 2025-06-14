function About() {
  // Your original skills data
  const skills = [
    { name: 'Micro Controllers', level: 80},
    { name: 'Python', level: 70 },
    { name: 'C', level: 50 },
    { name: 'Linux', level: 60 },
    { name: 'SQL', level: 70 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'JavaScript', level: 50 },
    { name: 'React', level: 30 },
  ];

  // Your original topics data
  const topics = [
    { name: 'AI/ML', icon: 'brain.png' },
    { name: 'IoT', icon: 'IoT.png' },
    { name: 'Cybersecurity', icon: 'lock.png' },
    { name: 'Web Development', icon: 'web.png' },// Assuming you meant IoT here from previous example
  ];

  return (
    <section style={{marginBottom: '12rem', padding: '2rem', color: 'white', textAlign: 'center', maxWidth: '900px', margin: 'auto' }}>
      

      <h3 style={{ color: '#ff0000', fontFamily: "'VCR OSD Mono', monospace", margin: '-0.5rem 0 1.5rem' }}> {/* Adjusted margin slightly */}
        Tool Level
      </h3>

      {/* Skill Progress Bars - Using Flexbox like friend's example */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem', // Can adjust gap as needed (friend used 1rem, your grid used 2rem)
          maxWidth: '800px', // Similar to friend's example, allows for approx 3 items per row
          margin: '0 auto 3rem auto',
          
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              width: '220px', // Your preferred width for skill items
              backgroundColor: '#111',
              border: '1px solid #ff0000',
              borderRadius: '6px', // Your preferred border radius
              padding: '1rem',
              fontFamily: "'VCR OSD Mono', monospace",
            }}
          >
            <div style={{ marginBottom: '0.5rem', color: '#fff' }}>{skill.name}</div>
            <div
              style={{
                background: '#333',
                height: '10px',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${skill.level}%`,
                  background: '#ff0000',
                  height: '100%',
                }}
              ></div>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#bbb' }}>
              {skill.level}%
            </div>
          </div>
        ))}
      </div>

      {/* Topic Badges - Retaining your original section */}
      <h3 style={{ margin: '3rem 0 1rem', color: '#ff0000', fontFamily: "'VCR OSD Mono', monospace" }}>Abilities</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          margin: '0 -4rem', // Added some bottom margin
        }}
      >
        {topics.map((topic) => (
          <div
            key={topic.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#111',
              border: '2px solid #ff0000',
              borderRadius: '999px', // Pill shape
              padding: '0.75rem 1.25rem',
              fontFamily: "'VCR OSD Mono', monospace",
              fontSize: '1rem',
              color: '#fff',
              gap: '0.75rem',
            }}
          >
            <img
              src={`/icons/${topic.icon}`} // Make sure your icons are in public/icons/
              alt={topic.name}
              style={{ width: '24px', height: '24px' }}
            />
            {topic.name}
          </div>
        ))}
      </div>
      
      {
      <p style={{ marginTop: '2rem', fontSize: '1.25rem', fontFamily: "'VCR OSD Mono', monospace", color: '#bbb' }}>
        Zone: Chennai, India.
      </p>
      }
    </section>
  );
}

export default About;