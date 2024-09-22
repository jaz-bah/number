function binaryToOctal(){

    let output = $("#inputBinary");
    let input = output.val();
    let inputInt = eval(input);

    if (input == 0){
        alert("Please input a number");
    } else if (inputInt<0) {
        alert("Please input a positive number");
    } else {
        let number = input;
        let strNumber = String(number);
        let number1 = Math.floor(number);
        let strNumber1 = String(number1);
        let Number1Length = strNumber1.length;
        let x = Number1Length + 1;
        let strNumber2 = strNumber.slice(x);
        let Number2Length = strNumber2.length;
        let n1 = Number1Length - 1;
        let power1 = n1;
        let result1 = 0;
        for(i=0; i<=n1; i++){
           var B1 = strNumber1[i] * Math.pow(2, power1);
           power1 = power1 - 1;
           result1 = result1 + B1;
        }
        let n2 = Number2Length -1;
        let power2 = -1;
        let result2 = 0;
        for(i=0; i<=n2; i++){
            var B2 = strNumber2[i] * Math.pow(2, power2);
            power2 = power2 - 1;
            result2 = result2 + B2;
        }

        let octalNumber1 = result1;
        let octalNumber2 = result2;
        let octalList1 = [];
        let octalList2 = [];
        for(i=1; 1<10; i++){
            if(octalNumber1 <= 0){
                break
            }
            ni = octalNumber1 % 8;
            octalNumber1 = (octalNumber1-ni) / 8;
            octalList1.unshift(ni);
        }
        let octalResult1 = octalList1.join("");

        for(i=1; i<5; i++){
            if(octalNumber2<=0){
                break
            }
            nf = octalNumber2 * 8;
            a = Math.floor(nf);
            octalNumber2 = nf - a;
            octalList2.push(a);
        }
        let octalResult2 = octalList2.join("");

        let length1 = octalList1.length;
        let length2 = octalList2.length;

        if(length1 > 0 && length2 == 0){
            var octal = octalResult1;
        }
        else if(length1 == 0 && length2 > 0){
            var octal = "0."+octalResult2;
        }
        else{
            var octal = octalResult1+"."+ octalResult2;
        }

         output.val(octal);

    }

}