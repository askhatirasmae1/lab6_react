 import "./App.css";

import Compteur from "./Compteur";
import FocusInput from "./FocusInput";
import CompteurRendu from "./CompteurRendu";
import ListeArticles from "./ListeArticles";
import Timer from "./Timer";

function App() {
  return (
    <div className="app-container">

      <section>
        <h2>useReducer - Compteur</h2>
        <Compteur />
      </section>

      <section>
        <h2>useRef - Focus Input</h2>
        <FocusInput />
      </section>

      <section>
        <h2>useRef - Renders Counter</h2>
        <CompteurRendu />
      </section>

      <section>
        <h2>useFetch - API Data</h2>
        <ListeArticles />
      </section>

      <section>
        <h2>useEffect - Timer</h2>
        <Timer />
      </section>

    </div>
  );
}

export default App;