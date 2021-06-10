import { Circulo } from "./Circulo";

function App() {
  const circulos = ["circulo1", "circulo2", "circulo3", "circulo4", "circulo5"];
  return (
    <ul className="lista">
      {circulos.map((circuloKey) => (
        <Circulo key={circuloKey} cantidad={circulos.length} />
      ))}
    </ul>
  );
}

export default App;
