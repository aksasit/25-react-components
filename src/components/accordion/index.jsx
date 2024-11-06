import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = (getItemId) => {
    if (enableMultiSelection) {
      let cpyMultiple = [...multiple];
      const indexOfCurrentItem = cpyMultiple.indexOf(getItemId);
      if (indexOfCurrentItem === -1) {
        cpyMultiple.push(getItemId);
      } else {
        cpyMultiple.splice(indexOfCurrentItem, 1);
      }
      setMultiple(cpyMultiple);
    } else {
      setSelected(getItemId === selected ? null : getItemId);
    }
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() => handleSelection(dataItem.id)}
              className="item"
              key={data.id}
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found!! </div>
        )}
      </div>
    </div>
  );
}
