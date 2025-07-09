import './index.css'
import './App.css'
import Mainpage from './Component/Mainpage';

import {Route,Routes} from 'react-router-dom';
import Mealcard from './Component/Mealcard';
import Mealinfo from './Component/Mealinfo';

function App() {


  return (
    <div>

   
   
   <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>
   

    
    </div>
  )
}

export default App
