import Layout from "./Layout";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
