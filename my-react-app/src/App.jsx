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

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const appwriteAccount = new AppwriteAccount();
  //check if the user is logged in when app loads
  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await appwriteAccount.getCurrentUser();
        console.log("currrent ", response);
        setUser(currentUser);

      }
      catch (error) {
        console.error("unable to get Current User data", error.message);


      }

    }
    checkUser();

  }, [])


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
      <div>
        <nav>
          <div>
            <h1>My Auth App</h1>

            <div>
              {user ? (
                <>
                  <span>Hello, {user.name}</span>
                  <Link to="/profile">
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    Login
                  </Link>
                  <Link to={"/register"}>
                    Register

                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        <header>
          <h2>
            Welcome to your Auth App
          </h2>
          <p>
            Built with React ,Appwrite and Zustand
          </p>
          {
            !user && (
              <div>
                <Link to={"/register"}>
                  Get Started</Link>
              </div>
            )
          }
        </header>
      </div>



    </>
  )
}

export default App;