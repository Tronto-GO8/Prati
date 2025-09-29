import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CssModule from "./page/cssModule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CssModule/>} />
      </Routes>
    </Router>
  );
}

export default App;
