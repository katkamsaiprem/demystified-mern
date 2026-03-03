
import AppwriteTablesDB from "../appwrite-serivces/AppwriteTablesDB";
import { useQuery } from "@tanstack/react-query";

const TodoListing = () => {

    // const todos = useTodoStore(({ todos }) => (todos))//we are accessing the prev data using callback ,this callback returns todos

    const appwriteTablesDB = new AppwriteTablesDB();
    const fetchAllTodos = async () => {
        try {
            const todos = await appwriteTablesDB.getAllRecords(import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID);
            console.log(todos);

            return todos;
        }
        catch (err) {
            console.error(err);

        }
    }

    //useQuery -used to Read/fetch data -store result in cache --runs automatically on mount --refetchs in background
    const { data: todos, isLoading, isPending: isTodosPending, isFetching, isError, error } = useQuery({//changing data name into todos
        queryKey: ["todos"],
        queryFn: fetchAllTodos,
        throwOnError: (error) => {//to observe the error behaviour
            console.log(error.message);
        }
    })


    if (isFetching) {
        console.log("isFetching is true")
    }

    // if (isTodosPending) {
    //     console.log("isPending is true");

    // }


    if (isTodosPending && isTodosPending) {//only on initial onmount it triggers
        return <h1 className="text-5xl">Todos are Loading for the first time.......</h1>
    }
    return (
        <div className="flex flex-col items-center gap-3">
            {
                isLoading && <p>Loading...</p>
            }
            {
                isFetching && <p>Fetching data...</p>//if you query then isFetching will be true

            }
            {


                todos?.map((todo) => {//key prop helps react tod identify items have changed ,added or removed
                    return <article key={todo?.$id} className="p-3 bg-red-200 rounded-md shadow-sm">
                        <h1 className="font-semibold text-xl">{todo?.text}</h1>
                        <p>{todo.description ? todo.description : "no desciption"}</p>
                    </article>
                })}
        </div>


    )
}

export default TodoListing


// In this code, `index` and `key` are used in the map function that renders your todo items:

// ## `index`
// - The second parameter in the `map()` function
// - Represents the position of each element in the `todos` array (0, 1, 2, ...)
// - Used to access the current item's position during iteration

// ## `key`
// - A special React prop required when rendering lists
// - Helps React identify which items have changed, been added, or removed
// - Enables efficient re-rendering by tracking each element uniquely

// **Important Note:** Using `index` as a `key` is **not recommended** for dynamic lists where items can be added, removed, or reordered. This can cause:
// - Rendering bugs
// - Performance issues
// - Loss of component state

// **Better approach:** Use a unique identifier from your data:

// ````javascript
// // ...existing code...
// return (
//     <div>
//         {todos.map((todo) => {
//             return <h1 key={todo.id}>{todo}</h1>
//         })}
//     </div>
// )
// // ...existing code...
// ````

// If your todos are just strings (as they appear to be), consider restructuring them as objects with unique IDs, or use a library like `uuid` to generate unique keys.