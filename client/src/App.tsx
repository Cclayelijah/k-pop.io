import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Idols from "./pages/Idols";
import Game from "./pages/Game";
import Compete from "./pages/Compete";
import Archive from "./pages/Archive";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import Login from "./pages/Login";
import { level } from "./global";

function App() {
  level();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/idols" element={<Idols />} />
        <Route path="/compete" element={<Compete />} />
        <Route path="/compete/:game" element={<Game />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
