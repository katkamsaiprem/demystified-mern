
//day-4
//28/11/25
//lexical environment = own scope+ parents scope reference
//scope chain
//memory and scope
//destructing 
//[Environment] own lexical environment + pointer to its parent lexical environment (own lexical env + pointer to parents lexical env)
//interface in ts

interface CounterFunctions{//we are using interface to define strict type check ,because typeScript automatically adds any as datatype to keys
    increment:()=>number;
    decrement:()=>number;//interface is like contact that any obj should follow
}


const counter=():CounterFunctions=>{
    let count:number=0;

     const increment=():number=>{
        count=count+1;
        console.log("count",count);
        return count
        
    }
    const decrement=():number=>{
        count=count-1
        console.log("count",count);
        return count;
        
    }
    const funcArr:CounterFunctions={increment,decrement}
    return funcArr;
}
 console.log("counter start");
 
 const {increment,decrement}=counter()

 increment();
 increment();
 increment();
 decrement();
 console.log("counter end");
 



//scopeChain

interface innerFunc{
    ():void;
}

let numOne:number=1;
let numTwo:number=2;

const outerFunc=():innerFunc=> {

    
    console.log(numOne)
    console.log(numTwo);
    
    
    let numThree:number=numOne+numTwo
    console.log(numThree);
    

   const innerFunc=():void=> {
        let numFour:number=numThree+1;
        console.log(numFour);
        
    }
    return innerFunc//returning innerFunc body
}


console.log("scopeChain example start");

const returnInnerFunc=outerFunc()


returnInnerFunc();
console.log("scopeChain example end");



//assign




//assign-done
//-converted js and normal func to ts and arrow functions   
//-study about how data travels in memory and scope
