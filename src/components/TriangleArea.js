import { useState } from "react";
import triangle from "./../images/triangle.svg.png";

const TriangleArea = () => {
  const [output, setOutput] = useState("");
  const [sides, setSides] = useState({ a: "", b: "", c: "" });

  const calculateArea = () => {
    const a = Number(sides["a"]);
    const b = Number(sides["b"]);
    const c = Number(sides["c"]);
    if (a + b > c && b + c > a && c + a > b) {
      const s = (a + b + c) / 2;
      const result = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(4);
      setOutput(`Area of a triangle using heron's formula is ${result} units`);
    } else {
      setOutput("Enter valid side lengths such that each side lengths");
    }
  };

  return (
    <section className="area_container">
      <h1>Calculate Area of a triangle</h1>
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
        <input
          value={sides["c"]}
          type="number"
          min="1"
          required={true}
          disabled={sides["a"] === "" || sides["b"] === "" ? true : false}
          placeholder="Enter hypotenuse value (c)"
          onChange={(e) => {
            setOutput("");
            setSides({
              ...sides,
              c: e.target.value,
            });
          }}
        />
      </form>
      <button
        onClick={() => calculateArea()}
        style={{ margin: "0px" }}
        disabled={
          sides["a"] === "" || sides["b"] === "" || sides["c"] === ""
            ? true
            : false
        }
        className={
          sides["a"] === "" || sides["b"] === "" || sides["c"] === ""
            ? "disable"
            : ""
        }
      >
        Calculate
      </button>
      <h3>Heron's formula</h3>
      <h3>
        √<span className="formula_top">(s(s-a)(s-b)(s-c))</span>
      </h3>
      <h2 className="output">{output}</h2>
    </section>
  );
};

export default TriangleArea;
