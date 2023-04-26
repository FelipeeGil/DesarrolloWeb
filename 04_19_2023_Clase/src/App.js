import "./styles.css";
import Contador from "./components/Contador";

export default function App() {
  return (
    <div className="App">
      <Contador nombre="Felipe" edad="30" activo="true" />
    </div>
  );
}
