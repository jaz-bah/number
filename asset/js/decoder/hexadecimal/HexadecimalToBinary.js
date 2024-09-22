function hexadecimalToBinary(){
    
    let output = $("#inputHexadecimal");
    let input = output.val();
    
    if (input == ""){
        alert("Please input a number");
    } else {

        let number1 = input;
        let number2 = "";

        var array = input.split("");

        for(i=0; i < array.length; i++){
            if(array[i] == "."){
                number1 = array.slice(0, i);
                let x = i + 1;
                number2 = array.slice(x);
            }
        }
        
        let power = -number2.length;
        let number = [...number1,...number2];
        let length = number.length - 1;
        let result = 0;
        
        for(i = length; i>=0; i--){
            if (number[i] == "A"){
        
                let n = 10 * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            } else if (number[i] == "B"){
                
                let n = 11 * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            } else if (number[i] == "C"){
                
                let n = 12 * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            } else if (number[i] == "D"){
                
                let n = 13 * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            } else if (number[i] == "E"){
                
                let n = 14 * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            } else if (number[i] == "F"){
                
                let n = 15 * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            } else {
                
                let n = number[i] * Math.pow(16, power);
                result = result + n;
                power = power + 1;
        
            }
        }
        

        let binNumber1 = Math.floor(result);
        let binNumber2 = result - binNumber1;
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
        for(i=1; i<100; i++){
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