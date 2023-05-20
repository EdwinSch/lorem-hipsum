import { useState } from "react";
import textdata from "./data.js";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <section className="section-center">
      <h4>hipster ipsum</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
    </section>
  );
};
export default App;
