import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./screens/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoutes";
const Login = lazy(() => import("./screens/Login/Login"));
const Register = lazy(() => import("./screens/Register/Register"));
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
         
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more private routes here */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
