// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var pariOdispari = prompt("Scegli fra pari o dispari");
console.log("Scelta utente: " + pariOdispari);

var numeroUtente = parseInt(prompt("Inserisci un numero fra 1 e 5"));
console.log("Numero utente: " + numeroUtente);

var numeroPc = Math.floor(Math.random() * (6 - 1) ) + 1;
console.log("Numero Pc: " + numeroPc);

var somma = numeroUtente + numeroPc;
console.log("Somma dei 2 numeri: " + somma);

var pari = (somma % 2)
console.log(pari);


if (pari == 0) {
  console.log("La somma è pari!");
} else {
  console.log("La somma è dispari!");
}

if ((pari == 0) && (pariOdispari == "pari")) {
  console.log("il giocatore vince!");
} else if ((pari == 1) && (pariOdispari == "dispari")) {
  console.log("il giocatore vince!");
} else {
  console.log("il Pc Vince!");
}
