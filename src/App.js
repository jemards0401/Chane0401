import './App.css';
import { Routes, Route } from 'react-router-dom';
import Valentine from './components/valentine';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Valentine />} />
      </Routes>
    </div>
  );
}

export default App;
