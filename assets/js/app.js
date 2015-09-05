var BloggyApp = angular.module('BloggyApp',['ui.bootstrap','ngRoute','sailsResource','ngMessages']);

BloggyApp.run(['UserService',function(UserService){

  console.log('Bloggy reporting for duty.');

  UserService.check(function(err,data){
    console.log('checking...',err,data);
  });

}]);

BloggyApp.config(['$routeProvider','$locationProvider','sailsResourceProvider', function($routeProvider, $locationProvider, sailsResourceProvider){

  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about', {
    templateUrl:'/views/about.html',
    controller:'AboutCtrl'
  })
  .when('/post/new', {
    templateUrl:'/views/post/new.html',
    controller:'PostNewCtrl'
  })
  .when('/post/:id',{
    templateUrl:'/views/post/show.html',
    controller:'PostShowCtrl'
  })
  .when('/test',{
    templateUrl:'/views/test.html',
    controller:'TestCtrl'
  })

  .otherwise({
    templateUrl:'/views/404.html'
  });


}]);







