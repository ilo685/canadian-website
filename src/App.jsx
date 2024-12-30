// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CanadaImmigrationForm from "./CanadaImmigrationForm";
// import DeadlineNoticePage from "./DeadlineNoticePage";
import HomePage from "./pages/HomePage";
import DeadlineNotice from "./components/DeadLine";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deadline" element={< DeadlineNotice/>} />
      </Routes>
    </Router>
  );
};

export default App;