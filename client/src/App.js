import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<AddEmployeeComponent />} />
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent />} />
        </Routes>
      </div>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
