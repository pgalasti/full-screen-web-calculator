import "./evaluation-bar.component.css";

function EvaluationBar({ expression, result }) {
  return (
    <div className="bar">
      <div className="expression">{expression}</div>
      <div className="result">{result || "0"}</div>
    </div>
  );
}

export default EvaluationBar;
