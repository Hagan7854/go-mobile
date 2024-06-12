import "./App.css";
import LandingPage from "./component/landing-page/landing-page";
import Login from "./component/pages/authentication/login/login";
import Dashboard from "./component/pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );

  // return (
  //   <div className="App">
  //     <Login />
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <Dashboard />
  //   </div>
  // );
}

export default App;
