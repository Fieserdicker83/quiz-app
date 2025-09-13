# Quiz-App

Dieses Projekt ist eine interaktive Quiz-Anwendung zur Vorbereitung auf die AP1 für Fachinformatiker. Die App enthält über 30 Fragen pro Themengebiet aus 9 prüfungsrelevanten Bereichen. Nutzer können sich anmelden, ein Fachgebiet auswählen und ein Quiz absolvieren. Nach Abschluss erfolgt eine Auswertung und Weiterleitung auf eine Ergebnis-Seite.

## Themengebiete

- Projektmanagement
- Netzwerk
- IT-Grundlagen
- Betriebssysteme
- Datenschutz & IT-Sicherheit
- Programmierung
- Wirtschaft & Sozialkunde
- Hardware
- Softwareentwicklung

Jedes Themengebiet umfasst mindestens 30 Fragen, insgesamt sind über 270 Fragen enthalten.

## Dateien und Struktur

- **public/index.html**: Haupt-HTML-Seite der Anwendung mit der Quiz-Struktur.
- **public/styles.css**: CSS-Stile für das Layout und Design.
- **src/app.js**: Einstiegspunkt der Anwendung, steuert Quiz-Logik und Ablauf.
- **src/questions/**: Enthält je eine Datei pro Themengebiet, z.B.:
  - **projekt.js**: Fragen zu Projektmanagement
  - **netzwerk.js**: Fragen zu Netzwerk
  - **it.js**: Fragen zu IT-Grundlagen
  - **betriebssysteme.js**: Fragen zu Betriebssystemen
  - **datenschutz.js**: Fragen zu Datenschutz & IT-Sicherheit
  - **programmierung.js**: Fragen zu Programmierung
  - **wirtschaft.js**: Fragen zu Wirtschaft & Sozialkunde
  - **hardware.js**: Fragen zu Hardware
  - **softwareentwicklung.js**: Fragen zu Softwareentwicklung
- **src/utils/router.js**: Navigation und Routing zwischen den Seiten.
- **package.json**: npm-Konfiguration und Abhängigkeiten.

## Installation

1. Repository klonen:
   ```
   git clone <repository-url>
   ```
2. In das Projektverzeichnis wechseln:
   ```
   cd quiz-app
   ```
3. Abhängigkeiten installieren:
   ```
   npm install
   ```

## Nutzung

- Anwendung starten:
  ```
  npm start
  ```
- Im Browser `http://localhost:3000` öffnen und Quiz beginnen.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.