import React, { useState } from "react";
import "./Todo.css";
// import Fab from "@material-ui/core/Fab";
import Fab from "@mui/material/Fab";

// import AddIcon from "@material-ui/icons/Add";
import AddIcon from "@mui/icons-material/Add";
import List from "./Lists";
const ToDo = () => {
  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);

  const ItemEvent = (event) => {
    setinputList(event.target.value);
  };

  const AddItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  return (
    <>
      <section className="mainbg">
        <div className="mainbox">
          <br />
          <h1 className="mainh1">ToDo List</h1>

          <div className="flex-box">
            <input
              type="text"
              placeholder="Add item"
              onChange={ItemEvent}
              value={inputList}
            />
            <button className="plusbtn" onClick={AddItems}>
              <Fab
                aria-label="add"
                className="Add"
                style={{
                  backgroundColor: "#fff",
                  width: "40px",
                  height: "40px",
                }}
              >
                <AddIcon
                  style={{
                    color: "#264a55",
                    fontSize: "35px",
                  }}
                />
              </Fab>
            </button>
          </div>
          <ul>
            {Items.map((itemsValue, index) => {
              return <List key={index} id={index} text={itemsValue} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ToDo;
