import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const cardHover = {
  hover: { scale: 1.02 }
};

export default function VisionMissionValues() {
  const { t } = useTranslation();

  const items = [
    {
      title: t('vmv.vision_title'),
      description: t('vmv.vision_description'),
      Icon: Eye
    },
    {
      title: t('vmv.mission_title'),
      description: t('vmv.mission_description'),
      Icon: Target
    },
    {
      title: t('vmv.values_title'),
      description: t('vmv.values_description', { returnObjects: true }),
      Icon: Heart
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {items.map(({ title, description, Icon }, idx) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover="hover"
              className="rounded-lg border border-gray-200 bg-white shadow hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                variants={cardHover}
                className="p-6 md:p-7 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                {Array.isArray(description) ? (
                  <ul className="text-gray-600 leading-relaxed text-sm md:text-base list-disc pl-5 space-y-1">
                    {description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


