function triangleArea(){
    let output1 = $("#triangleHeight");
    let output2 = $("#triangleBase");
    let inputHeight = output1.val();
    let inputBase = output2.val();
    let height = eval(inputHeight);
    let base = eval(inputBase);

    if (inputHeight == "" || inputBase == ""){
        alert("Please input height and base");
    } else if (height<0 || base<0) {
        alert("Height or base can't be a negetive number");
    } else {
        let result = (1/2) * height * base;
        output1.val(result);
        output2.val("");
    }
}