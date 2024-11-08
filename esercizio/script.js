const nomeCognome = document.getElementById("nomeCognome")
const etàInput = document.getElementById("età")
const distanzaInput = document.getElementById("distanza")
const calcolatoreBtn = document.getElementById("calcolatoreBtn")
const prezzoFinaleElem = document.getElementById("prezzoFinale");

calcolatoreBtn.addEventListener("click", function () {
const età = parseInt(etàInput.value);
const distanza = parseFloat(distanzaInput.value);
const prezzoKm = 0.21;

let prezzoFinale = distanza * prezzoKm;

if (età < 18) {
    prezzoFinale *= 0.8;
} else if (età >= 65) {
    prezzoFinale *= 0.6;
}
console.log("Il prezzo del biglietto è: €" + prezzoFinale.toFixed(2))
prezzoFinaleElem.innerText = `€ ${prezzoFinale.toFixed(2)}`;
})
