// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
// import
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
