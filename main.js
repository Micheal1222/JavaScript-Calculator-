function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value1").value);
    var op = document.querySelector("#operator").value;
    var calculate;


    if(op == "add") {
        calculate = a + b;

    }else if (op == "min"){
        calculate = a - b;
    }else if(op == "Divide") {
        calculate = a / b;
    }else if (op == "muliply") {
        calculate = a * b; 
    }

    document.querySelector("#result").innerHTML = calculate;

}