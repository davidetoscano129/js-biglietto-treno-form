const nomeInput = document.getElementById("nome");
const etàInput = document.getElementById("età");
const distanzaInput = document.getElementById("distanza");
const calcolatoreBtn = document.getElementById("calcolatoreBtn"); 
const prezzoFinaleElem = document.getElementById("prezzoFinale");

const nomePasseggeroElem = document.getElementById("nomePasseggero");
const offertaElem = document.getElementById("offerta");
const carrozzaElem = document.getElementById("carrozza");
const codiceCPElem = document.getElementById("codiceCP");
const costoBigliettoElem = document.getElementById("costoBiglietto");

calcolatoreBtn.addEventListener("click", function () {
    const nome = nomeInput.value.trim();
    const età = parseInt(etàInput.value);
    const distanza = parseFloat(distanzaInput.value);
    const prezzoKm = 0.21;

    let prezzoFinale = distanza * prezzoKm;

    let offerta = "Biglietto Standard";
    if (età < 18) {
        prezzoFinale *= 0.8;
        offerta = "Sconto Minorenne";
    } else if (età >= 65) {
        prezzoFinale *= 0.6;
        offerta = "Sconto Over 65";
    }
    console.log("Il prezzo del biglietto è: €" + prezzoFinale.toFixed(2));
    prezzoFinaleElem.innerText = `€ ${prezzoFinale.toFixed(2)}`;

    const carrozza = Math.floor(Math.random() * 10) + 1; 
    const codiceCP = Math.floor(Math.random() * 90000) + 10000; 

    nomePasseggeroElem.innerText = nome || "Nome Cognome";
    offertaElem.innerText = offerta;
    carrozzaElem.innerText = carrozza;
    codiceCPElem.innerText = codiceCP;
    costoBigliettoElem.innerText = `€ ${prezzoFinale.toFixed(2)}`;
});