import { useState } from "react";
import useTodoStore from '../stores/useTodoStore';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AppwriteTablesDB from "../appwrite-serivces/AppwriteTablesDB";
import { Bounce, toast } from "react-toastify";

//this component is used to store todos into store
const TodoEditor = () => {



    const [todo, setTodo] = useState("");

    const appwriteTableDB = new AppwriteTablesDB()
    const queryClient = useQueryClient()
    //  const createTodos = useTodoStore((state) => (state.createTodos))//use callback to access prev state func
    const handleTodoTextChange = (e) => {
        setTodo(e.target.value);
    }

    const createTodo = async () => {


        const newTodo = await appwriteTableDB.CreateRecord(import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID, { text: todo, description: "" })
        //createTodos(todo);

        return newTodo;


    }

    //useMutation --used to create/update/delete data --runs on demand (on button clicked) --doesnt cache by default --generally paired wiht invalideQuaries to refresh the cached data , -- it returns instance to with properties and methods 
    const mutation = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            //invalidate the cache and refetch the todos
            queryClient.invalidateQueries({ queryKey: ['todos'] })
            setTodo("");
            toast.success("New todo has been added, successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        },
        onError: (err) => {
            console.error(err);
            toast.error(err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        },
    })
    const handleTodoSubmit = (e) => {
        e.preventDefault()

        //trigger the mutation
        mutation.mutate()

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


