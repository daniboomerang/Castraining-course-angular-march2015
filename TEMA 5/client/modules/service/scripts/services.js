var gnaWithServiceServices = angular.module('gnaWithServiceServices', []);  

/* Creating a new service for aur app */  
gnaWithServiceServices.factory('gnaService', function($rootScope) {
  return {
    getRandomNumber: function (mod) {
      return Math.floor((Math.random() * mod) + 1);
    }  
  };
});


    