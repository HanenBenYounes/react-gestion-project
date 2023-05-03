import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Layout from "./layout/Layout";
import Capitain from "./pages/capitain/Capitain";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Diver from "./pages/diver/Diver";
import Employe from "./pages/employe/Employe";
import Technicien from "./pages/tech/Technicien";
function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/Technicien" element={<Technicien />} />
          <Route path="/Employe" element={<Employe />} />
          <Route path="/Diver" element={<Diver />} />
          <Route path="/Capitain" element={<Capitain />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
