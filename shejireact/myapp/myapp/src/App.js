
import './App.css';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar';
import { Viewdata } from './components/Viewdata';
import { Route, Routes } from 'react-router';



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route path='f'element={<Viewdata/>}></Route>
        <Route path='/r'element={<Form/>}></Route>
      
      </Routes>
      

    
      

    </div>
  );
}

export default App;
