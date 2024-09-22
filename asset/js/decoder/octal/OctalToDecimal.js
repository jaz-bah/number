function octalTodecimal(){

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

         var result = result1 + result2;

         output.val(result);

    }
}