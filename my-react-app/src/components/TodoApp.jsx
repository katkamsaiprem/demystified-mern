import TodoEditor from "./TodoEditor";
import TodoListing from "./TodoListing";
const TodoApp = () => {

    return (
        <div className="flex p-6 gap-3 flex-col items-center justify-center">
            <TodoEditor />
            <TodoListing />

        </div>



    )
}
export default TodoApp;