var myString = "This is a \"fun\" string hate";

if(myString.indexOf("hate") === -1){
    console.log("The word hate is not in the string");
}
else{
    console.log("The word hate starts at: " + myString.indexOf("hate"));
}

