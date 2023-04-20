import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePageComponent } from './component/HomePageComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { WorkComponent } from './component/WorkComponent';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/homePage" element={<HomePageComponent />} /> 
      <Route exact path="/work" element={<WorkComponent />} /> 
    </Routes>
  </Router>
  );
}

export default App;



