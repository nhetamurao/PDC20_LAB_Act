import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LogAdmin from './Dashboard/LogAdmin';
import AuthError from './Dashboard/AuthError';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<LogAdmin/>}/>
        <Route path="/auth-error" element={<AuthError/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
