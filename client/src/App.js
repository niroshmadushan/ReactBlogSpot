
import './App.css';
//import Mycomponent from './compo/Mycomponent';
import Newpost from './compo/Newpost';
import Post from './compo/Post';
import {BrowserRouter as Router,Route,Routes,NavLink } from "react-router-dom";
import Postpage from './compo/Postpage';



function App() {

  return (
    <div className="App">
  
   <Router>
    <div className='bg-blue-900 w-screen h-[60px] settop'>
      <center>
     <NavLink to="/" className='btn' activeClassName='active-link' exact><button className='btn' > Home </button></NavLink>
     <NavLink to="/new-post"  className='btn' activeClassName='active-link' exact><button className='btn' >New Post</button></NavLink>
     <NavLink to="/post"   activeClassName='active-link' exact><button className='btn' >Blog page</button></NavLink>
         
      
    </center>
    </div>
    <Routes>
   
      <Route path="/post" exact Component={Post}></Route>
      <Route path="/new-post" exact Component={Newpost}></Route>
      <Route path="/post/:id" exact Component={Postpage}></Route>
    </Routes>

    </Router>
    </div>
  );
}
/*
    */
export default App;
