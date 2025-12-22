const fullName= document.getElementById("fullName")

const emailInput=document.getElementById("email");

const passwordInput=document.getElementById("password");

const btn=document.getElementById("btn-register")

const genderMale=document.getElementById("male")
const genderFemale=document.getElementById("female")

const batch=document.getElementById("Batch")

const btnHandler=()=>{
    const obj={
        fullName: fullName.value,
        emailInput: emailInput.value,
        passwordInput: passwordInput.value,
        gender: genderMale.checked?genderMale.value:genderFemale.value,
        batch: batch.value,

        
    }
    console.log(obj);
    
    
    
    
}

btn.addEventListener("click",btnHandler)
