import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Post from "./Components/Post";
import Contact from "./Components/Contact";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import "./Components/Responsive.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
