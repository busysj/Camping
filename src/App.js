import "./App.css";

import MainPage from "./components/MainPage";
import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <MainPage />
      <FooterPage />
    </div>
  );
}

export default App;
