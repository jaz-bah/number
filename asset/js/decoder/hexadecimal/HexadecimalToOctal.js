function hexadecimalToOctal(){

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
        

        let octalNumber1 = Math.floor(result);
        let octalNumber2 = result - octalNumber1;
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