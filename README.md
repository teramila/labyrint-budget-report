# Labyrint – Budget Report

Publikovaný report na **GitHub Pages** (repo např. `teramila/labyrint-budget-report`):

- `index.html` → přesměrování na `budget_report_labyrint.html`

Soubory:

- `budget_report_labyrint.html` — interaktivní report (**rok 2026** nahoře, **rok 2025** pod tím); bilance a vyrovnání 2025 se počítají v **JavaScriptu** v prohlížeči.
- `budget_report_labyrint.md` — textová verze se stejným pořadím a čísly.
- **`UCET-poznamky.md`** — **poznámky k účtu** (úpravy z mobilu přes GitHub); podle nich se pak aktualizuje HTML na PC.

**Náhled:** soubor otevřený přímo přes raw view na github.com často **nespouští JavaScript** — uvidíš pomlčky místo dopočtů. Otevírej stránku přes Pages (`https://<user>.github.io/<repo>/budget_report_labyrint.html`).

**Cursor na mobilu:** stejná logika — stránku hostuj na Pages nebo otevři stažený HTML lokálně v prohlížeči, který JS nepřeskakuje.

**Zdroj dat (stav účtu 2026):** export CSV z banky; v reportu je uveden konkrétní soubor a filtr **zdrojový účet 2203369034**. Úplné CSV s více účty do veřejného repa obvykle **nepřidávej** (citlivá data); stačí odkaz nebo název souboru v README.

**Agent / hint:** při aktualizaci čísel z CSV zkontroluj kredity, záporné položky a rozpad po letech; sladit `b26_account`, `b26_paidFromAccount` a text bilance (ubytování v CSV vs. honorář z účtu).

## Pořadí roků (důležité)

V `budget_report_labyrint.html` musí být **ROK 2026 vždy nahoře** a **ROK 2025 vždy pod ním**.

- 2026 sekce: `<!-- ... ROK 2026 ... -->` + `<section class="year-section y26">`
- 2025 sekce: `<!-- ... ROK 2025 ... -->` + `<section class="year-section y25">`

Kontrola po úpravě:
- Otevři report a ověř, že se hned nahoře zobrazuje **ROK 2026**.
- Pokud by se pořadí omylem prohodilo, CI kontrola v repu změnu zastaví.
