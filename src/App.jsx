import Header from "./components/Header";
import Form from "./components/Form";
import { createContext, useState } from "react";

export const categoryContext = createContext();

function App() {
  const [formData, setFormData] = useState({
    betslipSize: 0,
    category: "Pass Yards",
    betslipCount: [false, false, false, false, false, false],
    betslipBuild: [],
  });

  return (
    <categoryContext.Provider value={[formData, setFormData]}>
      <Header />
      <Form />
    </categoryContext.Provider>
  );
}

export default App;
