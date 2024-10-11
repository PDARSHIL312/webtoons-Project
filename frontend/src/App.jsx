import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WebtoonUploadForm from "./pages/WebtoonUploadForm";
// import NotFound from "./pages/NotFound"; // Import NotFound component

function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/upload" element={<WebtoonUploadForm />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NotFound />} /> Custom 404 Page */}
        </Routes>
      </Router>
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);

export default App;
