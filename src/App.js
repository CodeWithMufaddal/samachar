import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
