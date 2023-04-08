import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Details from "./components/details/details";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route>
          <Route path="/" element={<Home  />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart/:id" element={<Details />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
