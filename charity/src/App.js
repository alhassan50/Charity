import './App.css';
import NavBar from './Sections/Navbar';
import Hero from './Sections/Hero';
import CTASection from './Sections/CTASection';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Hero />
      </header>

      <main>
        <CTASection />
      </main>
    </div>
  );
}

export default App;
