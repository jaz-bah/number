let output = $("#typeOutput");
let output1 = $("#typeOutput1");

function checkType(){
    var data = output.val();
    var input = eval(output.val());
    let n = input - Math.floor(input);

    if (input == 0) {
        var check1 = "Nutral";
    } else if (input < 0) {
        var check1 = "Negetive";
    } else {
        var check1 = "Positive";
    }

    if (data == "") {
        output1.text("Please input a number");
    } else if (n == 0){
        var check2 = "Intiger number";

        if (input % 2 == 0){
            var check3 = "Even number";
        } else {
            var check3 = "Odd number";
        }

        let isPrime = true;
        for(var i=2;i<input;i++){
            if(input % i == 0){
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            var check4 = "Prime number" ;
        } else {
            var check4 = "Composite number" ;
        }
        output1.text(input + " is a " + check1 + " " + check2 + " , " + check3 + " and " + check4);

    } else {
        var check2 = "Decimal number";
        output1.text(input + " is a " + check1 + " " + check2);
    }


    
    
}