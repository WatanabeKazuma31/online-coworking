// react-router-domのインポートを追加
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
import Registration from "./components/Registration";
import UserLogin from "./components/UserLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div classNmae="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userlogin" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
