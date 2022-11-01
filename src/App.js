import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Proxima's Games Page</h1>
      </header>
    </div>
      <body>
        <Dashboard/>
      </body>
    </BrowserRouter>
  );
}

export default App;
