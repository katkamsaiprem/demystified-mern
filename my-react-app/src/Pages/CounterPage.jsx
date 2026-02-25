import { useReducer } from "react"


const CounterPage = () => {

    const initalValue = { count: 1 };

    const reducer = (state, action) => {

        switch (action.type) {
            case "increment":
                return { count: state.count + 1 }
            case "decrement":
                return { count: state.count - 1 }

            case 'reset':
                return { count: 0 }
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, initalValue)
    const incrementHandler = () => {

        dispatch({ type: "increment" })

    }
    const decrementHandler = () => {
        dispatch({ type: "decrement" })
    }
    const resetHandler = () => {
        dispatch({ type: "reset" })
    }



    return (
        <>
            <h1>{state.count}</h1>
            <div className="flex gap-2">
                <button onClick={incrementHandler} className="bg-red-500 text-lg text-white p-3 rounded-md">increment</button>
                <button onClick={decrementHandler} className="bg-red-500 text-lg text-white p-3 rounded-md">decrement</button>
                <button onClick={resetHandler} className="bg-red-500 text-lg text-white p-3 rounded-md">reset</button>
            </div>




        </>
    )
}

export default CounterPage;