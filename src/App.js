import Content from "./components/Content";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} /> 
        <Route path="/adminlogin" element={<AdminLogin />} /> 
        <Route path="/adminpanel" element={<AdminPanel />} /> 
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
