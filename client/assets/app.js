var myapp = angular.module('myapp', ['ngRoute']);

myapp.config(function ($routeProvider) {

	$routeProvider
	.when('/new', {
		templateUrl: 'partials/new.html'
	})

	.when('/show', {
		templateUrl: 'partials/show.html'
	})

	.when('/edit', {
		templateUrl: 'partials/edit.html'
	})
})

// All the factories

myapp.factory('friendFactory' , ['$http', function($http){
	
	var factory = {}

	factory.index = function(callback){
		$http.get('/friends').then(
			function(data){
				callback(data.data);
				console.log("this is callback from factory",data.data);
		})
	}

	factory.create = function(newfriend, callback){
		$http.post('/friends', newfriend).then(
			function(data){
				// console.log(data.data);
				callback(data);
		})
	}
	

	// factory.edit = function(newfriend, callback){
	// 	$http.post('/friends/:id', newfriend).then(
	// 		function(data){
	// 			callback(data.data);
	// 		})
	// }

	
	


	return factory;
}])



myapp.controller('newController', ['$scope', 'friendFactory' , function($scope, friendFactory) {



	$scope.index = function(){
		friendFactory.index( function(data){
			$scope.friends = data;
			console.log("this is callback from controller",data);
		})
	}

	$scope.index();

	$scope.create =function(){
		friendFactory.create( $scope.mymodel, $scope.index )
		$scope.mymodel = {};
	}










}])


myapp.controller('editController', [ '$scope', 'friendFactory', function($scope, friendFactory){



	$scope.index = function(){
		friendFactory.index( function(data){
			$scope.friends = data;
			console.log("this is callback from controller",data);
		})
	}

	$scope.index();

	// $scope.edit = function(){
	// 	friendFactory.update( $scope.mymodel, $scope.index)
	// }






}])