import { useState } from "react";


function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <>
      <h3>red: {red}</h3>
      <input
        type="range"
        min={0}
        max={255}
        value={red}
        onChange={({ target }) => setRed(parseInt(target.value))} />
      
      <h3>green: {green}</h3>
      <input
        type="range"
        min={0}
        max={255}
        value={green}
        onChange={({ target }) => setGreen(parseInt(target.value))} />
      
      <h3>blue: {blue}</h3>
      <input
        type="range"
        min={0}
        max={255}
        value={blue}
        onChange={({ target }) => setBlue(parseInt(target.value))} />
    </>
  );
}

export default App;
