function MathService($http){
    
    
    this.addNumbers=function(a,b){
    return a+b;
    };
    
    this.subtractNumbers=function(a,b){
    return a-b;
    };
    
    
    
}
app.service('MathService', MathService)