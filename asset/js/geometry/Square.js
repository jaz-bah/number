function calculateSquarearea(){
    let output = $("#squareLength");
    let input = output.val();
    let number = eval(input);

    if (input == ""){
        alert("Please input square length");
    } else if (number<0) {
        alert("Length can't be a negetive number");
    } else {
        let result = (number * number);
        output.val(result);
    }
}