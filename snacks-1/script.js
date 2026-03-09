// 1. Variabili, const/let e convenzione camelCase
// Crea una costante per l'anno di nascita e una variabile riassegnabile per l'età.
// Ricorda di usare la convenzione camelCase per i nomi composti.
const dataNascita = 2002;
let eta = 24;
console.log(eta, dataNascita)

// 2. Case sensitivity
// Crea due variabili, una chiamata 'status' con valore "attivo" e una chiamata 'Status' con valore "sospeso".
let status = "attivo";
let Status = "sospeso";
console.log(Status)
console.log(status)


// 3. Tipizzazione debole (Loosely typed)
// Crea una variabile chiamata 'tempValue' e assegnale il numero 100.
// Nella riga successiva, cambia il suo valore in una stringa di testo.
let tempValue = 100;
tempValue = "" + tempValue ;
console.log(tempValue)


// 4. Tipi di dato base (Null e Undefined)
// Crea una variabile per rappresentare un dato intenzionalmente vuoto.
// Crea un'altra variabile dichiarandola ma lasciandola senza valore (undefined).
//let vuoto = null;
//let undefined;



// 5. Concatenazione moderna (Template Literals)
// Crea due variabili per nome e corso.
// Poi crea una terza variabile che le unisca in una frase usando i backtick.
let nome = "Roberto";
let corso = "Python";
let insieme = `Ciao, mi chiamo ${nome} e mi piace il corso sul ${corso}.`;
console.log(insieme)


// 6. Operazioni matematiche (Espressioni e Modulo)
// Crea una variabile 'totalItems' con valore 15.
// Crea un'altra variabile 'isOdd' che salvi il resto della divisione di totalItems per 2.
let totalItems = 15;
let isOdd = totalItems % 2;
console.log(isOdd)

// 7. Proprietà dei dati (Notazione a punto)
// Crea una variabile stringa con una password fittizia.
// Salva in una nuova costante il numero di caratteri di quella password sfruttando la sua proprietà nativa.
let password = "password";
const passwordLength = password.length;
console.log(passwordLength)