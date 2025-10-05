import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Ship, LifeBuoy, Package, Anchor } from 'lucide-react';

function getServiceIconComponent(titleKey) {
  switch (titleKey) {
    case 'service_shipping_agency_title':
      return Ship;
    case 'service_customs_clearance_title': // Husbandry
      return LifeBuoy;
    case 'service_transport_logistics_title': // Import/Export
      return Package;
    case 'service_port_consulting_title': // Cabotage
      return Anchor;
    default:
      return Ship;
  }
}

export default function ServicesSectionV2({ services }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <section className="flex flex-col md:flex-row gap-6 my-8 bg-gray-50 rounded shadow p-4">
      {/* Vertical Nav */}
      <nav className="flex md:flex-col gap-2 md:w-64 w-full">
        {services.map((service, idx) => (
          <button
            key={service.id}
            className={`flex items-center gap-3 px-4 py-3 rounded text-left font-semibold transition-colors w-full ${active === idx ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-primary/10'}`}
            onClick={() => setActive(idx)}
          >
            {(() => {
              const IconComp = getServiceIconComponent(service.title);
              const iconClass = active === idx ? 'text-white' : 'text-primary';
              return <IconComp size={24} className={iconClass} />;
            })()}
            {t(service.title)}
          </button>
        ))}
      </nav>

      {/* Service Details */}
      <div className="flex-1 flex flex-col items-start">
        {services[active].imagePath ? (
          <img
            src={services[active].imagePath}
            alt={t(services[active].title)}
            className="w-full max-h-64 object-cover rounded mb-4 shadow"
            style={{ objectPosition: services[active].imageObjectPosition || 'center' }}
          />
        ) : null}
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          {(() => {
            const IconComp = getServiceIconComponent(services[active].title);
            return <IconComp size={24} className="text-primary" />;
          })()}
          {t(services[active].title)}
        </h3>
        <p className="text-gray-700 text-base">{t(services[active].description)}</p>
      </div>
    </section>
  );
}


