import './App.css';
import { BrowserRouter as Router,Routes,Route,Links } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addland from './components/Addland';
import Getland from './components/Getland';
// import boostrap
import "bootstrap/dist/css/bootstrap.css"
function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Land Management System</h1>
        <Routes>
          <Route  path='/signin'element ={<Signin/>}/>
          <Route  path='/signup'element ={<Signup/>}/>
          <Route  path='/addland' element ={<Addland/>}/>
          <Route  path='/getland' element ={<Getland/>}/>

        </Routes>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
