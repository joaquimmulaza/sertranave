import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ship, Landmark, PackageSearch, LifeBuoy, Plane } from 'lucide-react';

const iconMap = {
  Ship: <Ship size={32} className="text-primary" />,
  Landmark: <Landmark size={32} className="text-primary" />,
  PackageSearch: <PackageSearch size={32} className="text-primary" />,
  LifeBuoy: <LifeBuoy size={32} className="text-primary" />,
  Plane: <Plane size={32} className="text-primary" />,
};

export default function ServicesSection({ services }) {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {services.map(service => (
        <div key={service.id} className="flex items-center gap-4 bg-white rounded shadow p-6 hover:shadow-lg transition-shadow">
          <div className="flex-shrink-0">
            {iconMap[service.iconName] || <Ship size={32} className="text-primary" />}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{t(service.title)}</h3>
            {(() => {
              const desc = t(service.description, { returnObjects: true });
              if (Array.isArray(desc)) {
                const [intro, ...items] = desc;
                return (
                  <div className="text-gray-600 text-sm">
                    {intro ? <p className="mb-2">{intro}</p> : null}
                    {items.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              }
              return <p className="text-gray-600 text-sm">{desc}</p>;
            })()}
          </div>
        </div>
      ))}
    </section>
  );
}
