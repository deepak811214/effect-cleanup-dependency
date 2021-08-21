import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Button</button>
      <h1>{JSON.stringify(state)}</h1>
      {state && <Custom />}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function Custom() {
  const [counter, setCounter] = useState(0);

  const time = function () {
    setCounter(counter + 1);
  };
  console.log(" component rerender");
  useEffect(() => {
    console.log("use effect");
    const timer = setInterval(time, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(timer);
    };
  }, [counter]);
  return <h1> Count {counter}</h1>;
}
