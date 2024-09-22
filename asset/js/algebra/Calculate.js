let input = $("#calculatorOutput");

function inputNumber(number) {
    let currentInput = input.text();
    input.text(currentInput + number);
}

function inputOparator(oparator) {

    let currentInput = input.text()
    let x = currentInput.length - 1 ;

    if (currentInput == ""){
        alert("Please input a number first");
    } else if (currentInput[x] == '+' || currentInput[x] == '-' || currentInput[x] == '*' || currentInput[x] == '/' || currentInput[x] == '.'){
        alert("Invalid input");
    } else {
        input.text(currentInput + oparator);
    }

}

function Result() {
    let currentInput = input.text();
    let x = currentInput.length - 1 ;

    if (currentInput == ""){
        alert("Please input a number first");
    } else if (currentInput[x] == '+' || currentInput[x] == '-' || currentInput[x] == '*' || currentInput[x] == '/' || currentInput[x] == '.'){
        alert("Invalid input");
    } else {
        let result = eval(input.text());
        input.text(result);
    }
    
    if (x > 18){
        input.addClass("font-size1");
    }
}

function Percentage(){
    let currentInput = input.text();
    let x = currentInput.length - 1 ;

    if (currentInput == ""){
        alert("Please input a number first");
    } else if (currentInput[x] == '+' || currentInput[x] == '-' || currentInput[x] == '*' || currentInput[x] == '/' || currentInput[x] == '.'){
        alert("Invalid input");
    } else {
        let result = eval(input.text()) / 100 ;
        input.text(result);
    }
}

function Clear() {
    input.text("");
    input.removeClass("font-size1");
}

function Backspace() {
    var mainNumber = input.text();   
    input.text(mainNumber.slice(0,-1));
    input.removeClass("font-size1");
}