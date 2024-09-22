function calculateCirclearea(){
    let output = $("#circleRadious");
    let input = output.val();
    let number = eval(input);

    if (input == ""){
        alert("Please input circle radious");
    } else if (number<0) {
        alert("Radious can't be a negetive number");
    } else {
        const pie = 3.14159265 ;
        let result = pie * (number * number);
        output.val(result);
    }
}