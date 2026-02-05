import { useState } from "react";
import useTodoStore from '../stores/useTodoStore';

//this component is used to store todos into store
const TodoEditor = () => {



    const [todo, setTodo] = useState("");

    const createTodos = useTodoStore((state) => (state.createTodos))//use callback to access prev state func
    const handleTodoTextChange = (e) => {
        setTodo(e.target.value);
    }


    const handleTodoSubmit = (e) => {
        try {
            e.preventDefault();
            createTodos(todo);

        }
        catch (error) {
            console.error(error)
        }
        finally {
            setTodo("")
        }
    }
    return (
        <>
            <form onSubmit={handleTodoSubmit}>
                <input type="text" onChange={handleTodoTextChange} />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
//onSubmit and onChange are events
export default TodoEditor


