// //Arrow functions doesnt have this value,so arrow functions takes this value from parents lexical environment

// const obj={
//  name:"sai",
//  show:()=>{
//     console.log(this.name)//undefined
//  }   
// }
// obj.show()

// const obj1={//innerFunc is arrow function ,so it doesnt have this keyword so it take this from parents lexical environment
//  name:"sai",
//  show(){
//     const innerFunc=()=>{
//         console.log(this.name);
    
//     }
//   innerFunc()
//  }
// }
// obj1.show()





//Example
console.log("this keyword value in different execution context")

function normalFunctions(num,boo,str){
    console.log("this in normal function",this);
          
}
normalFunctions(1,true,"saiprem")

console.log("GEC: ",this)

const obj={
    username:"saiprem",
    getName : function (){
        console.log("inside obj");
        console.log(this);
    },
    age: 24,
    location: "durgam cheruvu",
    getLocation:()=>{
        console.log("Insider getLocation arrow function",this);
    },
    getAge: function(){
        console.log("this inside getAge normal func",this);
        const innerFunc=()=>{
            console.log("this inside innerFunc -> getAge: ",this);
        }
        return innerFunc;
        
    }
        
}
obj.getLocation();
const classicFuncBody=obj.getAge;
const returnedInnerFunc=classicFuncBody();
returnedInnerFunc();

const arrowFunction = (num,bool,str)=>{
    console.log("Inside Arrow function");
    console.log(this);
    
    
}
arrowFunction(1,true,"Hello World")
    
        
        


