import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/sertranave.png';
import tuvCertificado from '../assets/images/tuv-certificado.png';
import anpgCertificado from '../assets/images/anpg-certificado.png';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import CertificateModal from './CertificateModal';

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation();
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

  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Mission */}
        <div className="flex flex-col items-start">
          <span className='logo text-2xl font-stardos-stencil'>SERTRANAVE</span>
          <p className="text-sm opacity-80">
            {t('footer_mission')}
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3 text-lg">{t('footer_quick_links')}</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">{t('navbar_home')}</a></li>
            <li><a href="/quem-somos" className="hover:underline">{t('navbar_about')}</a></li>
            <li><a href="/servicos" className="hover:underline">{t('navbar_services')}</a></li>
            <li><a href="/portos" className="hover:underline">{t('navbar_ports')}</a></li>
            <li><a href="/contactos" className="hover:underline">{t('navbar_contact')}</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3 text-lg">{t('footer_contact')}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +244 922617263</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@sertranave.co.ao</li>
            <li>{t('footer_address')}</li>
          </ul>
        </div>
        {/* Certificates */}
        <div>
          <h3 className="font-bold mb-3 text-lg">{t('footer_certificates')}</h3>
          <div className="space-y-4">
            <div 
              className="bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => openCertificate('tuv')}
            >
              <img 
                src={tuvCertificado} 
                alt="TÜV Rheinland Certificate" 
                className="w-full h-auto rounded"
              />
            </div>
            <div 
              className="bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
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
        <span className="text-xs">© {year} Sertranave. {t('footer_rights_reserved')}.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
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
