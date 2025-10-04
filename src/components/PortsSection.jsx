import React, { useState } from 'react';

export default function PortsSection({ ports }) {
  const [active, setActive] = useState(0);

  return (
    <section className="flex flex-col md:flex-row gap-6 my-8 bg-gray-50 rounded shadow p-4">
      {/* Vertical Nav */}
      <nav className="flex md:flex-col gap-2 md:w-64 w-full">
        {ports.map((port, idx) => (
          <button
            key={port.id}
            className={`flex items-center gap-3 px-4 py-3 rounded text-left font-semibold transition-colors w-full ${active === idx ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary/10'}`}
            onClick={() => setActive(idx)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-primary"><path d="M3 21h18M4 17l8-7 8 7M4 17V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/></svg>
            {port.name}
          </button>
        ))}
      </nav>
      {/* Port Details */}
      <div className="flex-1 flex flex-col items-start">
        <img
          src={ports[active].imagePath}
          alt={ports[active].name}
          className="w-full max-h-64 object-cover rounded mb-4 shadow"
        />
        <h3 className="text-xl font-bold mb-2">{ports[active].name}</h3>
        <p className="text-gray-700 text-base">{ports[active].description}</p>
      </div>
    </section>
  );
}
