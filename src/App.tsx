import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QualityPolicyPage from './pages/QualityPolicyPage';
import ContactPage from './pages/ContactPage';
import useSmoothScroll from './lib/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-somos" element={<AboutPage />} />
            <Route path="/politica-de-qualidade" element={<QualityPolicyPage />} />
            <Route path="/contactos" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;