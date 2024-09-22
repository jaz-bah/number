function calculateLog2() {
    let output = $("#inputLognumber");
    let input = output.val();
    let number = eval(input)

    if ( input == ""){
        alert("Please input a number");
    } else if (number<0){
        alert("Please input a positive number");
    } else {
        let result = Math.log2(number);
        output.val(result);
    }
}

function calculateLog10() {
    let output = $("#inputLognumber");
    let input = output.val();
    let number = eval(input);

    if ( input == ""){
        alert("Please input a number");
    } else if (number<0){
        alert("Please input a positive number");
    } else {
        let result = Math.log10(number);
        output.val(result);
    }
}