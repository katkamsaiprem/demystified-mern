
//Day-3
//27/11/25

//normal functions vs arrow func vs ananomayas

//we can change key and values or create of obj with const,but we cannot obj's variable reference,same with array

//scope-golbal , local ,script

//when we run js ,it creates global execution context,global scope means current js script ,when js trigger new func call ,it creates local scope excution context
//script scope stores all let const variables during js creation phase

//in js creation phase ,it scans the js script and places var and normal functions in global scope and assigns var with undefined and normal functions 
// with its body, let and const are stored in script scope and not assigns anything ,
// but shows unavliable as value,functions are assigned with its body, so we call function from any where in js script
//callStack
//callstack contains js execution context

//this - refers to obj
//arrow func not have this,so it take parents obj as this value,like it search top layers
//normal func this values is obj that called

//first class func
//lexical envirnoment



console.log("Functions Hoisting and Function Scope");


function ScopeFunc(){//in normal func have arguments obj by using it we can access parameters
  console.log(arguments)
  console.log(arguments["0"])
  


  console.log(typeof arguments)
}

ScopeFunc(1,true,"sai")

//arrow func

const one=()=>"fas"


let arrowFunc=(arg)=>{//not have arguments obj
 console.log(arg);//referenceError
 
}

arrowFunc("arguments in arrowfunc")

//normalFunctions vs arrowFunc
// --syntax differenc and arguments obj not present in arrowFunc



//obj

const objStore={//we can change key and values of obj with const,but we cannot objStore reference
    name:"sd"
}


//functions expreession(math expression) means something = something
//F = ma
//y= x2+3x+5

//anonamays func
const func= function(){
    console.log("anonamays functions");
    
}
func();

console.log("func hoisting and function scope");


function NormalFunc(num,bool,str){
    console.log("Inside normal func");
    console.log(num,bool,str);
    let username="saiprem normal"
   console.log(username);
   
    
    
}
NormalFunc(1,true,"hell")

const arrowFun=(num,bool,str)=>{
  console.log("Inside arrow func");
    console.log(num,bool,str);
    let username="saiprem arrow"
   console.log(username);
}
arrowFun(1,true,"hell")