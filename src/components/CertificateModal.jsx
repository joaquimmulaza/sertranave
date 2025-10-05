import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Configurar worker do PDF.js com a versão correta
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

// Verificar se o worker está configurado corretamente
console.log('PDF.js version:', pdfjs.version);
console.log('PDF.js worker configured:', pdfjs.GlobalWorkerOptions.workerSrc);

const CertificateModal = ({ isOpen, onClose, certificateType }) => {
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const certificateFiles = {
    tuv: '/certificados/certificado-tuv.pdf',
    anpg: '/certificados/certificado-anpg.pdf'
  };

  const certificateNames = {
    tuv: 'TÜV Rheinland Certificate',
    anpg: 'ANPG Certificate'
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
    setError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
    setLoading(false);
    setError(true);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  // Reset states when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(false);
      setPageNumber(1);
      setNumPages(null);
    }
  }, [isOpen, certificateType]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {certificateNames[certificateType]}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* PDF Viewer */}
                <div className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                      <Document
                        file={certificateFiles[certificateType]}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={
                          <div className="flex items-center justify-center h-96 w-full bg-gray-100">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                          </div>
                        }
                        error={
                          <div className="flex items-center justify-center h-96 w-full bg-red-50 text-red-600">
                            {t('certificate_modal_error')}
                          </div>
                        }
                      >
                        <Page
                          pageNumber={pageNumber}
                          width={Math.min(800, window.innerWidth - 100)}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </Document>
                    </div>

                    {/* Navigation Controls */}
                    {numPages > 1 && (
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={goToPrevPage}
                          disabled={pageNumber <= 1}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                          {t('certificate_modal_previous')}
                        </button>
                        <span className="text-sm text-gray-600">
                          {t('certificate_modal_page')} {pageNumber} {t('certificate_modal_of')} {numPages}
                        </span>
                        <button
                          onClick={goToNextPage}
                          disabled={pageNumber >= numPages}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                          {t('certificate_modal_next')}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    {t('certificate_modal_view_only')}
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CertificateModal;
