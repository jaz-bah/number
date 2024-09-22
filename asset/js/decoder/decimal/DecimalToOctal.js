function decimalTooctal(){
    let output = $("#inputDecimal");
    let input = output.val();
    let number = eval(input);


    if (input == ""){
        alert("Please input a number");
    } else if (number < 0) {
        alert("Please input a positive number");
    } else {

        var n = number;

        var number1 = Math.floor(input);
        var number2 = n-number1;
        var list1 = [];
        var list2 = [];

        for (i=1; i<10; i++){
            if(number1<=0){
                break
            }
            ni = number1 % 8;
            number1 = (number1 - ni) / 8;
            list1.unshift(ni);
        }

        var result1 = list1.join("");

        for (i=1; i<5 ; i++){
            if(number2<=0){
                break
            }
            nf = number2 * 8;
            a = Math.floor(nf);
            number2 = nf - a;
            list2.push(a);
        }

        var result2 = list2.join("");

        var length1 = list1.length;
        var length2 = list2.length;

        if(length1 > 0 && length2 == 0){
            var octal = result1;
        }
        else if(length1 == 0 && length2 > 0){
            var octal = "0."+result2;
        }
        else{
            var octal = result1+"."+result2;
        }

        output.val(octal);
    }
}