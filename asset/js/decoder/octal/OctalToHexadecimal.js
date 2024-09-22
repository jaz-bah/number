function octalToHexadecimal(){

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

        let hexNumber1 = result1;
        let hexNumber2 = result2;
        let hexList1 = [];
        let hexList2 = [];

        for(i=1; i<100; i++){
            if(hexNumber1<=0){
                break
            }
            ni = hexNumber1 % 16;
            hexNumber1 = (hexNumber1 - ni) / 16;

            if(ni == 10){
                hexList1.unshift("A");
            } else if(ni == 11){
                hexList1.unshift("B");
            } else if(ni == 12){
                hexList1.unshift("C");
            } else if(ni == 13){
                hexList1.unshift("D");
            } else if(ni == 14){
                hexList1.unshift("E");
            } else if(ni == 15){
                hexList1.unshift("F");
            } else{
                hexList1.unshift(ni);
            }
        }
        let hexResult1 = hexList1.join("");
        for(i=1; i<5; i++){
            if(hexNumber2<=0){
                break
            }
            nf = hexNumber2 * 16;
            a = Math.floor(nf);
            hexNumber2 = nf - a;
            if(a == 10){
                hexList2.push("A");
            } else if(a == 11){
                hexList2.push("B");
            } else if(a == 12){
                hexList2.push("C");
            } else if(a == 13){
                hexList2.push("D");
            } else if(a == 14){
                hexList2.push("E");
            } else if(a == 15){
                hexList2.push("F");
            } else{
                hexList2.push(a);
            }
        }
        let hexResult2 = hexList2.join("");

        var length1 = hexList1.length;
        var length2 = hexList2.length;

        if(length1 > 0 && length2 == 0){
            var hex = hexResult1;
        }
        else if(length1 == 0 && length2 > 0){
            var hex = "0."+hexResult2;
        }
        else{
            var hex = hexResult1+"."+hexResult2;
        }

        
        output.val(hex);

    }

}