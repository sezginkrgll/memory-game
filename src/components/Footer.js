import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { matchesReset } from "../redux/memorySlice";

function Footer() {
  const matches = useSelector((state) => state.memory.matches);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      {matches.length === 15 && (
        <div className="btn" onClick={() => dispatch(matchesReset())}>
          Play again
        </div>
      )}
    </div>
  );
}

export default Footer;
