import { useState } from "react";

import ColorBox from "./components/ColorBox";
import History from "./components/History";


function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [history, setHistory] = useState([]);

  const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
  const isColorHistory = history.some(
    (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue])
  );

  const generateRandomColor = () => { 
    const newRed = (Math.floor(Math.random() * 256));
    const newGreen = (Math.floor(Math.random() * 256));
    const newBlue = (Math.floor(Math.random() * 256));

    setRed(newRed);
    setGreen(newGreen);
    setBlue(newBlue);
    setHistory((h) => [[newRed, newGreen, newBlue], ...h])
  };

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
      <button onClick={() => setHistory((h) => [[red, green, blue], ...h])}
      disabled={isColorHistory}
      >Adicionar cor ao histórico</button>

      <hr />

      <History data={history} backgroundColor={backgroundColor} />
      <br />
      <br />
      <button onClick={generateRandomColor}>Gerar cor aleatória</button>
    </>
  );
}


export default App;
