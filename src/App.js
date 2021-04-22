import "./style.css";
import Home from "./components/Home";
import Carta from "./components/Carta";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  function handMobileNav() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
    <div>
      <Router>
        <nav className="bg-green-700 fixed top-0 right-0 left-0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex items-center py-5 px-2 text-white ">
                <Link to="/">
                  <h1 className="text-3xl font-bold">urFavEatery</h1>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-5 px-3 text-white text-lg hover:text-gray-900"
                >
                  Inicio
                </Link>
                <Link
                  to="/carta"
                  className="py-5 px-3 text-white text-lg hover:text-gray-900"
                >
                  Carta
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                {/* img traido desde mi github con url acortada */}
                <button className="mobile-menu-button">
                  <img
                    src="https://bit.ly/3asmJjh"
                    className="cursor-pointer w-16 h-16"
                    onClick={handMobileNav}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mobile-menu md:hidden hidden">
            <div className="md:flex items-center space-x-1">
              <Link
                to="/"
                className="block py-2 px-4 text-lg font-bold hover:bg-gray-200"
              >
                Inicio
              </Link>
              <Link
                to="/carta"
                className="block py-2 px-4 text-lg font-bold hover:bg-gray-200"
              >
                Carta
              </Link>
            </div>
          </div>
        </nav>

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
  );
}

export default App;
