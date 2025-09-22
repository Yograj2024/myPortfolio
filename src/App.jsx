import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useGetTheme } from "./customHooks/useGetAppConfig";

function App() {

  const mode = useGetTheme();

  const rootSec =  document.getElementById("root")
 
  useEffect( () => {
    switch(mode){
      case "dark":
        rootSec.classList.remove("bg-[rgb(245,245,245)]");
        rootSec.classList.add("bg-main")
        break;
      case "light" : 
        rootSec.classList.remove("bg-main");
        rootSec.classList.add("bg-[rgb(245,245,245)]")
        break; 
      default:
        console.warn("Unknown mode:", mode); 
    }
  }, [mode])


  return <>
    <header className ={`fixed h-[60px] w-full z-[2] ani-smooth ${mode == "dark" ? "bg-main" : "bg-[rgb(245,245,245)] border-b border-b-purple-700"}`}>
      <NavBar/>
    </header>

    <main>
      <Outlet/>
    </main>

    <footer></footer>
  </>
}

export default App
