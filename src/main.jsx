import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/main.css';
import './styles/base.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <MainContent />
    <Footer />
  </StrictMode>,
)
