var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, quotesService, MathService) {
$scope.getQuote=function(){
    quotesService
        .getQuote()
        .then (function(response){
            $scope.myWelcome=response
        })
};

  var answer =  MathService.addNumbers(1,2)
  console.log(answer)

});
