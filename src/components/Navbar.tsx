import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import LanguageSelector from './LanguageSelector.jsx';
import { Menu, X } from 'lucide-react';
import { Dialog } from './ui/dialog.jsx';
import { Input } from './ui/input.jsx';
import { Button } from './ui/button';

const navLinks = [
  { name: 'navbar_home', to: '/', isScrollLink: false },
  { name: 'navbar_about', to: '/quem-somos', isScrollLink: false },
  { name: 'navbar_services', to: 'services', isScrollLink: true },
  { name: 'navbar_ports', to: 'ports', isScrollLink: true },
  { name: 'navbar_contact', to: '/contactos', isScrollLink: false },
  { name: 'navbar_quality_policy', to: '/politica-de-qualidade', isScrollLink: false },
];

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.id]: e.target.value });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDialogOpen(false);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 shadow-md transition-colors duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-md' : 'bg-primary'}`}
    >
      
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto text-white flex items-center justify-between px-4 py-6 relative">
        <a href="/" className="flex logo items-center gap-2 text-4xl font-stardos-stencil">
          SERTRANAVE
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              {location.pathname === '/' && link.isScrollLink ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="cursor-pointer hover:underline underline-offset-4 transition-colors"
                  activeClass="underline"
                >
                  {t(link.name)}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={link.isScrollLink ? `/#${link.to}` : link.to}
                  className="hover:underline underline-offset-4 transition-colors"
                >
                  {t(link.name)}
                </RouterLink>
              )}
            </li>
          ))}
          <li>
            <button
              className="ml-4 px-4 py-2 rounded bg-white text-primary font-semibold hover:bg-gray-100 transition-colors border border-primary"
              onClick={() => setDialogOpen(true)}
            >
              {t('quote_button')}
            </button>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary text-white flex flex-col items-center py-4 z-20 md:hidden shadow-lg animate-in fade-in">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2 w-full text-center hover:bg-blue-900 transition-colors">
                {location.pathname === '/' && link.isScrollLink ? (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    activeClass="text-secondary"
                  >
                    {t(link.name)}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={link.isScrollLink ? `/#${link.to}` : link.to}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(link.name)}
                  </RouterLink>
                )}
              </div>
            ))}
            <button
              className="mt-2 px-4 py-2 rounded bg-white text-primary font-semibold hover:bg-primary/10 transition-colors border border-primary"
              onClick={() => { setDialogOpen(true); setMenuOpen(false); }}
            >
              {t('quote_button')}
            </button>
          </div>
        )}
      </div>
      {/* Dialog for Cotação */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <h2 className="text-xl font-bold mb-4 text-primary">{t('quote_title')}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            id="name"
            placeholder={t('form_name')}
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            id="email"
            type="email"
            placeholder={t('form_email')}
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            id="phone"
            placeholder={t('form_phone')}
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            id="message"
            placeholder={t('form_message')}
            value={form.message}
            onChange={handleChange}
            className="block w-full rounded border border-gray-300 px-3 py-2 text-base focus:border-primary focus:ring-primary focus:outline-none focus:ring-1 min-h-[80px]"
          />
          <Button type="submit" className="w-full">{t('form_submit')}</Button>
        </form>
      </Dialog>
    </nav>
  );
}