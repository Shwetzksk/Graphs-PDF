import { PDFDownloadLink } from "@react-pdf/renderer";
import ZoomviewPDFDocument from "./zoomview-document";
// import ZoomviewGraphRender from "./zoomview-graph-render";

function QuickDownloadLink() {
  return (
    <>
      {/* <ZoomviewGraphRender /> */}
      <PDFDownloadLink
        fileName="LineGraph.pdf"
        document={<ZoomviewPDFDocument />}
      >
        {({ loading, error }) => {
          return error
            ? "Error occured"
            : loading
            ? "Loading document..."
            : "Download now!";
        }}
      </PDFDownloadLink>
    </>
  );
}

export default QuickDownloadLink;
