import { useState } from "react";
import "./midknight.blue.modified.css";
import EvaluationBar from "./Evaluation-Bar/evaluation-bar.component.jsx";
import Keypad from "./Keypad/keypad.component.jsx";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleKeyClick = (key) => {
    if (key === "C") {
      setExpression("");
      setResult("");
    } else if (key === "BACKSPACE") {
      setExpression((prev) => prev.slice(0, -1));
    } else if (key === "=") {
      try {
        const res = eval(expression);
        setResult(String(res));
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + key);
      if (expression) {
        setResult("");
      }
    }
  };

  return (
    <div className="app-container">
      <EvaluationBar expression={expression} result={result} />
      <Keypad onKeyClick={handleKeyClick} />
    </div>
  );
}

export default App;
