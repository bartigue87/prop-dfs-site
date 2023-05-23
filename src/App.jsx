import Form from "./components/Form";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyEntriesPage from "./pages/MyEntriesPage";

export const categoryContext = createContext();

function App() {
  const [formData, setFormData] = useState({
    betslipSize: 0,
    category: "Pass Yards",
    betslipBuild: [],
    myEntries: [],
  });

  let routes = (
    <Routes>
      <Route exact path="/" element={<Form />} />
      <Route path="/entries" element={<MyEntriesPage />} />
    </Routes>
  );

  return (
    <categoryContext.Provider value={[formData, setFormData]}>
      <Router>{routes}</Router>
    </categoryContext.Provider>
  );
}

export default App;
