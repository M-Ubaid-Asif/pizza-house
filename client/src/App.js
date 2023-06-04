import Header from "./components/Header";
import Notifications from "./pages/Notifications";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/notifications" Component={Notifications}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
