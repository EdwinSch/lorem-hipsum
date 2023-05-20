import { useState } from "react";
import { nanoid } from "nanoid";
import textdata from "./data.js";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    setText(textdata.slice(0, amount));
  };

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <section className="section-center">
      <h4>hipster ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
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
      <div className="lorem-text">
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
