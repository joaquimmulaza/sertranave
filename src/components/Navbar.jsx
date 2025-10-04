import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/images/sertranave.png';
import { Dialog } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Quem Somos', href: '/quem-somos' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Portos', href: '/portos' },
  { name: 'Contactos', href: '/contactos' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email)
    setDialogOpen(false);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <nav className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm flex justify-between items-center px-4 py-1">
        <div className="flex items-center gap-4">
          <Phone size={16} className="inline-block mr-1" /> +244 922617263
          <Mail size={16} className="inline-block ml-4 mr-1" /> info@sertranave.co.ao
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </div>
      </div>
      {/* Main Bar */}
      <div className="bg-primary text-white flex items-center justify-between px-4 py-2 relative">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Sertranave Logo" className="h-10 w-auto" />
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:underline underline-offset-4 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              className="ml-4 px-4 py-2 rounded bg-white text-primary font-semibold hover:bg-primary/10 transition-colors border border-primary"
              onClick={() => setDialogOpen(true)}
            >
              PEÇA UMA COTAÇÃO
            </button>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary text-white flex flex-col items-center py-4 z-20 md:hidden shadow-lg animate-in fade-in">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 w-full text-center hover:bg-blue-900 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="mt-2 px-4 py-2 rounded bg-white text-primary font-semibold hover:bg-primary/10 transition-colors border border-primary"
              onClick={() => { setDialogOpen(true); setMenuOpen(false); }}
            >
              PEÇA UMA COTAÇÃO
            </button>
          </div>
        )}
      </div>
      {/* Dialog for Cotação */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <h2 className="text-xl font-bold mb-4 text-primary">Peça uma Cotação</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            placeholder="Telefone"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={form.message}
            onChange={handleChange}
            className="block w-full rounded border border-gray-300 px-3 py-2 text-base focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 min-h-[80px]"
            required
          />
          <Button type="submit" className="w-full">Enviar</Button>
        </form>
      </Dialog>
    </nav>
  );
}
