import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Update from './components/update/update';
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <h3> Product vendors Crud</h3>
        </div>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>
      </div>

    </Router >
  );
}

export default App;
