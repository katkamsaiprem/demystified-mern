import { useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";


// hook is function 
// starts with use

// useState
// --pass an initial value of a state to the useState(initialState)
// --it returns [value,function to update value]
// --if you set value using set function ,then react will schedule "re-render " of that Component
// --re rendering means invoking the functional Component
// --this time,even if the local binding will be created newly, the latest/changed/mutated state value will assigned to the state variable



const UseState = () => { // better to write componet name with captial letter to make it different from xml element while calling this component

    const getFullName = (firstName, lastName) => {
        console.log("getFullName function invoked");
        return `${firstName}${lastName}`;

    }

    const [userName, setUserName] = useState(() => getFullName("Saiprem", "katkam"))
    console.log(userName);

    const attachLastName = (lastName) => {
        setUserName(` ${lastName}`)
    }


    return (
        <>
            <PrimaryButton name="saiprem" onClick={() => attachLastName("katkam")}>dafdsafad</PrimaryButton>
            <PrimaryButton name="saiprem" onClick={() => attachLastName("katkam")}>fhdgfhdfg</PrimaryButton>

        </>
    )
}
export default UseState;