import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return(
    <Router>
      <nav id="navbar">
          <a>
            <Link to="/ldv">LifeDataVault</Link>
          </a>
          <a>
            <Link to="/data">Data</Link>
          </a>
          <a>
            <Link to="/plans">Plans</Link>
          </a>
          <a>
            <Link to="/explore">Explore</Link>
          </a>
      </nav>

      <Routes>
        <Route exact path="/ldv" element={<Home/>} />
      </Routes>
    </Router>
  );
}

function Home(){
  return(
  <div>
   <h2 class="centerme blue-text">Life Data Vault</h2>
   <p class="centerme grey-text">Leave your data for the ones you love the most</p>
   <Link to="/plans">
     <button>Get Started</button>
   </Link>
   
   <button>Learn More</button>
 </div>); 
}



// function App() {
//   return (
//     <div className="App">
//       <nav id="navbar">
//         <a href="#">LifeDataVault</a> 
//         <a href="#">Data</a> 
//         <a href="#">Plans</a> 
//         <a href="#">Explore</a> 
//         <a href="#">Contact</a>
//       </nav>

//       <h2 class="centerme blue-text">Life Data Vault</h2>
//       <p class="centerme grey-text">Leave your data for the ones you love the most</p>
//       <button>Get Started</button>
//       <button>Learn More</button>
//     </div>
//   );
// }
