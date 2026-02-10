import UseEffect from "./concepts/UseEffect";
import PokemonList from "./components/Pokimon";
import { Link, Outlet } from "react-router-dom";
import RegisterUserPage from "./pages/RegisterUserPage";
import TodoApp from "./components/TodoApp";
import LoginPage from "./pages/LoginPage";
import AppwriteAccount from "./appwrite/AppwriteAccount";
import useUserStore from "./stores/useUserStore";
import { useEffect } from "react";

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

      {/* <TodoApp /> */}


      {/* {<RegisterUserPage />} */}
      {/* {<LoginPage />} */}
      



    </>
  )
}

export default App;