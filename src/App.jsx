import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import AdminPage from "./pages/AdminPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouteContext } from "./utils/context";
import Private from "./components/Private";
import LoginRoute from "./components/LoginRoute";

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route element={<LoginRoute />} >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Private />}>
          <Route 
            path="dashboard" 
            element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;