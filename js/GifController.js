var app = angular.module('gifChat');

app.controller('gifCtrl', function ($scope, gifService){
  
  $scope.gifs = [];
  $scope.getGif = function () {
    
    gifService.getGif($scope.searchTerm)
      .success(function (response) {
      var randomNum = Math.floor(Math.random() * response.data.length);
      console.log(response);
      $scope.gifs.unshift(response.data[randomNum].images.fixed_width.url);
      $scope.searchTerm = "";
    })
    .error(function (err) {
      console.error(err);  
    });
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});