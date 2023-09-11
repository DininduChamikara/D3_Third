import { useState } from "react";
import * as d3 from "d3";
import LinePlot from "./components/LinePlot";
import ChordDiagram from "./components/ChordDiagram";

function App() {
  //for LinePlot
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }
  //for LinePlot end

  return (
    <div>
      <h1>Line Plot</h1>
      <div onMouseMove={onMouseMove}>
        <LinePlot data={data} />
      </div>
      <h1>Chord Diagram</h1>
      <div>
        <ChordDiagram />
      </div>
    </div>
  );
}

export default App;
