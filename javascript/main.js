var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("Driver's name is: " + this.driver);
       };
}
var myCar = new Car(70, "Addisalem");
var myCar2 = new Car(80, "Addis");
var myCar3 = new Car(90, "AddisHail");
var myCar3 = new Car(100, "Others");

myCar.drive(30,5)
myCar3.logDriver();






