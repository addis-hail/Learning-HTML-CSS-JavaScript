function getAverage (a,b,c,d,e,f){
    var average = (a + b + c + d + e + f)/2;//local variable
    console.log(average);
    return average;
}
 var myResult = getAverage(28,12,88,99,11,10);//global variable


function logResult(){
    console.log("The average is: " + myResult + " insde the functiom");
}
logResult();
