import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import tuvCertificado from '../assets/images/tuv-certificado.png';
import anpgCertificado from '../assets/images/anpg-certificado.png';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import CertificateModal from './CertificateModal';

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificateType) => {
    setSelectedCertificate(certificateType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const handleScrollClick = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -80,
        });
      }, 100);
    } else {
      scroller.scrollTo(target, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
      });
    }
  };

  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Mission */}
        <div className="flex flex-col items-start">
          <span className='logo text-2xl font-stardos-stencil mb-3'>SERTRANAVE</span>
          <p className="text-sm opacity-80">
            {t('footer_mission')}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3 text-lg">{t('footer_quick_links')}</h3>
          <ul className="space-y-2">
            <li>
              <RouterLink to="/" className="hover:underline hover:text-secondary transition-colors">
                {t('navbar_home')}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/quem-somos" className="hover:underline hover:text-secondary transition-colors">
                {t('navbar_about')}
              </RouterLink>
            </li>
            <li>
              <button
                onClick={() => handleScrollClick('services')}
                className="hover:underline hover:text-secondary transition-colors text-left"
              >
                {t('navbar_services')}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollClick('ports')}
                className="hover:underline hover:text-secondary transition-colors text-left"
              >
                {t('navbar_ports')}
              </button>
            </li>
            <li>
              <RouterLink to="/contactos" className="hover:underline hover:text-secondary transition-colors">
                {t('navbar_contact')}
              </RouterLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3 text-lg">{t('footer_contact')}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={16} /> +244 922617263
            </li>
            <li className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={16} /> info@sertranave.co.ao
            </li>
            <li className="opacity-80">{t('footer_address')}</li>
          </ul>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="font-bold mb-3 text-lg">{t('footer_certificates')}</h3>
          <div className="space-y-4">
            <div 
              className="bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-all hover:scale-105 duration-300"
              onClick={() => openCertificate('tuv')}
            >
              <img 
                src={tuvCertificado} 
                alt="TÜV Rheinland Certificate" 
                className="w-full h-auto rounded"
              />
            </div>
            <div 
              className="bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-all hover:scale-105 duration-300"
              onClick={() => openCertificate('anpg')}
            >
              <img 
                src={anpgCertificado} 
                alt="ANPG Certificate" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary/90 border-t border-white/10 py-4 text-center flex flex-col md:flex-row items-center justify-between px-4 max-w-7xl mx-auto">
        <span className="text-xs opacity-80">
          © {year} Sertranave. {t('footer_rights_reserved')}.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="hover:text-secondary transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="hover:text-secondary transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certificateType={selectedCertificate}
      />
    </footer>
  );
}