function quotesService($http){
    this.getQuote=function(){
     return  $http.get("https://talaikis.com/api/quotes/random/").then(function(response) {
            return response.data;
        }); 
    };
}
app.service('quotesService', quotesService)