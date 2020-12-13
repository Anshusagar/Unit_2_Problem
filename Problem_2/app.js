function multiply(a){

    return function (b){
        var num1=b*a;
            return function(c){
                var num2=c*num1;
                    return function(d){
                        var num3=d*num2;
                        console.log(num3);
                    }
            }
    }
    
  
}
multiply(2)(2)(3)(4);

