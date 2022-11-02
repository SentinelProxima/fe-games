import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Proxima's Games Page</h1>
      </header>
    </div>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/reviews/:cat" element={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
