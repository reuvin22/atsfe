import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import AdminPage from "./pages/AdminPage"
import Dashboard from "./pages/AdminPages/Dashboard"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminPage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
