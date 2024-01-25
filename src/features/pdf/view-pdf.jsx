/* eslint-disable react/prop-types */
import { Dialog, Modal } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import ZoomviewPDFDocument from "./zoomview-document";
import ZoomviewGraphRender from "./zoomview-graph-render";
import { useEffect, useState } from "react";

function ViewPDF({ open, onClose }) {
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPDF(true);
    }, 6000);
  }, []);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <section className="w-full h-screen mt-4 relative">
        <div className="bg-slate-950/70 text-white px-4 py-3 text-lg w-fit absolute top-56  left-1/2 -translate-x-1/2 z-10">
          Generating PDF...
        </div>
        {Boolean(showPDF) && (
          <main className="absolute w-11/12 h-screen z-50 top-0 left-1/2 -translate-x-1/2  py-5 px-3">
            <PDFViewer className="w-11/12 h-full mx-auto">
              <ZoomviewPDFDocument />
            </PDFViewer>
          </main>
        )}
        {Boolean(open) && <ZoomviewGraphRender opacity={0} />}
      </section>
      {/* <section className="absolute top-0 w-full h-3 overflow-y-auto opacity-0"></section> */}
    </Dialog>
  );
}

export default ViewPDF;
