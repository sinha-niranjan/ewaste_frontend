import "./App.css";
import Header from "./Components/Header/Header";

import HomeDetail from "./Components/HomeDetail/HomeDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import BuyerLogin from "./Components/BuyerLogin/BuyerLogin";
import AdminLogin from "./Components/AdminLogin/AdminLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeDetail />} />
          <Route exact path="/user_login" element={<UserLogin />} />
          <Route exact path="/buyer_login" element={<BuyerLogin />} />
          <Route exact path="/admin_login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
