

const Operator = {}

 function add(x1,x2) {
    return x1+x2
    }
    function substrat(x1,x2) {
        return x1-x2
    }
    function multiply(x1,x2){
        return x1*x2
    }
    function divide(x1,x2) {
        if(x2===0){
            console.log("no se puede dividir por 0")
        }else{
            return x1/x2
        }
    }
Operator.add=add
Operator.substrat=substrat
Operator.multiply=multiply
Operator.divide=divide

module.exports=Operator