import "./App.css";
import Header from "./Components/Header/Header";

import HomeDetail from "./Components/HomeDetail/HomeDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeDetail />} />
          <Route exact path="/user_login" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
