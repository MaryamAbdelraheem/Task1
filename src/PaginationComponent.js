//manage nvigation prev-next
import React from "react";

const PaginationComponent = ({ currentPage, totalPages, handleNext, handlePrevious }) => {
  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        previous
      </button>
    
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        next
      </button>
    </div>
  );
};

export default PaginationComponent;