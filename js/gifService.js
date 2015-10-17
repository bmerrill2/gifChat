var app = angular.module('gifChat');

app.service('gifService', function($http) {
  
    
  this.getGif = function(searchTerm) {
    
    var uri = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC'
    
    return $http ({
      method: 'GET',
      url: uri
    });
    
  }
  
  
  
  
  
  
  
});