import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ingraph-e-commerce/" element={<Home />} />
          <Route path="/ingraph-e-commerce/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
