var listaNumeriCasuali = [];
var listaNumeriPrompt = [];
var numeroCasuale;
var numeroPrompt;

  for (var i = 0; i < 5; i++) {
    numeroCasuale = genNumeriCasuali(1, 900);
    console.log(numeroCasuale);
    listaNumeriCasuali.push(numeroCasuale);
  }
  console.log(listaNumeriCasuali);
  alert("Cerca di memorizzare questi cinque numeri: " + listaNumeriCasuali);


  setTimeout(function() {
    for (var i = 0; i < 5; i++) {
      numeroPrompt = parseInt(prompt("inserisci i numeri che ricordi"));
      for (var f = 0; f < listaNumeriCasuali.length; f++) {
        if (numeroPrompt == listaNumeriCasuali[f]) {
          listaNumeriPrompt.push(numeroPrompt);
        }
      }

    }
    alert("Hai indovinato " + listaNumeriPrompt.length + " numeri. Esattamente i numeri: " + listaNumeriPrompt)
    console.log(listaNumeriPrompt)
  }, 30000)



function genNumeriCasuali(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}