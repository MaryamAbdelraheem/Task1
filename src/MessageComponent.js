//display the message
import React from "react";

const MessageComponent = ({ message, page }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{message}</h3>
      <p className="number-circle">{page}</p>
    </div>
  );
};

export default MessageComponent;