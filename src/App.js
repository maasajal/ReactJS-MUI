
import './App.css';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <PermanentDrawerLeft />
      {/* <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/profile" element={<Profile /> } />
        <Route exact path="/settings" element={<Settings /> } />
      </Routes> */}
    </div>
  );
}

export default App;
