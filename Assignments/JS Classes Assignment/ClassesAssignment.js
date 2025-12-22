// class Student {


//     constructor(name, age, course) {// constructor initializes new obj properties ,when new instance of the class is created
//         this.name = name;
//         this.age = age;
//         this.course = course;


//     }

//     getDetail() {
//         console.log(`Name:${this.name},Age:${this.age},Course:${this.course}`);// this refers to saiprem instance , or any instance of the class that is used to call this function


//     }
//     isAdult() {

//         this.age >= 18 ? console.log(`is Student Adult: true`) : console.log(`is Student Adult: false`);


//     }



// }
// const saiprem = new Student("saiprem", 22, "csgd")// new keyword is used to create instance with properties defined in Student constructior
//instance creation = new object + new __proto__ created and linked to its class prototype+ construction excution
// saiprem.getDetail();//we need to use instance of class to access methods 
// saiprem.isAdult();


//-------------------------Task 2. BankAccount--------------------------
// class BankAccount {
//     constructor(accountHolder, balance) {//constructor initializes new obj properties when new instance of the class is created
//         this.accountHolder = accountHolder;// we are created obj proptery and assigned balance value from parameter
//         this.balance = balance;

//     }
//     deposit(amount) {
//         this.balance += amount;//this refers to instance which is used to call this fumction
//         console.log(`deposit amount:${amount},current balance: ${this.balance}`);

//     }
//     withdraw(amount) {
//         if (this.balance >= amount) {
//             this.balance -= amount;
//             console.log(`withdraw amount:${amount},current balance: ${this.balance}`);


//         }
//     }
//     getBalance() {
//         console.log(`Current balance:${this.balance} `);

//     }

// }
// const saiprem = new BankAccount("saiprem", 500);//instance creation = new object + new __proto__ created and linked to its class prototype + construction excution
// saiprem.deposit(200)
// saiprem.withdraw(200)
// saiprem.getBalance();
// //-----------------------------------Task-3 Product Class------------------------------------------------------

// class Product {
//     constructor(name, price, quanity) {//constructor initializes new obj properties when new instance of the class is created
//         this.name = name;
//         this.quanity = quanity;
//         this.price = price;
//     }

//     getTotalValue() {
//         console.log(`Total value ${this.quanity * this.price}`);


//     }
//     updateQuantity(newQuantity) {
//         this.quanity += newQuantity;
//         console.log(`updated Quantity:${this.quanity}`);

//     }


// }

// const ProductOne = new Product("chips", 20, 2);//instance creation = new object + new __proto__ created and linked to its class prototype+ construction excution
// ProductOne.getTotalValue()
// ProductOne.updateQuantity(2)
//---------------------------------Task 4 Rectangle Class----------------------------------------------
// class Rectangle {
//     constructor(width, height) {//constructor initializes new object's properties when new instance of the class is created
//         this.width = width;
//         this.height = height;

//     }
//     getArea() {
//         console.log(`Area of Rectangle:${this.width * this.height}`);

//     }
//     getPerimeter() {
//         console.log(`Perimetere of Rectangle:${2 * (this.width + this.height)}`);

//     }
// }
// const rectangle = new Rectangle(200, 300)//instance creation = new object + new __proto__ created and linked to its class prototype+ construction excution
// rectangle.getArea()
// rectangle.getPerimeter()
// --------------------------------------------Task 5 Debug and Explain-------------------------------------------
// class User {
//     constructor(name) {//constructor initializes new objs properties when new instance of the class is created
//         name = name;
//     }
//     sayHelo() {
//         console.log("He lo", this.name);
//     }
// }
// const u1 = new User("Sandeep"); // instance creation = new object + new __proto__ created and linked to its class prototype+ construction excution
// u1.sayHe lo();


// Questions


// 1. Why is undefined printed ?
    
//Ans- we are try to log  this.name , which is not property of u1 instance , and inside constructor we are not assigning name to obj property


//     2. What is missing in the constructor ?
 //Ans-  inside constructor we are not assigning name to obj property, correct one should be this.name = name;

//         3. Fix the code. 
 //Ans- inside the constructor change name=name into this.name=name , to create name property for obj and assign name value 


// 4. Explain what this refers to here.
 //Ans- this refers to u1 instance 

