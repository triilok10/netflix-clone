import './App.css';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Homehindi from './Components/Homehindi';
import Needhelp from './Components/Needhelp';
import {
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/homehindi" element={<Homehindi />} />
        <Route path="/needhelp" element={<Needhelp />} />
      </Routes>
    </>
  );
}

export default App;
