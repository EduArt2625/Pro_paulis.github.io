// Botón para abrir el input file
document.getElementById("uploadBtn").addEventListener("click", () => {
  document.getElementById("fileInput").click();
});

// Mostrar vista previa
document.getElementById("fileInput").addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById("preview");
      preview.src = e.target.result;
      preview.style.display = "block";
      document.getElementById("analyzeBtn").disabled = false;
    };
    reader.readAsDataURL(file);
  }
});

// Simulación análisis
document.getElementById("analyzeBtn").addEventListener("click", () => {
  const progressBar = document.getElementById("progress");
  const progressContainer = document.getElementById("progressContainer");
  progressContainer.style.display = "block";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      generarPDF();
    }
  }, 400);
});

// Generar PDF
function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Informe Diagnóstico - NeoDerma", 20, 30);
  doc.setFontSize(12);
  doc.text("Este es un informe de diagnóstico simulado.", 20, 50);
  doc.text("Resultado: Lesión benigna - Sin riesgo.", 20, 70);
  doc.text("Se recomienda acudir a un dermatólogo para una evaluación más detallada.", 20, 90);

  doc.save("informe_diagnostico.pdf");
}
