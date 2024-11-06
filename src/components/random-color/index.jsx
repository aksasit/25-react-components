import { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeColor, setTypeColor] = useState("HEX");
  
  const utilityFunction = (len) => {
    return Math.floor(Math.random() * len);
  };

  const generateHexColor = () => {
    let tempArr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += tempArr[utilityFunction(tempArr.length)];
    }
    setColor(hex);
  };

  const generateRgbColor = () => {
    let r = utilityFunction(256);
    let g = utilityFunction(256);
    let b = utilityFunction(256);

    setColor(`RGB(${r},${g},${b})`);
  };
  
//   Comment and see what it is needed for
  useEffect(() => {
    if (typeColor === "HEX") generateHexColor();
    else generateRgbColor();
  }, [typeColor]);
 
  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
      <div>
        <button onClick={() => setTypeColor("HEX")}>Create HEX Color</button>
        <button onClick={() => setTypeColor("RGB")}>Create RGB Color</button>
        {/* Infinte loop reason */}
        <button
          onClick={typeColor === "HEX" ? generateHexColor : generateRgbColor}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >        
        <h1>{typeColor === "HEX" ? "HEX Color" : "RGB Color"}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
