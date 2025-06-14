function Footer() {
    return (
      <footer style={{
        width: '100%',
        padding: '2rem 1rem',
        textAlign: 'center',
        color: '#ccc',
        background: 'linear-gradient(to right, #5c1a00, #801a00)',
        fontFamily: 'VCR OSD Mono, monospace',
        position: 'relative',
      }}>
        <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>
          Adithya Krishna
        </h2>
        <p style={{ margin: 0 }}>Computer Science Student | Chennai, India</p>
        <p style={{ margin: 0 }}>This website is hosted by a Raspberry Pi.</p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
          © 2025 Adithya Krishna. All rights reserved.
        </p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.3rem' }}>
          Currently pursuing B.Tech in Computer Science at SRM University.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  