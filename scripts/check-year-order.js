const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "budget_report_labyrint.html");
const t = fs.readFileSync(htmlPath, "utf8");

const i26 = t.indexOf('section class="year-section y26"');
const i25 = t.indexOf('section class="year-section y25"');

if (i26 < 0 || i25 < 0) {
  console.error("Missing year sections in budget_report_labyrint.html");
  process.exit(2);
}

if (i26 > i25) {
  console.error("Year order invalid: expected 2026 (y26) before 2025 (y25).");
  process.exit(1);
}

console.log("OK: 2026 is before 2025.");

