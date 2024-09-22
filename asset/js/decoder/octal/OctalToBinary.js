function octalToBinary(){

    let output = $("#inputOctal");
    let input = output.val();
    let inputInt = eval(input);
    
    if (input == ""){
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
           var B1 = strNumber1[i] * Math.pow(8, power1);
           power1 = power1 - 1;
           result1 = result1 + B1;
        }
        let n2 = Number2Length -1;
        let power2 = -1;
        let result2 = 0;
        for(i=0; i<=n2; i++){
            var B2 = strNumber2[i] * Math.pow(8, power2);
            power2 = power2 - 1;
            result2 = result2 + B2;
        }

        let binNumber1 = result1;
        let binNumber2 = result2;
        let binList1 = [];
        let binList2 = [];

        for(i=1; i<100; i++){
            if(binNumber1<=0){
                break
            }
            ni = binNumber1 % 2;
            binNumber1 = (binNumber1 - ni) / 2;
            binList1.unshift(ni);
        }
        let binResult1 = binList1.join("");
        for(i=1; i<5; i++){
            if(binNumber2<=0){
                break
            }
            nf = binNumber2 * 2;
            a = Math.floor(nf);
            binNumber2 = nf - a;
            binList2.push(a);
        }
        let binResult2 = binList2.join("");

        var length1 = binList1.length;
        var length2 = binList2.length;

        if(length1 > 0 && length2 == 0){
            var binary = binResult1;
        }
        else if(length1 == 0 && length2 > 0){
            var binary = "0."+binResult2;
        }
        else{
            var binary = binResult1+"."+binResult2;
        }

        
        output.val(binary);

    }

}