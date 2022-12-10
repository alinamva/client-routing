import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Haqqinda from './components/haqqinda';
import Isnumuneleri from "./components/isnumuneleri"
import Elaqe from "./components/elaqe"
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='nav'>
          <ul>
          <li><Link className='nav-link' to={"/"} >Esas</Link></li>
          <li><Link className='nav-link' to={"/haqqinda"} >Haqqinda</Link></li>
          <li><Link className='nav-link' to={"/isnumuneleri"} >Is Numuneleri</Link></li>
          <li> <Link className='nav-link' to={"/elaqe"} >Elaqe</Link></li>
       </ul> 
       </div>
        <Routes>
          <Route path='/haqqinda' element={<Haqqinda />}></Route>
          <Route path='/isnumuneleri' element={<Isnumuneleri />}></Route>
          <Route path='/elaqe' element={<Elaqe />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;