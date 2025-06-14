import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = Date.now();
    const last = localStorage.getItem('lastSubmit');
    if (last && now - last < 30000) {
      alert('Please wait 30 seconds before submitting again.');
      return;
    }

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('All fields are required.');
      return;
    }

    const subject = encodeURIComponent('New Contact Form Message');
    const body = encodeURIComponent(`${name}\n\n${email}\n\n${message}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=ubuntu.24092000@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    );

    localStorage.setItem('lastSubmit', now.toString());
    form.reset();
  };

  return (
    <section id="contact" style={{ marginTop: '10rem', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="contact-input"
          maxLength={100}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
          maxLength={100}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="contact-input"
          maxLength={1000}
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            fontFamily: 'VCR OSD Mono, monospace',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 0 12px rgba(255, 0, 0, 0.6)',
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>

      {/* Social Icons */}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="/cv.png" target="_blank" rel="noopener noreferrer">
          <img src="/cv.png" alt="CV" className="social-icon" />
        </a>
        <a href="https://github.com/adithyakr2005" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/adithya-krishna-9195a9201/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://leetcode.com/adithyakr2005" target="_blank" rel="noopener noreferrer">
          <img src="/leetcode.png" alt="LeetCode" className="social-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
