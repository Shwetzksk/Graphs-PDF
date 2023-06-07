import { useState } from "react";
import * as Graphs from "../features/chartjs-graph/pdf-graph";
import ViewPDFModal from "../features/pdf/view-pdf";
import PDFDownloadLink from "../features/pdf/downloadPDF-link";
import { Button } from "@mui/material";
import ZoomviewGraphRender from "../features/pdf/zoomview-graph-render";

export default function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section>
      <ViewPDFModal open={showPdf} onClose={() => setShowPdf(false)} />
      <div className="flex justify-end gap-3 mx-3 my-4">
        <Button
          size="small"
          variant="contained"
          className="border-0 px-3 py-1 bg-fuchsia-800 text-white"
          onClick={() => {
            setShowPdf((state) => !state);
          }}
        >
          View PDF
        </Button>
        <Button variant="outlined" size="small">
          <PDFDownloadLink />
        </Button>
      </div>

      {/* <ZoomviewGraphRender opacity={0} /> */}
    </section>
  );
}
