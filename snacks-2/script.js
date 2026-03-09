// 8. Addizione e Sottrazione
// Crea due variabili per il prezzo di due articoli nel carrello.
// Calcola il totale in una nuova variabile.
let prezzo1 = 12;
let prezzo2 = 8;
let totprezzo = prezzo1 + prezzo2;
console.log(totprezzo)

// 9. Moltiplicazione e Divisione
// Hai una variabile con il numero totale di minuti di un video (es. 150).
// Calcola a quante ore corrispondono dividendoli per 60.
let totminutes = 150;
let ore = totminutes / 60;
console.log(ore+ " ore")

// 10. Moltiplicazione
// Definisci la paga oraria e le ore lavorate in una giornata.
// Calcola il compenso giornaliero totale.
let pagaOrararia = 15;
let oreLavorative = 8;
let pagaGiornaliera = pagaOrararia * oreLavorative;
console.log(pagaGiornaliera)

// 11. Potenza (Esponente)
// Definisci la lunghezza del lato di una stanza quadrata.
// Calcola la sua area in metri quadri elevando il lato alla seconda potenza usando l'operatore **.
let latoLunghezza = 5;
let areaMetri = latoLunghezza ** 2;
console.log("La sua area è "+ areaMetri)

// 12. Modulo (Resto della divisione - Casi pratici)
// Hai 42 utenti attivi e vuoi dividerli in stanze virtuali da 5 persone ciascuna.
// Usa l'operatore modulo (%) per scoprire quanti utenti rimarranno fuori dalle stanze complete.
let utentiAttivi = 42;
let utentiInattivi = utentiAttivi % 5;
console.log("Rimangon " + utentiInattivi + " utenti")

// 13. Espressioni composte e precedenza degli operatori
// Calcola la media matematica di tre ping di rete (es. 24, 32 e 18).
// Usa le parentesi per garantire che l'addizione avvenga prima della divisione.
let ping1 = 24;
let ping2 = 32;
let ping3 = 18;
let media = (ping1 + ping2 + ping3) / 3;
console.log("La media è " + media)