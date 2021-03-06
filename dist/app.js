angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
    var ExpLoader = (function () {
        function ExpLoader() {
            this.expHover = function (myClass) {
                setTimeout(function () {
                    $(myClass).removeClass('noTop');
                }, 300);
                setTimeout(function () {
                    $(myClass).removeClass('noRight');
                }, 330);
                setTimeout(function () {
                    $(myClass).removeClass('noBottom');
                }, 360);
                setTimeout(function () {
                    $(myClass).removeClass('noLeft');
                }, 390);
            };
            this.expLeave = function (myClass) {
                setTimeout(function () {
                    $(myClass).addClass('noTop');
                }, 300);
                setTimeout(function () {
                    $(myClass).addClass('noRight');
                }, 330);
                setTimeout(function () {
                    $(myClass).addClass('noBottom');
                }, 360);
                setTimeout(function () {
                    $(myClass).addClass('noLeft');
                }, 390);
            };
            this.expClick = function () {
                $(".selector.active").addClass('clicked');
            };
        }
        return ExpLoader;
    }());
    $scope.loadSkillLevel = function () {
        $(document).ready(function () {
            var expLoader = new ExpLoader();
            setTimeout(function () {
                $(".myLevel.level1").addClass('niveau1');
                $(".myLevel.level2").addClass('niveau2');
                $(".myLevel.level3").addClass('niveau3');
                setTimeout(function () {
                    $(".level.level1 .levelBall1").addClass('reached');
                }, 1000);
                setTimeout(function () {
                    $(".level.level2 .levelBall1").addClass('reached');
                }, 400);
                setTimeout(function () {
                    $(".level.level2 .levelBall2").addClass('reached');
                }, 1000);
                setTimeout(function () {
                    $(".level.level3 .levelBall1").addClass('reached');
                }, 300);
                setTimeout(function () {
                    $(".level.level3 .levelBall2").addClass('reached');
                }, 500);
                setTimeout(function () {
                    $(".level.level3 .levelBall3").addClass('reached');
                }, 1100);
                expLoader.expHover(".selector.active");
                setTimeout(function () {
                    expLoader.expClick();
                    $('.contenuExp.notActiveText').slideDown(200);
                }, 500);
            }, 700);
        });
    };
    $scope.setActive = function (index) {
        if ($('.selector' + index).attr('class').includes('notActive')) {
            var expLoader = new ExpLoader();
            var active = $('.selector.active').attr('class').split(" ");
            $('.contenuExp').slideUp(200);
            $('.contenuExp' + index).slideDown(200);
            expLoader.expLeave("." + active[1]);
            $('.' + active[1]).removeClass('active')
                .addClass('noTop')
                .addClass('noBottom')
                .addClass('noRight')
                .addClass('noLeft')
                .removeClass('clicked')
                .addClass('notActive');
            $('.selector' + index).removeClass('notActive')
                .addClass('active')
                .removeClass('noTop')
                .removeClass('noBottom')
                .removeClass('noRight')
                .removeClass('noLeft');
            expLoader.expClick();
        }
    };
    $scope.setOver = function (index) {
        var expLoader = new ExpLoader();
        expLoader.expHover('.notActive.selector' + index);
    };
    $scope.setLeave = function (index) {
        var expLoader = new ExpLoader();
        expLoader.expLeave('.notActive.selector' + index);
    };
    $scope.goToRs = function (index) {
        var url = "https://";
        switch (index) {
            case 0:
                url += "twitter.com/CougeArthur";
                break;
            case 1:
                url += "fr.linkedin.com/in/arthur-cougé-ab261bbb";
                break;
            case 2:
                url += "github.com/Arth-kun";
                break;
        }
        window.open(url);
    };
    $scope.curiculumVitae = {
        "titre": {
            "nom": "cougé",
            "prenom": "Arthur",
            "job": "étudiant développeur"
        },
        "competences": [[
                "JavaScript", "level3"
            ], [
                "HTML/CSS", "level3"
            ], [
                "PHP", "level2"
            ], [
                "C# .Net", "level2"
            ], [
                "SQL", "level2"
            ], [
                "Wordpress", "level2"
            ], [
                "Photoshop", "level1"
            ], [
                "Linux", "level2"
            ], [
                "Anglais", "level3"
            ]],
        "info": {
            "tel": "Téléphone: 06 13 41 35 31",
            "mail": "Mail: arthur.couge@gmail.com",
            "permis": "Permis B",
            "age": "19 ans"
        },
        "experiences": [{
                "titre": "Développeur - Octave | Février à Août 2016",
                "contenu": "Création d’une application hybride de commerce connecté, grâce à la technologie des iBeacons (balises Bluetooth), participation à la migration C# de l’ERP."
            }, {
                "titre": "Chargé de relations - BDE IMIE | Depuis Février 2016",
                "contenu": "Membre actif du bureau des étudiants en tant que chargé de relation à travers l'organisation de multiples évènements."
            }, {
                "titre": "Webmaster - Intervalles | Juillet à Août 2015",
                "contenu": "Mise à jour de contenus web sur le site Gamecash.fr, webmarketing (Analytics, Twitter). Création d'une infografie pour les magasins du réseau."
            }, {
                "titre": "Vendeur - GameCash | Juillet 2014 à Février 2015",
                "contenu": "Vente, tenu de caisse, conseil client, reconditionnement de produit, gestion de stock."
            }],
        "formations": [{
                "titre": "Développeur Logiciel - 2015/2017",
                "contenu": "Apprentissage d’un titre professionnel de niveau III à l’ IMIE, école de la filière numérique à Angers."
            }, {
                "titre": "Cours en ligne - depuis 2016",
                "contenu": "Apprentissage des nouvelles technos web sur le site de cours en ligne egghead.io."
            }, {
                "titre": "Diplôme du Baccalauréat - 2014",
                "contenu": "Acquisition d’un Baccalauréat scientifique au lycée David d’Angers à Angers."
            }],
        "projets": [{
                "titre": "ConecShop",
                "contenu": "Création d’une application mobile hybride ayant pour but d’afficher des promotions en fonction des iBeacons captés par l’application. Technos utilisées: Cordova, C#, HTML / CSS, AngularJS."
            }, {
                "titre": "CV en ligne",
                "contenu": "Format web numérique de mon CV en site responsive (WIP) full Javascript."
            }],
        "aboutMe": [{
                "titre": "Trouvez-moi",
                "contenu": [
                    "dist/style/img/twitterGrey.png",
                    "dist/style/img/linkedinGrey.png",
                    "dist/style/img/githubGrey.png"
                ]
            }, {
                "titre": "Je suis:",
                "contenu": [
                    "- Force de proposition",
                    "- Autonome",
                    "- Rigoureux"
                ]
            }, {
                "titre": "J'aime:",
                "contenu": [
                    "- Le Piano",
                    "- Apprendre aux autres",
                    "- Manger"
                ]
            }]
    };
});
//# sourceMappingURL=app.js.map