import './App.css';
import NavBar from './Sections/Navbar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Feature from './Sections/Feature';
import CTASection from './Sections/CTASection';
import Testimony from './Sections/Testimony';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Hero />
      </header>

      <main>
        <About />
        <Feature />
        <Testimony />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
