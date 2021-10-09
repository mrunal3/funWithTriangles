import { useState } from "react";

const CheckTriangle = () => {
  const [output, setOutput] = useState("");
  const [angles, setAngles] = useState({ 1: "", 2: "", 3: "" });

  const checkIsTriangle = () => {
    const sum = Number(angles["1"]) + Number(angles["2"]) + Number(angles["3"]);
    if (sum === 180) {
      setOutput("Yuhu! these angles can make a triangle.");
    } else {
      setOutput("Oops! these angles cannot make a triangle.");
    }
  };

  return (
    <section className="check_triangle_container">
      <h1>Angles of triangle</h1>
      <form className="form">
        <input
          value={angles["1"]}
          type="number"
          min="1"
          max="180"
          required=""
          placeholder="Enter first angle"
          onChange={(e) => {
            setOutput("");
            setAngles({
              ...angles,
              1: e.target.value,
            });
          }}
        />
        <input
          value={angles["2"]}
          type="number"
          min="1"
          max="180"
          required=""
          placeholder="Enter second angle"
          onChange={(e) => {
            setOutput("");
            setAngles({
              ...angles,
              2: e.target.value,
            });
          }}
        />
        <input
          value={angles["3"]}
          type="number"
          min="1"
          max="180"
          required=""
          placeholder="Enter third angle"
          onChange={(e) => {
            setOutput("");
            setAngles({
              ...angles,
              3: e.target.value,
            });
          }}
        />
      </form>
      <button onClick={() => checkIsTriangle()}>submit</button>
      <h2 className="output">{output}</h2>
    </section>
  );
};
export default CheckTriangle;
