import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Authorization/Login';
import SignUp from './Authorization/SignUp';

function App() {
  return (
    <div className="App" style={{width:'100vw',height:'100vh'}}>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
