const info = [
    {
        id: 1,
        title: 'Mortarman',
        image: './img/mortarman.png',
        resume: 'Développement d\'un jeu rétro',
        details: `L'objectif de ce projet à été de réaliser un jeu rétro, par groupes de 4 étudiants, dans le cadre de notre projet de 1ère année de DUT Informatique.<br><br>
        Notre idée était de reprendre le jeu "Bomberman". Dans un premier temps, nous avons dû faire de la conception (diagrammes de classes, ...) pour que la programmation se déroule correctement et plus rapidement.<br>
        Ensuite, tout le jeu a été développé en C++ qui est un langage de programmation orientée objet, c'est le langage que nous avions apprit durant l'année.<br> 
        Chaque tâche était donc répartie entre les membres de l'équipe pour pouvoir avancer au mieux<br><br>
        En conclusion, ce projet nous a permis d'apprendre à travailler en équipe, notamment sur la communication au sein d'un groupe et le suivie d'un projet.<br><br>
        Vidéo de démonstration : <a target="_blank" href="https://www.youtube.com/watch?v=3ETm-zUKb0I">YouTube</a>`,
        techno: `<li>C++</li>`,
        year: '2021'
    },
    {
        id: 2,
        title: 'Portfolio',
        image: './img/portfolio.png',
        resume: 'Création de mon site portfolio',
        details: `L'objectif de ce projet a été de réaliser mon site portfolio à l'aide du framework VueJS, pour y répertorier tous mes projets et futurs projets. <br><br>
        La création de ce site m'a permis de découvrir le framework VueJS que je n'avais jamais utilisé auparavant (gestion des composants, etc), tout en réalisant mon propre site portfolio où j'ai
        pu apprendre à faire des animations en CSS pour donner plus de "vie" à mon site, chose que je ne savais pas faire avant ce projet.  
        De plus, il a fallu rendre le site "responsive" pour qu'il soit accessible depuis tous les appareils (smartphones, tablettes, ordinateurs). 
        J'ai également utilisé Boostrap pour pouvoir utiliser des "Modals".  
        Tout ça m'a au final permis de voir comment déployer un site en ligne grâce à un fichier de configuration nginx.  <br><br>
        En conclusion, ce projet m'a permis de découvrir de nouvelles technologies et de renforcer mon aspect FullStack tout en créant mon propre site.`,
        techno: `<li>VueJS</li><li>HTML</li><li>SCSS</li><li>Bash/Nginx</li>`,
        year: '2022'
    },
    {
        id: 3,
        title: 'Casse-Brique',
        image: './img/casse-brique.png',
        resume: 'Développement d\'un Casse-Brique en JS',
        details: `Le but de ce projet à été de reproduire le jeu "Casse-Brique" en HTML à l'aide de la balise "canvas" mais également à l'aide de Javascript. <br><br>
        Concrètement, l'objectif de ce jeu est de détruire un mur de brique à l'aide d'une balle, qui rebondit sur les murs et les briques, mais aussi sur une raquette qu'il est possible de diriger grâce aux touches directionnelles du clavier. <br>
        Pour cela, ce projet à été développé à l'aide de Javascript et de sa librairie JQuery pour pouvoir dans un premier temps dessiner tous les éléments de jeu sur l'écran dans le canvas, mais aussi pour pouvoir gérer toutes les collisions de la balle, la gestion des vies et du score du joueur, le déplacement de la raquette avec les touches du clavier, ... <br>
        De plus, le score ainsi que le nom du joueur est enregistré sur un serveur, il est donc possible de voir via le menu "Classement" du jeu, les 5 meilleurs score qui ont été fait par les joueurs. <br><br>
        On retrouve sur le jeu différentes briques : <br>
        <li>    Briques normales (vertes)</li>
        <li>    Briques vitesses (roses) : rajoutant de la vitesse à la balle</li>
        <li>    Briques explosives (oranges) : détruisant les briques adjacentes à celle-ci</li><br>
        En conclusion, ce projet m'a permis de voir comment il était possible de développer un jeu en HTML et Javascript, mais aussi de renforcer mes connaissances dans l'utilisation de ce langage et le DOM.<br><br>
        Vidéo de démonstration : <a target="_blank" href="https://www.youtube.com/watch?v=_c8lT2npp8A">YouTube</a>
        `,
        techno: `<li>HTML</li><li>CSS</li><li>Javascript</li><li>JQuery</li>`,
        year: '2022'
    },
    {
        id: 4,
        title: 'Musée Maritime',
        image: './img/musee-maritime.png',
        resume: 'Application Web mobile',
        details: `Durant ma 2e année d'IUT Informatique, nous avons eu par équipe de 5, l'occasion de réaliser une application web mobile pour le musée maritime de La Rochelle. Ce projet n'est pas réellement destinée pour le musée maritime de La Rochelle, mais nous avions pour objectif de faire comme si cela était le cas.<br><br>
        L'application web à pour objectif de permettre aux visiteurs de consulter les différentes informations concernant les différents bateaux appartenant au musée maritime.<br><br>
        Le projet est monté sur une stack Docker, l'application est réalisée avec le framework ReactJS pour la partie "front", le framework Symfony pour la partie "back" et MySql pour la base de donnée. Avec Symfony nous avons créé une API à l'aide de API-Platform pour enregistrer et avoir toutes les informations de chaque bateaux du musée. Toutes ces données sont par la suite appelées puis affichées avec du Javascript.<br><br>
        La page d'accueil contient une carte permettant de localiser l'ensemble des bateaux. Pour faire cela, nous avons utilisé l'API Leaflet. <br>
        Enfin, nous avons utilisé l'API OpenWeatherMap, qui permet de récupérer les informations sur la météo des prochains jours, pour que les visiteurs puissent la consulter et préparer au mieux leur visite. <br><br>
        En conclusion, ce projet à été une très bonne expérience sur le fait de travailler en équipe, se répartir les tâches, etc, mais aussi sur le fait de pouvoir créer notre propre API, notre propre visuel et pouvoir travailler à la fois sur le back et le front. J'ai donc pu me familiariser avec React et Symfony. <br><br>
        Vidéo de démonstration : <a target="_blank" href="https://www.youtube.com/watch?v=mPk8INzt4AU">YouTube</a>
        `,
        techno: `<li>ReactJS</li><li>Symfony</li><li>API-Platform</li><li>Docker</li><li>HTML/CSS</li><li>Javascript</li><li>API Leaflet</li><li>API OpenWeatherMap</li>`,
        year: '2022'
    },
]

export default info;