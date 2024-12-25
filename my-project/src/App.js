import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from './pages/Blogs'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="">
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </div>
  );
}

export default App;
