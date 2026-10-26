import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import PizzaStoryCaseStudy from "./components/PizzaStoryCaseStudy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Make sure path="/" points to Home */}
        <Route
          path="/case-study/pizza-story"
          element={<PizzaStoryCaseStudy />}
        />
      </Routes>
      <ToastContainer position="top-center" theme="dark" />
    </Router>
  );
}

export default App;
