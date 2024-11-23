import {             
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CharacterModal from "./componentes/rick-and-morty";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={ <CharacterModal/> } />
      </Routes>
    </Router>
  );
}

export default App;