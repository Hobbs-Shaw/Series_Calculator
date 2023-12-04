let n = Number(prompt('Emter a number'));
let result = calculate(n)
alert('Result: '+result);

function calculate(n){
    
    if(n>0){
        //(n*(n+1))/2
        let c = (n*(n+1))/2;
        return c;
    }else{
        return 0;
    }
    
}
