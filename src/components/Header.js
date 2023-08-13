import React from "react";
// Redux
import { useSelector } from "react-redux";
function Header() {
  const score = useSelector((state) => state.memory.score);
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ marginTop: 0 }}>Score: {score}</h3>
    </div>
  );
}

export default Header;
