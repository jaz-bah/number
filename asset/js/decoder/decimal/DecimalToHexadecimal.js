function decimalTohexadecimal(){

    let output = $("#inputDecimal");
    let input = output.val();
    let number = eval(input);

    if (input == 0){
        alert("Please input a number");
    } else if (number<0){
        alert("Please input a positive number");
    } else {
        let number1 = Math.floor(input);
        let number2 = input - number1;
        var list1 = [];
        var list2 = [];

        for(i=1; i<=100; i++){
            if(number1<=0){
                break
            } else {
                ni = number1 % 16;
                number1 = (number1 - ni) / 16;

                if(ni == 10){
                    list1.unshift("A");
                } else if (ni == 11){
                    list1.unshift("B");
                } else if (ni == 12){
                    list1.unshift("C");
                } else if (ni == 13){
                    list1.unshift("D");
                } else if (ni == 14){
                    list1.unshift("E");
                } else if (ni == 15){
                    list1.unshift("F");
                } else {
                    list1.unshift(ni);
                }
            }
        }
        var result1 = list1.join("");
        
        for(i=1; i<=5; i++){
            if(number2<=0){
                break
            } else {
                nf = number2 * 16;
                a = Math.floor(nf);
                number2 = nf - a;
    
                if(a == 10){
                    list2.push("A");
                } else if (a == 11){
                    list2.push("B");
                } else if (a == 12){
                    list2.push("C");
                } else if (a == 13){
                    list2.push("D");
                } else if (a == 14){
                    list2.push("E");
                } else if (a == 15){
                    list2.push("F");
                } else {
                    list2.push(a);
                } 
            }
        }
        var result2 = list2.join("");

        var length1 = list1.length;
        var length2 = list2.length;

        if(length1 > 0 && length2 == 0){
            var hex = result1;
        }
        else if(length1 == 0 && length2 > 0){
            var hex = "0."+result2;
        }
        else{
            var hex = result1+"."+result2;
        }
        
        output.val(hex);
    }   
}



    
    




    