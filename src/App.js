
// import Click from './Components/Click';
// import Click22 from './Components/click22';
// import Dashboard from './Components/Dashboard';
// import Clickme from './Components/Clickme';

import Dashboard from "./view/Dashboard";
import {Routes , Route} from 'react-router-dom';
import Center from '../src/component2/Center'
import Center2 from "./component2/Center2";
import Center3 from "./component2/Center3";




function App() {
  return (
    <div>

      <Routes >

       <Route path="" element={<Dashboard/>} >
       <Route path="" element={<Center/>} /> 
        <Route path="/Center2" element={<Center2/>} /> 
        
        <Route path="/Center3" element={<Center3/>} /> 

       </Route>

      </Routes>
      
  




    </div>
  );
}

export default App;
