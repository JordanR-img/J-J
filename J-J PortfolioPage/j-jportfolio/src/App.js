import HomePage from "../src/pages/HomePage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
