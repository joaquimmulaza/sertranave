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
            className="w-full max-h-72 object-cover rounded mb-4 shadow"
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
        {(() => {
          const desc = t(services[active].description, { returnObjects: true });
          if (Array.isArray(desc)) {
            const [intro, ...items] = desc;
            return (
              <div className="text-gray-700 text-base">
                {intro ? <p className="mb-2">{intro}</p> : null}
                {items.length > 0 ? (
                  <ul className="list-disc pl-6 space-y-1">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          }
          return <p className="text-gray-700 text-base">{desc}</p>;
        })()}
      </div>
    </section>
  );
}


