//1/12/25-day 5
//Html,css,Dom
//events


console.log(document);
//DOM Manipulation 
//DOM Html tags converted to js obj and represent as tree structrue
//Manipulation-CRUD Operations

//Create-Retreive-Update-Delete

const erroBtn= document.getElementById("error-btn");

console.log(erroBtn);

const successBtn=document.getElementById("success-btn");

const infoText=document.getElementById("info-text");

function handleClickOnErrorBtn(){
    console.log("Error Button has been cliced");
    infoText.textContent="Error occcured"
    
}
errorBtn.addEventListener("click",handleClickOnErrorBtn)



//todo
//what is html, css ,js
//how to link css in htm