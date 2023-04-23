import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { HomePageComponent } from './component/HomePageComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { WorkComponent } from './component/WorkComponent';
import { AboutMeComponent } from './component/AboutMeComponent';
import { PrivacyPolicy } from './component/PrivacyPolicyCompnent';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home-page" />} />
        <Route exact path="/home-page" element={<HomePageComponent />} />
        <Route exact path="/work" element={<WorkComponent />} />
        <Route exact path="/about-me" element={<AboutMeComponent />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;



