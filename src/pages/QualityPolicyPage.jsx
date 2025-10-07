import React from 'react';
import { useTranslation } from 'react-i18next';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { motion } from 'framer-motion';
import qualityPolicyPdfPt from '../assets/certificados/politica-de-qualidade.pdf';
import qualityPolicyPdfEn from '../assets/certificados/politica-de-qualidade-english.pdf';

// Use the same worker path as elsewhere in the app
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

export default function QualityPolicyPage() {
  const { t, i18n } = useTranslation();
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isCtrlPressed, setIsCtrlPressed] = React.useState(false);

  const pdfFile = i18n.language && i18n.language.toLowerCase().startsWith('en')
    ? qualityPolicyPdfEn
    : qualityPolicyPdfPt;

  // Memoize options to avoid unnecessary reloads and warnings
  const pdfOptions = React.useMemo(() => ({ cMapUrl: '/cmaps/', cMapPacked: true }), []);

  // Reset state whenever the file changes (e.g., language switch)
  React.useEffect(() => {
    setNumPages(null);
    setPageNumber(1);
  }, [pdfFile]);

  // Basic download/print/context-menu blocking
  React.useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'Control' || e.key === 'Meta') setIsCtrlPressed(true);
      // Block common shortcuts: Ctrl/Cmd+S, Ctrl/Cmd+P
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'p')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === 'Control' || e.key === 'Meta') setIsCtrlPressed(false);
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(1, prev - 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(numPages || 1, prev + 1));

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('quality_policy_title')}</h1>
        <p className="text-gray-600 mt-2">{t('quality_policy_description')}</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm select-none">
            <Document
              key={typeof pdfFile === 'string' ? pdfFile : 'quality-policy'}
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              renderMode="canvas"
              options={pdfOptions}
              loading={<div className="h-96 w-[calc(100vw-4rem)] max-w-[820px] grid place-items-center bg-gray-50 text-gray-500">{t('certificate_modal_loading')}</div>}
              error={<div className="h-96 w-[calc(100vw-4rem)] max-w-[820px] grid place-items-center bg-red-50 text-red-600">{t('certificate_modal_error')}</div>}
              onLoadError={() => {
                setNumPages(null);
                setPageNumber(1);
              }}
            >
              <Page
                pageNumber={pageNumber}
                width={Math.min(800, window.innerWidth - 80)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>

          {numPages && numPages > 1 && (
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="px-4 py-2 rounded bg-primary text-white disabled:bg-gray-300 disabled:text-gray-600"
              >
                {t('certificate_modal_previous')}
              </button>
              <span className="text-sm text-gray-600">
                {t('certificate_modal_page')} {pageNumber} {t('certificate_modal_of')} {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={numPages ? pageNumber >= numPages : true}
                className="px-4 py-2 rounded bg-primary text-white disabled:bg-gray-300 disabled:text-gray-600"
              >
                {t('certificate_modal_next')}
              </button>
            </div>
          )}

          <p className="text-xs text-gray-500 select-none">
            {t('certificate_modal_view_only')}
          </p>
        </div>
      </div>
    </motion.section>
  );
}


