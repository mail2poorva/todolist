import React, { useState } from "react";
import Delete from "@material-ui/icons/Delete";
const List = (props) => {
  const [line, setline] = useState(false);

  const CutLine = () => {
    setline(true);
  };

  return (
    <li
      style={{
        textDecoration: line ? "line-through" : "none",
      }}
    >
      <button className="delete-btn" onClick={CutLine}>
        <Delete className="delete" />
      </button>
      {props.text}
      <hr />
    </li>
  );
};

export default List;
