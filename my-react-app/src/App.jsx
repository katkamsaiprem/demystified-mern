import UseEffect from "./concepts/UseEffect";
import PokemonList from "./components/Pokimon";
import { Outlet } from "react-router-dom";

import TodoApp from "./components/TodoApp";
function App() {
  return (
    <>
      {/* <UseEffect></UseEffect> */}
      {/* <PokemonList></PokemonList> */}

      {/* <section>
        <h1>App Layout</h1>
      </section>
      <main>
        <Outlet />
      </main> */}
      <TodoApp />

    </>
  )
}

export default App;