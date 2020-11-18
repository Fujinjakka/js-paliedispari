// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var parolaUtente = prompt("inserisci una parola");
console.log("parola utente: " + parolaUtente);

var parolaContrario = "";

for (var i = parolaUtente.length - 1; i >= 0; i--) {
  parolaContrario += parolaUtente[i];
}
console.log("parola al contrario: " + parolaContrario);


if (parolaUtente == parolaContrario) {
  alert("la parola è palindroma")
} else {
  alert("la parola NON è palindroma")
}
