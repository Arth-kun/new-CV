angular.module('myApp', [])
.controller('myCtrl', function ($scope) {
		
	//private function



	//scope function


	//TRY TO DO A TYPESCRIPT CLASS
	//data	
	$scope.informations = {
		"titre" : {
			"nom" : "cougé",
			"prenom" : "Arthur",
			"job" : "étudiant développeur"
		},
		"competences" : [
			"JavaScript",
			"HTML/CSS"
		],
		"info" : {
			"tel" : "06 13 41 35 31",
			"mail" : "arthur.couge@gmail.com",
			"permis" : "Permis B",
			"age" : "19 ans" 
		},
		"experiences" : [{
			"titre" : "Experience 1",
			"contenu" : "contenu experience 1"
		},{
			"titre" : "Experience 2",
			"contenu" : "contenu experience 2"
		},{
			"titre" : "Experience 3",
			"contenu" : "contenu experience 3"
		}]
	};

});
