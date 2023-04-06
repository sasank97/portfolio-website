import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
