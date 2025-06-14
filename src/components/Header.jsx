function Header() {
  return (
    <header style={{
      textAlign: 'center',
      color: 'white',
      fontFamily: "'VCR OSD Mono', monospace",
      paddingTop: '10rem', // add spacing from top
      marginBottom: '3rem',
    }}>
      <h1 style={{ fontSize: '3rem', color: '#ff0000' }}>Adithya Krishna</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#ffffff' }}>The Computer Expert You Need.</h2>

      <h1 style={{ fontFamily: "'VCR OSD Mono', monospace", color: '#ff0000', marginBottom: '1rem' }}>
        About Me
      </h1>

      <p style={{ 
        fontFamily: "'VCR OSD Mono', monospace", 
        fontSize: '1.1rem', 
        color: '#ddd', 
        maxWidth: '700px', // Your original maxWidth for paragraph
        margin: '0 auto 3rem auto',
        lineHeight: '1.5',
        textAlign: 'center',
        paddingBottom: '8rem',
        paddingTop:'2rem',
      }}>
        A passionate computer science student with a mind to thrive and learn new things with hands on experience. A great interest in projects containing Microcontrollers, Networking, Cybersecurity, AI/ML and WebDev.
      </p>
    </header>

    
  );
}

export default Header;
