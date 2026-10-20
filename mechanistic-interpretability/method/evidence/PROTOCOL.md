# Explorative Gegenüberstellung auf vorhandenen Gemma-Daten

Status: vom Nutzer freigegebene Offline-Auswertung; **nach Kenntnis des D1-Ergebnisses**. Dieses Dokument operationalisiert den im Chat abgestimmten Plan. Es ist keine Präregistrierung und keine neue Bestätigung. Keine Modell-Forwards, neue Daten, Signatur oder Änderung an D1.

## Fragen und fairer Vergleich

**A – sorgfältige Patchauswertung:** Was verändert der Austausch am festen Ort gegenüber dem nativen Empfänger, und wie verhält sich die Änderung zu den vier dosis-/normgleichen Störungen? A erhält dieselben Fälle, vollständigen vier Labelwahrscheinlichkeiten, Rohlogwahrscheinlichkeiten und Kontrollen wie B. Keine günstige Metrik, Rotation oder Empfängerzelle auswählen.

**B – Rivalenprüfung:** Welche der neun bereits eingefrorenen lokalen Profilklassen werden unter D1 ausgeschlossen, welche bleiben offen, und reicht dies für dessen vollständiges Entwicklungssignal? Der originale D1-Status bleibt maßgeblich.

**A + vollständige Bank:** Separat implementierte einfache Profilrechnung erhält dieselbe Bank, Hüllen und Entscheidungsregeln. Sie prüft sämtliche Familienverluste und zehn Entscheidungen gegen D1. Das ist eine rechnerische Gegenprüfung, kein unabhängiges statistisches Verfahren. Gleichheit zählt als Gleichstand; sie belegt keine algorithmische Überlegenheit von B. Nicht festgelegte Rivalen sind für A „nicht geprüft“, nicht „falsch beantwortet“.

Publizierte methodische Anker für A:

