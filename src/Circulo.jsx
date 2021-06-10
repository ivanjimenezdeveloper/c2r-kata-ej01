import { useState } from "react";

export const Circulo = () => {
  const [color, setColor] = useState("orange");
  const cambiarColor = () => {
    setColor(color === "orange" ? "grey" : "orange");
  };

  return (
    <li
      className="circulo"
      style={{ backgroundColor: color }}
      onClick={cambiarColor}
    ></li>
  );
};
