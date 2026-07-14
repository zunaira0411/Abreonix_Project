import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf } from "react-icons/fa";
import "../../styles/exportpdf.css";

function ExportPDF() {
  const [loading, setLoading] = useState(false);

  const exportDashboard = async () => {
    try {
      setLoading(true);

      // Wait for charts/API rendering
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      const input = document.getElementById(
        "dashboard-content"
      );

      if (!input) {
        alert("Dashboard content not found!");
        setLoading(false);
        return;
      }

      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        scrollY: -window.scrollY,
      });

      const imgData = canvas.toDataURL(
        "image/png",
        1.0
      );

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth =
        pdf.internal.pageSize.getWidth();

      const pdfHeight =
        pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;

      const imgHeight =
        (canvas.height * imgWidth) /
        canvas.width;

      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight
        );

        heightLeft -= pdfHeight;
      }

      pdf.save("Smart-Inventory-Dashboard.pdf");
    } catch (error) {
      console.log(error);

      alert("Failed to export PDF!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="export-btn"
      onClick={exportDashboard}
      disabled={loading}
    >
      <FaFilePdf />

      {loading
        ? "Generating..."
        : "Export PDF"}
    </button>
  );
}

export default ExportPDF;