//cette fonction change la couleur de fond d'un élément donné
function setBackground(element, color) {
    $(element).css('background-color', color);
}

$(function () {

    var $list;
    $list = $('ul');
    //définition du tableau des messages à afficher
    message = ['Sante !', 'Bonheur !', 'Et succes !'];
    
    //tableau des couleurs de fond des messages à afficher
    messageColor = ['#14FA23', '#82D8F5', 'pink', '#FA14EB'];
    
    //compteur servant à parcourir les tableaux
    var i = 0;
    //variable servant à lire le son "happy birthday"
    var sound = new Audio();
    //fichier a rajouter au repertoire racine
    sound.src = "happybirthday.mp3";
    
    //gestion des clics sur les blocs de message
    $list.on('click', 'li', function () {
        var $this = $(this);
        if (i <= 2) {
            $list.append('<li>' + message[i] + '</li>');
            setBackground($this, messageColor[i]);
            i += 1;
        } else {
            setBackground($this, messageColor[i]);
            sound.play();
            setBackground('body', '#F58C05');
            setTimeout(function () {
                setBackground('body', 'pink');
            }, 2000);
            setTimeout(function () {
                $('body').css('background-image', 'url("https://media.giphy.com/media/SUA9E0GcSyhCU/giphy.gif")');
            }, 3000);

        }
    });

});
