import "./App.css";
import LandingPage from "./component/landing-page/landing-page";
import Login from "./component/pages/authentication/login";

function App() {
  // return (
  //   <div className="App">
  //     <div className="landing-page">
  //       <LandingPage />
  //     </div>
  //   </div>
  // );

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
