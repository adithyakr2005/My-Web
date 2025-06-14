import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <NavBar />
      <main style={{
        flex: 1,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div id="header">
          <Header />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects" style={{ paddingTop: '8em', marginTop: '0rem' }}>
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
