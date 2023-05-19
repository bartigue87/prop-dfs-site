import Header from "./components/Header";
import Form from "./components/Form";
import { createContext, useState } from "react";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={[page, setPage]}>
      <Header />
      <Form />
    </PageContext.Provider>
  );
}

export default App;
