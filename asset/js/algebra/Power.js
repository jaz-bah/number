function calculatePower(){
    let output = $("#inputNumber");
    let inputPower = $("#inputPower");
    let input = eval(output.val());
    let power = eval(inputPower.val());

    if (input=="" || power == ""){
        alert("Please input a number");
    } else {
        var result = Math.pow(input, power);
        output.val(result);
        inputPower.val("");
    }

}