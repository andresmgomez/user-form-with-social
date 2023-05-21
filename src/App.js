import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserForm from "./component/UserForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
