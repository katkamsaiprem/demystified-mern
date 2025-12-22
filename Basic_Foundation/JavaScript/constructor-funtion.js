// function Student(fullName,rollNumber,mobile,email){
//     this.fullName=fullName;
//     this.rollNumber=rollNumber;
//     this.mobile=mobile;
//     this.email=email;

//     this.getFullName=function(){
//         console.log("full Name:",this.fullName)
//     }
// }

// Student.prototype.getMobile=function(){
//     console.log("Mobile: ",this.mobile);

// }
// console.log(Student.prototype);

// const saiprem=new Student("saiprem","422424","9347418009","katukamsaiprem@gmail.com")
// //{}
// //{} is bind to constructor function
// //function will be invoke

// console.log("saiprem",saiprem);

/*
Bank Application

--properties          ---prototype
 AccountName            withdraw
 AccountNumber          deposite
 balance                CheckBalance 

*/

function BankAccount(ownerName, accountNumber, initialBalance) {
    this.accountNumber = accountNumber
    this.balance = initialBalance
    this.ownerName = ownerName

    this.accountDetails = function () {
        console.log(`ownerName :${this.ownerName} accountNumber :${this.accountNumber} Balance:${this.balance}`);

    }

}

const saiprem = new BankAccount("saiprem", 3453453, 200)
console.log(saiprem);


BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        console.log("insufficient");

    }
    else if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`withdraw ${amount},new balance ${this.balance}`);
    }
    else {
        console.log("amount should not be negative");
    }

}
BankAccount.prototype.deposite = function (amount) {
    if (amount < 0) {
        console.log("amount should not be negative");
    }
    else {
        this.balance += amount;
        console.log(`deposite amount ${amount},new balance${this.balance}`);

    }

}
BankAccount.prototype.checkBalance = function () { console.log(`your balance ${this.balance}`) };


saiprem.checkBalance()
saiprem.withdraw(10)
saiprem.deposite(10)

saiprem.accountDetails();//every instance ,constructor create of copy of accountDetails prop ,so it is waste of memory ,so better to store methods in prototype ,because instances __proto__ contains prototype reference ,not values