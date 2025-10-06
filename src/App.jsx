import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the new Footer
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
            {/* Adicionar outras rotas aqui no futuro, como para os Portos */}
          </Routes>
        </main>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
