import { useState } from "react";

import ColorBox from "./components/ColorBox";
import History from "./components/History";


function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [history, setHistory] = useState([]);

  const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  return (
    <>
      <ColorBox backgroundColor={backgroundColor(red, green, blue)}/>
      
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
      
      <br />
      <br />
      <button onClick={() => setHistory((h) => [[red, green, blue], ...h])}>Adicionar cor ao histórico</button>

      <hr />

      <History data={history} backgroundColor={backgroundColor}/>
    </>
  );
}


export default App;
