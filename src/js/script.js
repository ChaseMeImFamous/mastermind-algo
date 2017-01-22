$(document).ready(function () {
  var numberTries = 12;
  var colors = ['brown', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var randomCode = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];
  for (j = 1; j < numberTries; j++) { // Boucle pour faire apparaitre les lignes
    $('#game').append('<div class="row-' + j + '"><div class="guess-1"></div><div class="guess-2"></div><div class="guess-3"></div><div class="guess-4"></div><div class="ans-1"></div><div class="ans-2"></div><div class="ans-3"></div><div class="ans-4"></div><input type="submit" value="OK?" class="check"></div>');
  }
  for (i = 0; i < colors.length; i++) { // Boucle pour faire apparaitre les couleurs
    var colorsDiv = '<div class="' + colors[i] + '"></div>';
    $('#colors').append(colorsDiv);
  }
  console.log(colorsDiv);
  console.log(randomCode);

  function VerifyTest() { // Test de vérification au click du (OK?)

    console.log('Hello World!');
  }
  $(".brown").click(function () { // Test de click pour faire apparaitre le premier (OK?)
    $(".row-1 .check").css("visibility", "visible");
  });
});


var answer = ['brown', 'black', 'red', 'orange'];//Réponse
var guess = ['yellow', 'black', 'red', 'orange'];//Notre essai
var tries = 2; //Nombre d'essais
var tmp = 0; //Compteur nombre de couleurs bien placées
var tempo = 0; // Compteur nombre de couleurs présente mais mal placées

var checkup = document.querySelector('.test')

checkup.addEventListener('click', function () {

  for (x = 0; x < answer.length; x++) {
    if (guess[x] == answer[x]) { //Si les couleurs sont les mêmes
      tmp += 1; // +1
    } else
    if (answer.indexOf(guess[x]) != -1) {
      tempo += 1; // Sinon, -1
    }
  }
  if (tries == 0) { // Si essai = 0, perdu
    window.alert("Perdu");
  } else
  if (tmp == guess.length) {
    window.alert("Victoire"); // Si le compteur nombre de couleurs bien placées = à la longueur du tableau, WIN
  } else {
    tries -= 1; // Sinon, essai -1
    window.alert("Vous avez " + tmp + " bonnes couleurs bien placées"); //Annonce des compteurs
    window.alert("Vous avez " + tempo + " couleurs mal placées");//Same
  }
  tmp = 0; //Reinitialisation
  tempo =0;//Same
});