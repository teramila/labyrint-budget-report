# Labyrint – Budget Report

Publikovaný report na **GitHub Pages** (repo např. `teramila/labyrint-budget-report`):

- `index.html` → rozcestník: odkaz na hlavní report a na **`post_akce_2026.html`**.

Soubory:

- `budget_report_labyrint.html` — interaktivní report (**rok 2026** nahoře, **rok 2025** pod tím); bilance a vyrovnání 2025 se počítají v **JavaScriptu** v prohlížeči.
- **`post_akce_2026.html`** — krátká stránka po akci: odkazy na report a na **Google Sheet** (URL v HTML si nahraď za svůj sdílený sheet).
- `budget_report_labyrint.md` — textová verze se stejným pořadím a čísly.
- **`UCET-poznamky.md`** — **poznámky k účtu** (úpravy z mobilu přes GitHub); podle nich se pak aktualizuje HTML na PC.

**Náhled:** soubor otevřený přímo přes raw view na github.com často **nespouští JavaScript** — uvidíš pomlčky místo dopočtů. Otevírej stránku přes Pages (`https://<user>.github.io/<repo>/budget_report_labyrint.html`).

**Cursor na mobilu:** stejná logika — stránku hostuj na Pages nebo otevři stažený HTML lokálně v prohlížeči, který JS nepřeskakuje.

**Zdroj dat (stav účtu 2026):** export CSV z banky; v reportu je uveden konkrétní soubor a filtr **zdrojový účet 2203369034**. Úplné CSV s více účty do veřejného repa obvykle **nepřidávej** (citlivá data); stačí odkaz nebo název souboru v README.

**Agent / hint:** při aktualizaci čísel z CSV zkontroluj kredity, záporné položky a rozpad po letech; sladit `b26_account`, `b26_paidFromAccount` a text bilance (ubytování v CSV vs. honorář z účtu).

## Checklist po akci (Google Sheet + Apps Script)

Soubor **`scripts/labyrint_postakce_checklist.gs`** je šablona pro **Google Apps Script** — nevkládá se do GitHub Actions, ale do editoru skriptů u Google Sheetu.

1. Vytvoř nový **Google Sheet** (nebo otevři prázdný existující).
2. **Rozšíření → Apps Script** → smaž výchozí kód → vlož obsah souboru `labyrint_postakce_checklist.gs` z tohoto repa.
3. Ulož projekt (ikona disku), v horní liště vyber funkci **`setupLabyrintPostAkceChecklist`** a **Spustit** (▶).
4. Při prvním běhu potvrď **oprávnění** v dialogu Googleu.
5. Skript vytvoří list **„Post-akce“** s hlavičkou a řádky checklistu. Pak sheet **nasdílej** s kolegy (právo upravovat / komentovat dle potřeby).
6. Odkaz na tabulku **vlož** do `post_akce_2026.html` (druhé tlačítko — nahraď `href` placeholderu reálnou URL).

**Poznámka:** opakované spuštění funkce **přepíše řádky 2+** v listu — odškrtnutí ve sloupci „Hotovo“ tím přijdeš. Po prvním vygenerování checklist raději upravuj přímo v tabulce, nebo si uprav pole `CHECKLIST_ROWS` ve skriptu a spusť znovu jen když chceš znovu založit strukturu.

## Pořadí roků (důležité)

V `budget_report_labyrint.html` musí být **ROK 2026 vždy nahoře** a **ROK 2025 vždy pod ním**.

- 2026 sekce: `<!-- ... ROK 2026 ... -->` + `<section class="year-section y26">`
- 2025 sekce: `<!-- ... ROK 2025 ... -->` + `<section class="year-section y25">`

Kontrola po úpravě:
- Otevři report a ověř, že se hned nahoře zobrazuje **ROK 2026**.
- Pokud by se pořadí omylem prohodilo, CI kontrola v repu změnu zastaví.
