import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CssGlobal from "./page/tailwind.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CssGlobal />} />
      </Routes>
    </Router>
  );
}

export default App;
