import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="container mx-auto max-w-md p-10 bg-gray-200">
      <div className="grid grid-cols-4 gap-10">
        <input
          type="text"
          className="col-span-4 p-2 text-right text-gray-800 font-semibold"
          value={result}
          readOnly
        />
        <button
          className="col-span-3 bg-gray-300 hover:bg-gray-400 p-2 text-gray-800 font-semibold"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="col-span-1 bg-gray-300 hover:bg-gray-400 p-2 text-gray-800 font-semibold"
          onClick={calculate}
        >
          =
        </button>

        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="col-span-1 bg-gray-300 hover:bg-gray-400 p-2 text-gray-800 font-semibold"
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="col-span-1 bg-gray-300 hover:bg-gray-400 p-2 text-gray-800 font-semibold"
          onClick={() => handleClick("*")}
        >
          *
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="col-span-1 bg-gray-300 hover:bg-gray-400 p-2 text-gray-800 font-semibold"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="col-span-1 bg-gray-100 hover:bg-gray-200 p-2"
          onClick={() => handleClick("00")}
        >
          00
        </button>
        <button
          className="col-span-1 bg-gray-300 hover:bg-gray-400 p-2 text-gray-800 font-semibold"
          onClick={() => handleClick("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
