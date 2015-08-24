angular.module('hello', [ 'ngRoute','ngResource' ]).config(function($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
        templateUrl : 'home.html',
        controller : 'home'
    }).when('/login', {
        templateUrl : 'login.html',
        controller : 'navigation'
    }).when('/guias',{
        templateUrl:'guias.html',
        controller:'guias',

    }). when('/reactivos',{
        templateUrl:'reactivos.html',
        controller:'reactivos'
    }).otherwise('/');

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

}).controller(
    'navigation',

    function($rootScope, $scope, $http, $location, $route) {

        $scope.tab = function(route) {
            return $route.current && route === $route.current.controller;
        };

        var authenticate = function(credentials, callback) {

            var headers = credentials ? {
                authorization : "Basic "
                + btoa(credentials.username + ":"
                    + credentials.password)
            } : {};

            $http.get('user', {
                headers : headers
            }).success(function(data) {
                if (data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback($rootScope.authenticated);
            }).error(function() {
                $rootScope.authenticated = false;
                callback && callback(false);
            });

        }

        authenticate();

        $scope.credentials = {};
        $scope.login = function() {
            authenticate($scope.credentials, function(authenticated) {
                if (authenticated) {
                    console.log("Login succeeded")
                    $location.path("/");
                    $scope.error = false;
                    $rootScope.authenticated = true;
                } else {
                    console.log("Login failed")
                    $location.path("/login");
                    $scope.error = true;
                    $rootScope.authenticated = false;
                }
            })
        };

        $scope.logout = function() {
            $http.post('logout', {}).success(function() {
                $rootScope.authenticated = false;
                $location.path("/");
            }).error(function(data) {
                console.log("Logout failed")
                $rootScope.authenticated = false;
            });
        }

    }).controller('home', function($scope, $http) {
        $http.get('/resource/').success(function(data) {
            $scope.greeting = data;
        })
    }) .controller('nada',function($scope){
        $scope.mensaje="";
        $scope.cambiarAGuias=function(){
            $scope.mensaje="guias.html";
            console.log("hhhhhhhaaaaddfdffdfa");
        }
    }).controller('reactivos',function($scope, $http,$resource){
        $scope.hola="hola mensos";
        var Reactivo=$resource('reactivo/:id',{id:'@id'},{crear:{method:'POST'},
            actualizar:{method:'PUT'}, borrar:{method:'DELETE'}});

        //GET Todos

        $scope.reactivo=Reactivo.query(function(){
            console.log($scope.reactivo.length);
        })

        /*
         //Get por id
         $scope.buscarPorId=function(){

         $scope.usu=Usuario.get({id:1

         }, function(){
         console.log("Usuario obtenido:"+$scope.usu.nombre);
         });
         }


         //UPDATE
         $scope.actualizarUsuario=function(){
         console.log("antes del evento update");
         var usuario = new Usuario();
         usuario.login = $scope.login;
         usuario.password = $scope.password;
         usuario.email =$scope.email;
         usuario.$actualizar(function (data) {
         console.log(data.nombre);
         });
         }

         //DELETE
         $scope.borrarUsuario=function(){
         var usuario=new Usuario();
         usuario.id=5;
         usuario.$borrar();
         console.log("si se borro");
         }

         //POST
         $scope.guardarUsuario=function() {

         console.log("antes del evento");
         var usuario = new Usuario();
         usuario.login = $scope.login;
         usuario.password = $scope.password;
         usuario.email =$scope.email;

         usuario.$crear(function (data) {
         console.log(data.login);
         });






         };// Termina boton guardarUsuario()
         */

    }).controller("guias",function($scope){

    });


