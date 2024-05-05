import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <div className="bg-slate-300 h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
