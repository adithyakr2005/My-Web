import { useState, useRef, useEffect } from 'react';

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100); // slight delay before fading starts
  };

  useEffect(() => {
    if (!isVisible) {
      const hideDelay = setTimeout(() => {
        setShowDropdown(false);
      }, 300); // match transition duration
      return () => clearTimeout(hideDelay);
    }
  }, [isVisible]);

  const navWrapperStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    zIndex: 1000,
    boxSizing: 'border-box',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    borderRadius: '6px',
  };

  const menuWrapperStyle = {
    position: 'relative',
    paddingRight: '1.5rem',
  };

  const menuTriggerStyle = {
    backgroundColor: '#ff0000',
    padding: '0.5rem 1.25rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: 'VCR OSD Mono, monospace',
    color: '#fff',
    boxShadow: '0 0 12px rgba(255, 0, 0, 0.8)',
  };

  const dropdownStyle = {
    display: showDropdown ? 'flex' : 'none',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 300ms ease-in-out',
    flexDirection: 'column',
    gap: '0.5rem',
    backgroundColor: '#000',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ff0000',
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '0.5rem',
    boxShadow: '0 0 10px rgba(255, 0, 0, 0.6)',
    zIndex: 2,
  };

  const buttonStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.25rem',
    fontFamily: 'VCR OSD Mono, monospace',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '6px',
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={navWrapperStyle}>
      {/* Left Logos */}
      <div style={logoContainerStyle}>
        <img src="/icons/Pi.png" alt="Pi Logo" style={logoStyle} />
        <img src="/icons/logo.jpg" alt="Main Logo" style={logoStyle} />

      </div>

      {/* Right Hover Menu */}
      <div
        style={menuWrapperStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={menuTriggerStyle}>Menu</div>
        <nav style={dropdownStyle}>
          <button style={buttonStyle} onClick={() => scrollToSection('header')}>
            Home
          </button>
          <button style={buttonStyle} onClick={() => scrollToSection('about')}>
            Skills
          </button>
          <button style={buttonStyle} onClick={() => scrollToSection('projects')}>
            Projects
          </button>
          <button style={buttonStyle} onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
