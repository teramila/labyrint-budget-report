/**
 * Labyrint 2026 – checklist po akci (Google Apps Script)
 *
 * Použití:
 * 1) Vytvoř nový Google Sheet (nebo otevři existující prázdný).
 * 2) Rozšíření → Apps Script → smaž výchozí kód → vlož celý tento soubor.
 * 3) Ulož (disketa), v editoru vyber funkci setupLabyrintPostAkceChecklist a Spustit (▶).
 * 4) Při prvním běhu povol oprávnění v dialogu Googleu.
 *
 * Skript vytvoří list "Post-akce" s hlavičkou a řádky z pole CHECKLIST_ROWS.
 * Opakovaný běh: smaže obsah listu (kromě hlavičky řádku 1) a znovu vyplní řádky 2+ — odškrtnutí ve sloupci D tím ztratíš.
 *    → proto první běh po vytvoření listu, další úpravy raději v tabulce ručně, nebo si uprav skript.
 */

var SHEET_NAME = "Post-akce";

var HEADERS = [
  "Položka",
  "Odhad Kč",
  "Skutečnost Kč",
  "Hotovo",
  "Kdo",
  "Poznámka",
];

/** Řádky checklistu — uprav částky/ texty podle reality; odpovídá hrubě budgetu v reportu. */
var CHECKLIST_ROWS = [
  ["Honoráře / platby performerům (zbývající)", "", "", false, "", "Tabulka Performeři v reportu — kdo čeká / kolik"],
  ["Ubytování a cesty (odhady vs. skutečnost)", "", "", false, "", "Sloupce Ubytko, Cesta u jednotlivých vystoupení"],
  ["Zvuk + světla (doplatek / faktura)", "", "", false, "", "Fixní náklady v reportu"],
  ["Security", "", "", false, "", ""],
  ["Vestibul / interiér / doprava", "", "", false, "", ""],
  ["Pronájem Futureum", "", "", false, "", ""],
  ["WEB, reklamy (FB)", "", "", false, "", ""],
  ["SimpleShop poplatek (finál po uzavření)", "", "", false, "", "Byl odhad v reportu"],
  ["Půjčovné DJ set", "2057", "", false, "", "Vč. DPH dle budgetu"],
  ["Dovoz SofaAH", "3025", "", false, "", "Vč. DPH"],
  ["Catering (příjem na místě)", "", "", false, "", "Řádek v bilanci reportu"],
  ["Notino (sponzoring)", "", "", false, "", ""],
  ["Tržby stánkařů (až dorazí na účet)", "", "", false, "", "Zadej do bilance reportu jako další příjem, až bude v bance"],
  ["Daňový poradce", "6500", "", false, "", ""],
  ["Ostatní / drobné", "", "", false, "", ""],
];

function setupLabyrintPostAkceChecklist() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
  }
  sh.clear();
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  sh.setFrozenRows(1);

  var data = [];
  for (var i = 0; i < CHECKLIST_ROWS.length; i++) {
    var r = CHECKLIST_ROWS[i];
    var odhad = r[1] === "" ? "" : Number(r[1]);
    var skut = r[2] === "" ? "" : Number(r[2]);
    data.push([r[0], odhad, skut, r[3] === true, r[4], r[5]]);
  }
  if (data.length) {
    sh.getRange(2, 1, 1 + data.length, HEADERS.length).setValues(data);
  }
  sh.autoResizeColumns(1, HEADERS.length);
  try {
    SpreadsheetApp.getUi().alert("Hotovo: list „" + SHEET_NAME + "“ má " + CHECKLIST_ROWS.length + " řádků checklistu.");
  } catch (e) {
    Logger.log("Hotovo: " + CHECKLIST_ROWS.length + " řádků");
  }
}
