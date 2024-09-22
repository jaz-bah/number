function checkFactorial(){

    let output = $("#factorial");
    let input = eval(output.val());
    let n = input - Math.floor(input);

    if (output == ""){
        alert("Please input a number");
    } else if (input<0) {
        alert("Negetive number has no factorial value")
    } else if (input == 0){
        output.val(0);
    } else if (n != 0){
        alert("This number has no factorial value")
    } else if (input > 170){
        alert("Infinity");
    } else {
        let result = 1 ;

        for (i = input;i > 1; i--){
            result = result * i;
        }
        output.val(result);
    }
}