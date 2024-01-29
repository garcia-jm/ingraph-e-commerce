import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, SignIn, SignUp, Contact } from "./pages";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID =
  "515141528039-v1u0gslfphrdc5qcfnk6jelo8f3t06vk.apps.googleusercontent.com";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Router>
          <Routes>
            <Route path="/ingraph-e-commerce/" element={<Home />} />
            <Route path="/ingraph-e-commerce/signin" element={<SignIn />} />
            <Route path="/ingraph-e-commerce/signup" element={<SignUp />} />
            <Route path="/ingraph-e-commerce/contact" element={<Contact />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
