import "./keypad.component.css";

function Keypad({ onKeyClick }) {
    const numberPad = [
        { label: "7", type: "number", area: "area-7" },
        { label: "8", type: "number", area: "area-8" },
        { label: "9", type: "number", area: "area-9" },
        { label: "4", type: "number", area: "area-4" },
        { label: "5", type: "number", area: "area-5" },
        { label: "6", type: "number", area: "area-6" },
        { label: "1", type: "number", area: "area-1" },
        { label: "2", type: "number", area: "area-2" },
        { label: "3", type: "number", area: "area-3" },
        { label: "0", type: "number", area: "area-0" },
        { label: ".", type: "number", area: "area-dot" },
    ];

    return (
        <div className="keypad">
            {/* Top Row Operators Group */}
            <div className="top-operators">
                <button className="keypad-btn btn-operator" onClick={() => onKeyClick("/")}>/</button>
                <button className="keypad-btn btn-operator" onClick={() => onKeyClick("*")}>*</button>
                <button className="keypad-btn btn-operator" onClick={() => onKeyClick("-")}>-</button>
                <button className="keypad-btn btn-operator" onClick={() => onKeyClick("+")}>+</button>
            </div>

            {/* Delete Button */}
            <button
                className="keypad-btn btn-clear area-del"
                onClick={() => onKeyClick("BACKSPACE")}
            >
                Del
            </button>

            {/* Number Pad */}
            {numberPad.map((key) => (
                <button
                    key={key.label}
                    className={`keypad-btn ${key.area}`}
                    onClick={() => onKeyClick(key.label)}
                >
                    {key.label}
                </button>
            ))}

            {/* Equals Button */}
            <button
                className="keypad-btn btn-equals area-eq"
                onClick={() => onKeyClick("=")}
            >
                =
            </button>

            {/* Clear Button */}
            <button
                className="keypad-btn btn-clear area-clr"
                onClick={() => onKeyClick("C")}
            >
                C
            </button>
        </div>
    );
}

export default Keypad;
