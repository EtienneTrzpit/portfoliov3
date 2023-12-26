import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Confidentiality from "./routes/Confidentiality";
import LegalNotice from "./routes/LegalNotice";
import Cookies from "./routes/Cookies";
import Error from "./routes/Error";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confidentiality" element={<Confidentiality />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
