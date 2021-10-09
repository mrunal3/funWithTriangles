import { useState } from "react";
import triangle from "./../images/triangle.svg.png";

const Hypotenuse = () => {
  const [output, setOutput] = useState("");
  const [sides, setSides] = useState({ a: "", b: "" });

  const calculateHypotenuse = () => {
    const a = Number(sides["a"]) * Number(sides["a"]);
    const b = Number(sides["b"]) * Number(sides["b"]);
    const hypotenuse = Math.sqrt(a + b);
    setOutput(`The length of hypotenuse is ${hypotenuse}`);
  };

  return (
    <section className="hypotenuse_container">
      <h1>Calculate Hypotenuse of a triangle</h1>
      <img alt="" src={triangle} height="150" />
      <form className="form">
        <input
          value={sides["a"]}
          type="number"
          min="1"
          required={true}
          placeholder="Enter height value (a)"
          onChange={(e) => {
            setOutput("");
            setSides({
              ...sides,
              a: e.target.value,
            });
          }}
        />
        <input
          value={sides["b"]}
          type="number"
          min="1"
          required={true}
          disabled={sides["a"] === "" ? true : false}
          placeholder="Enter base value (b)"
          onChange={(e) => {
            setOutput("");
            setSides({
              ...sides,
              b: e.target.value,
            });
          }}
        />
      </form>
      <button
        onClick={() => calculateHypotenuse()}
        style={{ margin: "0px" }}
        disabled={sides["a"] === "" || sides["b"] === "" ? true : false}
        className={sides["a"] === "" || sides["b"] === "" ? "disable" : ""}
      >
        Calculate Hypotenuse
      </button>
      <h3>Hypotenuse formula</h3>
      <h3>
        √<span className="formula_top">(base² + height²)</span>
      </h3>
      <h2 className="output">{output}</h2>
    </section>
  );
};
export default Hypotenuse;
