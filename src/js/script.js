$(document).ready(function () {
    var numberTries = 12;
    var colors = ['brown', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var randomCode = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];
    for (j = 1; j < numberTries; j++) { // Boucle pour faire apparaitre les lignes
        $('#game').append('<div class="row-' + j + '"><div class="guess-1"></div><div class="guess-2"></div><div class="guess-3"></div><div class="guess-4"></div><div class="ans-1"></div><div class="ans-2"></div><div class="ans-3"></div><div class="ans-4"></div><input type="submit" value="OK?" class="check" onclick="VerifyTest();"></div>');
    }
    for (i = 0; i < colors.length; i++) { // Boucle pour faire apparaitre les couleurs
        var colorsDiv = '<div class="' + colors[i] + '"></div>';
        $('#colors').append(colorsDiv);
    }

    function VerifyTest() { // Test de vérification au click du (OK?)
        console.log('Hello World!');
    }
    $(".brown").click(function () { // Test de click pour faire apparaitre le premier (OK?)
        $(".row-1 .check").css("visibility", "visible");
    });
});