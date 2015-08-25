var mainApp = angular.module('mainApp',['ngRoute']);
mainApp.controller('AppCtrl',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
    console.log("hello world from controller");
    
    $http.get('/api/users').success(function(res){
        $scope.users = res; 
    });
    
    $scope.add = function()
    {
        $location.url('/add');
    }
    
      $scope.addEmployee= function(){
       $http.post('/api/users',$scope.emp).success(function(res){
            console.log(res);
        });
          $location.url('/list');
      };
    
     $scope.deleteEmployee= function(id){
            console.log("deleteEmployee");
       $http.delete('/api/users/'+id).success(function(res){
              console.log("http.deleteEmployee");
            console.log(res);
            $http.get('/api/users').success(function(res){
        $scope.users = res; 
    });
        });
         
      };  
    
    $scope.listEmployee= function()
    {
        $location.url('/list');
    };
    
     $scope.editEmployee= function(id)
    {
        $location.url('/edit/'+id);
    };
    
    $http.get('/api/users/' + $routeParams.id).success(function(res){
             $scope.emp=res;
    });
		 
	 $scope.update = function(){
        console.log($scope.emp._id);
         $http.put('/api/users/' + $scope.emp._id,$scope.emp).success(function(res){
             console.log("Inside Update Function");
             console.log(res);
         });
		  $location.url('/list');
    };
    
    
    
     
       
          
    }]);





mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'AppCtrl'
      }).
      when('/add', {
        templateUrl: 'add.html',
        controller: 'AppCtrl'
      }).
      when('/list', {
        templateUrl: 'list.html',
        controller: 'AppCtrl'
      }).
      when('/edit/:id', {
        templateUrl: 'edit.html',
        controller: 'AppCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);