Aufgabe:
- [ ] Erstelle einen neuen Branch 'demo-20240812'
- [ ] Definiere eine neue URL 'agGridDemo' die eine Komponenten 'ag-grid-page' im 'pages' Ordner aufruft.
- [ ] Erstelle in der Komponente 'ag-grid-page' eine Tabelle mit AG-Grid.
    - [ ] Erstelle einen Service 'grid.service' im Ordner 'shared/services', der die Daten von folgenden Endpunkt konsumiert und der Tabelle zur Verfügung gestellt: https://www.ag-grid.com/example-assets/space-mission-data.json
    - [ ] Die Tabelle soll dabei folgende Spalten darstellen:
        - Mission (string) - Filterbar
        - Company (string) - Filterbar
        - Location (string) - Filterbar
        - Date (string)
        - Time (string)
        - Rocket (string)
        - Price (number) - Sortierbar
        - Successful (boolean) - Filterbar
    - [ ] verwende als Themeclass 'ag-theme-quartz-dark'



Offene Fragen:
- Routes: Was bedeuted Lazy Loading: Vorteile, wann sollte man es einsetzten?
- Angular Lifecycle
- AG-Grid Lifecycle
- Angular Data-Binding (Besonderheiten Signals)

- Optimierung an der Tabelle
    - [ ] Pagination
    - [ ] valueFormatter --> Formatiere Datum nach Locale (Angular Default)
    - [ ] CustomCellComponents --> Bild https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fde%2Fsymbol%2FM%25C3%25BCnze-Dollar%2F115160&psig=AOvVaw0fHK6ULxtvBlJ6y9Ygjxv7&ust=1723533927914000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjUqq_27ocDFQAAAAAdAAAAABAJ nach dem Price (Zahl) einfügen.


Link bzw. Beispiel: https://www.ag-grid.com/angular-data-grid/deep-dive/#configure-the-grid


// TODO Themeclass und provideHttpClient hinzugfügen