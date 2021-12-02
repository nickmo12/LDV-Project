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
            <Link to="/">LifeDataVault</Link>
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
          <noscript>
            <Link to="/login">Login</Link>
          </noscript>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/plans" element={<Plans/>} />
        <Route exact path="/explore" element={<Explore/>} />
        <Route exact path="/login" element={<Login/>} />
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
   
   <Link to="/explore">
    <button>Learn More</button>
   </Link>
 </div>); 
}

function Plans(){
  return(
    <div>
      <h2 class="centerme">Our Main Pricing Option</h2>
      <div id="pricing-and-offer-div">
        {/* Left div */}
        <div id="plan-pricing-div">
          <h5>Plan Pricing</h5>
          <h1 className="centerme">$99.99</h1>
        </div>
        {/* Right div */}
        <div id="subscription-features-div">
          <h2>Subscription includes:</h2>
          <ul>
            <li>Aenean a lectus leo. Nulla ex urna, ornare id rhoncus. 
            </li>
            <li>Duis dignissim lacus non tortor laoreet volutpat. Aenean dictum ullamcorper.  
            </li>
            <li> Donec eget augue et lectus.  
            </li>
            <li>Nullam vestibulum ullamcorper sodales. Nunc imperdiet. 
            </li>
          </ul>
        </div>
      </div>      
      <h2 class="centerme">Interested?</h2>
      <div class="centerme">
        <Link to="/login">
          <button id="login-btn">Create an account today!</button>
        </Link>
      </div>
    </div>
  );
}

function Explore(){
  return(
    <div>
      <p>
      Death is as somber as it is inevitable. But as we live more of our lives online, it's more important than ever to make sure loved ones can access digital accounts when we're gone. Don't be the guy who locked cryptocurrency exchange customers out of $250 million after his death because only he knew the password.
      </p>
      <p>
      There are many ways loved ones can request access to your accounts once you're gone, but they don't need that stress. Several online services allow you to designate legacy contacts or grant access after a period of inactivity. Here's how to make sure those you leave behind can manage your affairs after you head to the great beyond.
      </p>
    </div>
  );
}

function Login(){
  return(
    <div>
    </div>
  );
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
