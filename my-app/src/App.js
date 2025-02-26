import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
