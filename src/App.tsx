import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ingraph-e-commerce/" element={<Home />} />
          <Route path="/ingraph-e-commerce/signin" element={<SignIn />} />
          <Route path="/ingraph-e-commerce/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
