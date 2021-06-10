import { useState } from "react";

export const Circulo = (prop) => {
  const [color, setColor] = useState("orange");
  const cambiarColor = () => {
    setColor(color === "orange" ? "grey" : "orange");
  };

  return (
    <li
      className="circulo"
      style={{
        backgroundColor: color,
        width: window.innerWidth / prop.cantidad,
      }}
      onClick={cambiarColor}
    ></li>
  );
};