- Heimersheim & Nanda, *How to use and interpret activation patching*, insbesondere §§2.6, 3, 4: [Original](https://arxiv.org/html/2404.15255v1).
- Zhang & Nanda, *Towards Best Practices of Activation Patching in Language Models*, insbesondere §6: [Original](https://arxiv.org/html/2309.16042v2).

Übernommen werden explizite Patchrichtung, unveränderte Paarung, Logitdifferenzen, mehrere transparent berichtete Metriken, Kontrollen und begrenzte Interpretation. Unser Vier-Label-Readout, Familienbootstrap und die vorhandenen Störungskontrollen sind Aufgabenanpassungen. Dies ist **keine wortgetreue Replikation** dieser Arbeiten und kein Vergleich mit sämtlichen heutigen Mech-Interp-Verfahren. Ein Schichtenraster, Gegenrichtung, Attribution oder Circuit Tracing lassen sich aus diesem Archiv nicht vollständig ausführen. Auch andere Ansätze prüfen Hypothesen: [Causal Abstraction](https://jmlr.org/papers/v26/23-0058.html). Deshalb kein Anspruch, Rivalenprüfung sei außerhalb dieser Methodik grundsätzlich unbekannt.

## Daten und Einheiten

Gemma-3-4b-it, Revision `093f9f388b31de276ce2de164bdc2081324b9767`. Ein Ort: nach Textblock 17 (Index 16), letzte Promptposition, voller Residualvektor. D=10:32, R1=80:12, R2=80:96 (Standard:Wert in cm). Alle 20 D0/D1-Entwicklungsfamilien bleiben erhalten. Vier Rotationen und vier Störungen sind wiederholte Bedingungen, keine zusätzlichen unabhängigen Familien.

Roh-q und Labelmasse werden aus den archivierten Label-Logwahrscheinlichkeiten neu berechnet. Alle vier Labeltokens sind einzeln tokenisiert, daher sind paarweise Logwahrscheinlichkeitsdifferenzen zugleich Logitdifferenzen. Für Logitmetriken zuerst innerhalb jeder Rotation differenzieren, dann mitteln; für Profilmetriken zuerst q über Rotationen mitteln. Nicht Logarithmen der gemittelten q als Ersatz verwenden.

## A: Auswertung ohne neue Entscheidungsregel

- Alle sechs gerichteten Paare höheres minus niedrigeres Label: small–tiny, large–tiny, huge–tiny, large–small, huge–small, huge–large.
- Ordinaler Score mit Gewichten 0, 1/3, 2/3, 1; vollständige q-Profile und W1 auf derselben Skala.
- Für jeden Empfänger getrennt: active−native, jede noise−native, mittlere noise−native, active−mittlere noise und active−jede noise. W1-Abstände ergänzend. Gemeinsame Familienresamples bewahren alle Paarungen.
- 20.000 Bootstrap-Replikate, NumPy PCG64, Seed 20261015, zweiseitige 2,5-/97,5-Perzentile. Dies sind **approximative, deskriptive, nicht simultane 95%-Intervalle** über Familien. Sie erzeugen keine neue Bestätigungsentscheidung, Äquivalenzbehauptung oder Fehlerraten-Garantie. Alle Metriken bleiben sichtbar.
- Rohvergleich und Störvergleich direkt nebeneinander; keine Gegenüberstellung „signifikant / nicht signifikant“ als Test ihrer Differenz.
- Die registrierte D1-Störgröße ist etwas anderes: Minimum über vier Störungen des maximalen Empfänger-W1-Abstands. Sie ist weder der mittlere Störeffekt noch der signierte Unterschied dazu.
- Technische Kontrollen aus den versiegelten Prüfberichten übernehmen und ihre q-Folgen aus allen Records gegenrechnen. Kein erneuter NPZ-/Hook-Audit behaupten.

## B und A+Bank

S, P, C/K, V, M, U+, U−, R, H unverändert; insbesondere konservative Familienhüllen der globalen M/H-Parameter. W1 = Summe der drei absoluten CDF-Differenzen / 3; Verlust = Maximum über beide Empfänger. Alle Familien gehen ein; bei schwacher Familie X=0, sonst X=max(0,L−0,0001). Finale zehn Produkte Π(1/4+9X), Schwelle 200 mit originaler numerischer Marge; keine Präfixauswertung. G1/G2/G3 und Statuslogik unverändert. Offene Klassen sind nicht bestätigt; ausgeschlossene lokale Vorhersagen sind keine global ausgeschlossenen Mechanismen.

## Designgeschichte und zusätzliche Aussage

Abbildung 1 dokumentiert die tatsächlich erfolgten Designentscheidungen: beide Zwei-Donor-Preflights, das revidierte Einzeldonor-Menü, D0 und D1. „Vor dem Patch“ bedeutet nicht „ohne native Messkosten“. D0s einzige dateninformierte Gate-Revision wird sichtbar benannt. Es wird nicht behauptet, eine sorgfältige Vergleichsmethode hätte ungeeignete Designs zwangsläufig ausgeführt oder Wochen Arbeit verbraucht. Ein gleichwertiger Preflight zählt als Gleichstand.

Der Fall gleicher Donor-/Empfängerwerte ist eine **strukturelle Illustration**: bei sonst übereinstimmendem Kontext ist der native Standardtransferanker identisch mit dem Donorprompt; S und C/K sagen dasselbe voraus. Keine neue Messung oder Auswahl daraus.

Mehrwert zählt nur als zusätzliche belegte und korrekt begrenzte Aussage: explizite Trennbarkeit, Aliasgruppe, deklarierte lokale Ausschlüsse, offene Alternativen, begründete Enthaltung. Die Anzahl der Ausschlüsse allein ist kein Gütemaß. Ohne bekannten wahren Gemma-Mechanismus gibt es hier keinen Genauigkeitsvergleich mechanistischer Erklärungen. Die Designgeschichte ist keine prospektiv randomisierte Vergleichsstudie.

## Artefakte und Abschluss

Zwei Abbildungen (Designgeschichte; D1-Effekte/Profilklassen), vollständige Metriktabellen, Aussagentabelle, lesbarer Bericht, Analysecode und gezielte CPU-Tests. Neue Dateien ausschließlich in diesem Verzeichnis. Quellen-Hashes vor und nach der Analyse vergleichen. Fremde Änderungen, Originaldaten und D1 unberührt lassen; nur neue Dateien lokal committen. STOP.
