import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./form.jsx";
import Register from "./register.jsx";
import Home from "./home.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
