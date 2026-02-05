import { useEffect } from "react";
import useTodoStore from "../stores/useTodoStore";

const TodoListing = () => {

    const todos = useTodoStore(({ todos }) => (todos))//we are accessing the prev data using callback ,this callback returns todos

    useEffect(() => {
        console.log("re-render");
        console.log(todos);

    })
    return (

        <div>
            {todos.map((todo, index) => {//key prop helps react tod identify items have changed ,added or removed

                return <h1 key={index} >{todo}</h1>//d
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