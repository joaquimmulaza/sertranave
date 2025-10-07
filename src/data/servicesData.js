// src/data/servicesData.js
import imgAgenciamento from '../assets/images/agente-maritimo.jpg';
import imgAduaneiro from '../assets/images/service-aduaneiro.jpg';
import imgLogistica from '../assets/images/service-logistica.jpg';
import imgConsultoria from '../assets/images/service-consultoria.jpg';

export default [
  {
    id: 1,
    title: 'service_shipping_agency_title',
    description: 'service_shipping_agency_description',
    iconName: 'Ship',
    imagePath: imgAgenciamento,
    imageObjectPosition: 'center 30%'
  },
  {
    id: 2,
    title: 'service_customs_clearance_title',
    description: 'service_customs_clearance_description',
    iconName: 'PackageSearch',
    imagePath: imgAduaneiro,
    imageObjectPosition: 'center 30%'
  },
  {
    id: 3,
    title: 'service_transport_logistics_title',
    description: 'service_transport_logistics_description',
    iconName: 'Truck',
    imagePath: imgLogistica,
    imageObjectPosition: 'center 35%'
  },
  {
    id: 4,
    title: 'service_port_consulting_title',
    description: 'service_port_consulting_description',
    iconName: 'ClipboardList',
    imagePath: imgConsultoria,
    imageObjectPosition: 'center 59%'
  },
];
