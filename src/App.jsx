import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./sections";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { Footer } from "./sections";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
