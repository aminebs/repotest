Fichier index.html

Ce fichier sert principalement définir une liste de type <ul> dans laquelle on intègre des balises de type <li> à chaque rajout d’un voeu.
Par ailleurs on attache à ce fichier les sources jQuery ainsi que le fichier anniversaire.js

Fichier style.css

Ce fichier permet de définir les styles de certains élément/classes afin de les appliquer lors de l’affichage du fichier index.html

Fichier anniversaire.js

Dès que le DOM est prêt, on exécute du jQuery grâce a la fonction $(function()…) à l’interieur de laquelle il y a été intégré la fonction on() qui permet de gérer les clics sur les paragraphes et déclenche les actions sur ce même paragraphes (balise <li>).

Deux cas d’action sont alors possibles:
	•	Si tous les paragraphes ne sont pas encore affichés: on affiche le paragraphe suivant et on change la couleur du paragraphe en question.
	•	Si tous les paragraphes sont deja affichés: on change le background de l’ensemble du document plusieurs fois et on lance un fichier audio et un background animé.

Notas:

	✓	Le compteur -i- sert à suivre le nombre de paragraphes affichés.
	✓	Le son est dans le fichier happybirthday.mp3 situé dans le repertoire racine.
	✓	L’animation est un lien vers le site giphy.com: "https://media.giphy.com/media/SUA9E0GcSyhCU/giphy.gif.
	✓	La fonction setBackground() a été créée pour exécuter le changement de background-color et structurer le code du fichier. Elle a deux paramètres: Le Dom et la couleur cibles.

reference: ce fichier readme.txt a ete cree pour repondre a l'activite du cours