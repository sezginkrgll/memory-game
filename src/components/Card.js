import { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { pairing, openedReset } from "../redux/memorySlice";

function Card({ img, id }) {
  const matches = useSelector((state) => state.memory.matches);
  const find = matches.find((items) => items === id);

  const opened = useSelector((state) => state.memory.opened);

  const [isClicked, setIsCliked] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (find === id) {
      return;
    }
    if (opened !== 2) {
      if (!isClicked) {
        setIsCliked(!isClicked);
        dispatch(pairing(id));
        if (opened === 1) {
          setTimeout(() => dispatch(openedReset()), 600);
        }
      }
    }
  };

  if (isClicked === true && opened === 0) {
    setIsCliked(false);
  }
  
  return (
    <div
      className={`card${isClicked ? " opened" : ""}${find ? " matched" : ""}`}
      onClick={handleClick}
    >
      <div className="front">?</div>
      <div className="back">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Card;
