function calculateRoot(){
    let output = $("#inputRootnumber");
    let inputPower = $("#inputRootpower");
    let input = eval(output.val());
    let power = eval(inputPower.val());

    if (input=="" || power == ""){
        alert("Please input a number");
    } else {
        var result = Math.pow(input, 1/power);
        output.val(result);
        inputPower.val("");
    }

}