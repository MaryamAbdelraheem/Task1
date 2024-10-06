import React, { useState } from "react";
import MessageComponent from "./MessageComponent";
import PaginationComponent from "./PaginationComponent";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const messages = [
    "this is my first",
    "this is my second",
    "this is my third"
  ];

  
  const handleNext = () => {
    setCurrentPage((prev) => (prev < messages.length ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <MessageComponent message={messages[currentPage - 1]} page={currentPage} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={messages.length}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default App;