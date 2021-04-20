// import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Carta from "./components/Carta";

function App() {
  return (
    <div>
      <div>
        <Router>
          <div className="bg-green-700">
            <Link to="/">Inicio</Link>
            <Link to="/carta">Carta</Link>
          </div>

          <Route
            exact
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />

          <Route
            exact
            path="/carta"
            render={() => {
              return <Carta></Carta>;
            }}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
