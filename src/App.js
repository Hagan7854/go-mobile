import "./App.css";
import LandingPage from "./component/landing-page/landing-page";
import Login from "./component/pages/authentication/login/login";
import Dashboard from "./component/pages/dashboard/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
