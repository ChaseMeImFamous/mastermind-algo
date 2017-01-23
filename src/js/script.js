$(document).ready(function () {

    
                                                                    /******************************************************
                                                                                        Initialisation
                                                                    ******************************************************/
    var numberTries = 12; // Variable fixe : nombre d'essais !
    var colors = ['brown', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']; // Variable fixe : tableau des couleurs !
    var usedLives = 1; // Variable compteur : affecte +1 à chaque nouvel essai !
    var colorCount1 = 0; // Variable compteur : affecte la couleur si elle est dans la case !
    var colorCount2 = 0; // Variable compteur : affecte la couleur si elle est dans la case !
    var colorCount3 = 0; // Variable compteur : affecte la couleur si elle est dans la case !
    var colorCount4 = 0; // Variable compteur : affecte la couleur si elle est dans la case !
    var colorCounter; // Variable tampon : affecte la couleur aux variables au dessus lors du click and drop !
    var color; // Variable tampon : affecte le css aux cases lors du click and drop !
    var randomCode; // Variable générée : affecte la combinaison secrète !
    do { 
        randomCode = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];
    } while (checkIfArrayIsUnique(randomCode) == false); // Randomisation de la combinaison et vérification qu'il n'y ait pas plusieurs cases de la même couleur !
    createLine(); // Fonction de création de ligne
    for (i = 0; i < colors.length; i++) { // Boucle pour faire apparaitre les couleurs
        var colorsDiv = '<div class="' + colors[i] + ' selection"></div>';
        $('#colors').append(colorsDiv);
    }
                                                                    /******************************************************
                                                                                        Initialisation
                                                                    ******************************************************/
    
    
    
    
    
                                                                    /******************************************************
                                                                                    Système de click and drop
                                                                    ******************************************************/
    $(document).on('click', '.selection', function () { // Au clic, affecte aux variables tampon la couleur et la valeur pour les affecter aux différentes cases !
        $(this).parent().children('.selected').removeClass('selected'); // Cherche les div ayant déjà selected et l'enlever
        $(this).addClass('selected'); // Ajoute selected à la case séléctionnée
        color = $(this).css("background-color");
        colorCounter = $(this).attr('class').split(" ")[0];
    });
    
    $(document).on('click', '.guess-1', function () { // Au click, affecte la couleur et la valeur à son compteur gardées lors de la selection !
        if ($(this).parent().is(':nth-child(' + usedLives + ')')) { // Vérifie si on est sur la bonne ligne
            $(this).css("background-color", color);
            colorCount1 = colorCounter;
        }
        else {
            return false; 
        }
    });
    $(document).on('click', '.guess-2', function () { // Au click, affecte la couleur et la valeur à son compteur gardées lors de la selection !
        if ($(this).parent().is(':nth-child(' + usedLives + ')')) { // Vérifie si on est sur la bonne ligne
            $(this).css("background-color", color);
            colorCount2 = colorCounter;
        }
        else {
            return false;
        }
    });
    $(document).on('click', '.guess-3', function () { // Au click, affecte la couleur et la valeur à son compteur gardées lors de la selection !
        if ($(this).parent().is(':nth-child(' + usedLives + ')')) { // Vérifie si on est sur la bonne ligne
            $(this).css("background-color", color);
            colorCount3 = colorCounter;
        }
        else {
            return false;
        }
    });
    $(document).on('click', '.guess-4', function () { // Au click, affecte la couleur et la valeur à son compteur gardées lors de la selection !
        if ($(this).parent().is(':nth-child(' + usedLives + ')')) { // Vérifie si on est sur la bonne ligne
            $(this).css("background-color", color);
            colorCount4 = colorCounter;
        }
        else {
            return false;
        }
    });
                                                                    /******************************************************
                                                                                    Système de click and drop
                                                                    ******************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                                    Click de vérification
                                                                    *****************************************************/
    $(document).on('click', '.check', function () {
        if ($(this).parent().is(':nth-child(' + usedLives + ')')) { // Vérifie si on est sur la bonne ligne
            //
        }
        else {
            return false;
        }
        
        /*****************************************************
            Vérification de la présence des couleurs dans la combinaison (colorise en orange les couleurs mal placées)
        *****************************************************/
        for (var i = 0; i < randomCode.length; i++) { // Boucle qui permet de parcourir le tableau de la combinaison
            if (colorCount1 == randomCode[i]) { // Vérification, couleur par couleur, de la contenance des cases
                $('.ans-1:eq(' + (usedLives - 1) + ')').css({
                    'background-color': 'orange'
                });
            }
            if (colorCount2 == randomCode[i]) { // Vérification, couleur par couleur, de la contenance des cases
                $('.ans-2:eq(' + (usedLives - 1) + ')').css({
                    'background-color': 'orange'
                });
            }
            if (colorCount3 == randomCode[i]) { // Vérification, couleur par couleur, de la contenance des cases
                $('.ans-3:eq(' + (usedLives - 1) + ')').css({
                    'background-color': 'orange'
                });
            }
            if (colorCount4 == randomCode[i]) { // Vérification, couleur par couleur, de la contenance des cases
                $('.ans-4:eq(' + (usedLives - 1) + ')').css({
                    'background-color': 'orange'
                });
            }
        }
        
        /*****************************************************
            Vérification de la place des couleurs trouvées (colorise en vert les cases bien placées et de la bonne couleur)
        *****************************************************/
        if (randomCode[0] == colorCount1) { // Vérification direct de la case par rapport à celle de la ligne d'essai
            $('.ans-1:eq(' + (usedLives - 1) + ')').css({
                'background-color': 'green'
            });
        }
        if (randomCode[1] == colorCount2) { // Vérification direct de la case par rapport à celle de la ligne d'essai
            $('.ans-2:eq(' + (usedLives - 1) + ')').css({
                'background-color': 'green'
            });
        }
        if (randomCode[2] == colorCount3) { // Vérification direct de la case par rapport à celle de la ligne d'essai
            $('.ans-3:eq(' + (usedLives - 1) + ')').css({
                'background-color': 'green'
            });
        }
        if (randomCode[3] == colorCount4) { // Vérification direct de la case par rapport à celle de la ligne d'essai
            $('.ans-4:eq(' + (usedLives - 1) + ')').css({
                'background-color': 'green'
            });
        }
        
        /*****************************************************
            Vérification de la victoire
        *****************************************************/
        if (!(randomCode[0] == colorCount1 && randomCode[1] == colorCount2 && randomCode[2] == colorCount3 && randomCode[3] == colorCount4)) {  /* Vérifie s'il n'y pas de condition de victoire avant
                                                                                                                                                d'ajouter une ligne */
            createLine();
        }
        else {
            if (usedLives == 1) { // singulier
                word = 'essai! Bravo!';
            }
            else { // pluriel
                word = 'essais!';
            }
            $('#game').append('<div id="end"><div class="text">Tu as gagné en ' + usedLives + ' ' + word + '<div>Rejouer?</div></div><div id="yes">Oui</div><div id="no">Non</div></div>')
        }
        
        /*****************************************************
            Vérification de l'utilisation de tous les essais
        *****************************************************/
        if (usedLives == (numberTries+1) && (randomCode[0] != colorCount1 && randomCode[1] != colorCount2 && randomCode[2] != colorCount3 && randomCode[3] != colorCount4)) {
            $('#game').append('<div id="end"><div class="text">Tu as perdu !<div>Rejouer?</div></div><div id="yes">Oui</div><div id="no">Non</div></div>')
        }
        usedLives++; // Incrémentation des essais
        next(); // Ré-initialisation des compteurs
    });
                                                                    /*****************************************************
                                                                                    Click de vérification
                                                                    *****************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                                Click de suppression de ligne
                                                                    *****************************************************/
    $(document).on('click','.delete', function(){
        if ($(this).parent().is(':nth-child(' + usedLives + ')')) { // Vérifie si on est sur la bonne ligne
            next(); // Ré-initialisation des compteurs
            $(this).parent().children('div[class*="guess"]').css('background-color', '#ececec'); // Enlève les couleurs
        }
        else {
            return false; 
        }
    });
                                                                    /*****************************************************
                                                                                Click de suppresion de ligne
                                                                    *****************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                                        Clicks de fin
                                                                    *****************************************************/
    $(document).on('click', '#yes', function () { 
        restart();
    });
    $(document).on('click', '#no', function () {
        $("#end").html("<div class='text'>T'es sûr?</div><div id='yes' class='replay'>Rejouer !</div>");
    });
                                                                    /*****************************************************
                                                                                        Clicks de fin
                                                                    *****************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                        Fonction restart : réinitialise le plateau de jeu
                                                                    *****************************************************/
    function restart() {
        next();
        usedLives = 1;
        $('.selected').removeClass('selected');
        randomCode = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];
        $('#game').html('<div class="row"><div class="guess-1"></div><div class="guess-2"></div><div class="guess-3"></div><div class="guess-4"></div><div class="ans-1"></div><div class="ans-2"></div><div class="ans-3"></div><div class="ans-4"></div><input type="submit" value="&#x2714;" class="check"><input type="submit" value="&#x2716;" class="delete"></div>');
    }
                                                                    /*****************************************************
                                                                        Fonction restart : réinitialise le plateau de jeu
                                                                    *****************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                            Fonction de vérification du tableau unique
                                                                    *****************************************************/
    function checkIfArrayIsUnique(randomCode) {
        return randomCode.length === new Set(randomCode).size;
    }
                                                                    /*****************************************************
                                                                            Fonction de vérification du tableau unique
                                                                    *****************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                            Fonction de réinitialisation des compteurs
                                                                    *****************************************************/
    function next() {
        colorCount1 = 0;
        colorCount2 = 0;
        colorCount3 = 0;
        colorCount4 = 0;
    }
                                                                    /*****************************************************
                                                                            Fonction de réinitialisation des compteurs
                                                                    *****************************************************/
    
    
    
    
    
                                                                    /*****************************************************
                                                                                Fonction de création de ligne
                                                                    *****************************************************/
    function createLine() {
        $('#game').append('<div class="row"><div class="guess-1"></div><div class="guess-2"></div><div class="guess-3"></div><div class="guess-4"></div><div class="ans-1"></div><div class="ans-2"></div><div class="ans-3"></div><div class="ans-4"></div><input type="submit" value="&#x2714;" class="check"><input type="submit" value="&#x2716;" class="delete"></div>');
    }
                                                                    /*****************************************************
                                                                                Fonction de création de ligne
                                                                    *****************************************************/
});