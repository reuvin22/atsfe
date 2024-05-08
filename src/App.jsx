import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<AdminPage />}/>
        </Routes>
    </div>
  )
}

export default App
