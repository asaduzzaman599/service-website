import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
/**
 * 
 * 

 */
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
