import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <div className="bg-slate-100 h-full">
      <Routes>
        <Route path="/" element={<AdminPage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
