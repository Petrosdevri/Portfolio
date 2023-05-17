import { React, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const TechStack = lazy(() => import('./components/About/CompleteTechStack'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const ScrollButton = lazy(() => import('./components/ScrollButton'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/techstack' element={<TechStack />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
