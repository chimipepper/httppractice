var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

    $scope.getQuote = function() {

        $http.get("https://talaikis.com/api/quotes/random/").then(function(response) {
            $scope.myWelcome = response.data;
        });

    };
});
