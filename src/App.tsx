import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ingraph-e-commerce/" element={<Home />} />
          <Route path="/ingraph-e-commerce/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
