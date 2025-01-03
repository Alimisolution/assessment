import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <NavBar/>
      <div className="sm:px-20 px-5 py-5">
        <Outlet/>
      </div>
    </div>
  )
}

export default App