import './App.module.scss';

import MainBeer from "./containers/MainBeer";
import NavBar from "./containers/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainBeer />
    </div>
  );
}

export default App;
