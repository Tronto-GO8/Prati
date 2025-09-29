import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CssGlobal from "./page/css-global";


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
