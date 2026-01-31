import { useEffect, useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";


// 
const UseEffect = () => {

    const [state, setState] = useState(1);
    //react life cycle event call componentDidMount (useEffect) when component mounted;
    useEffect(() => {
        console.log("useEffect-1 has been triggered");

    })//this triggers after every time the component is rendered 
    useEffect(() => {
        console.log("useEffect-2 has been triggered");

    }, [])//this triggers only after when component is monted or rendered first time
    useEffect(() => {
        console.log("useEffect-3 has been triggered");


    }, [state])//this triggers when changes occurs in state and called after this component is rendered or monted

    const IncrementCount = () => {
        console.log("increment has been clicked");
        setState(state + 1);

    }
    return (<>
        <h1>useEffect Hook</h1>
        <p>Count : {state}</p>
        <PrimaryButton onClick={IncrementCount}>Increment</PrimaryButton>

    </>)
}

export default UseEffect;