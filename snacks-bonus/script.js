// 14. Metodi delle stringhe: Maiuscolo
// Crea una variabile con il tuo colore preferito scritto in minuscolo.
// Usa il metodo toUpperCase() per salvarlo tutto in maiuscolo in una nuova variabile.
let colore = "blu";
let stampa = colore.toUpperCase();
console.log(stampa)

// 15. Metodi delle stringhe: Pulizia degli spazi
// Simula un input utente disordinato creando una stringa con molti spazi all'inizio e alla fine.
// Usa il metodo trim() per ripulirla e salvarla in una nuova variabile.
let disordine = "     ciao mondo     ";
let pulisci = disordine.trim();
console.log(pulisci)

// 16. Metodi dei numeri: Gestione dei decimali
// Calcola il prezzo finale di un prodotto aggiungendo una tassa del 22% (es. 45 * 1.22).
// Usa il metodo toFixed(2) per formattare il risultato limitandolo a due cifre decimali.
let prezzoProdotto = 45;
let totPrezzo = (prezzoProdotto * 1.22).toFixed(2);
console.log(totPrezzo)

// 17. Conversione di tipo: Da Numero a Stringa
// Crea una variabile numerica con il cap di una città o un anno.
// Trasformala esplicitamente in una stringa di testo utilizzando il metodo toString().
let anno = 2026;
let annoStringa = anno.toString();
console.log(annoStringa)

// 18. Metodi delle stringhe: Sostituzione testuale
// Crea una variabile contenente la frase "Stato del server: offline".
// Usa il metodo replace() per sostituire la parola "offline" con "online" in una nuova variabile.
let server = "Stato del server: offline";
let update = server.replace("offline", "online");
console.log(update)

// 19. Template literal
// Crea 3 variabili: nome, cognome e eta
// Crea una variabile saluto che contiene una stringa tipo "Ciao, il mio nome è Gino Panino, ho 20 anni"
// Usa il template literal
let nome = "Stan";
let cognome = "Panino";
let eta = 24;
let saluto = `Ciao, il mio nome è ${nome} ${cognome}, ho ${eta} anni`;
console.log(saluto)