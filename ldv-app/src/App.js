import logo from './logo.svg';
import './App.css';
import Photo from './LifeVaultCoverImage.png';
import React, { Component } from "react";
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
            <Link to="/login"></Link>
          </noscript>
          <noscript>
            <Link to="/user-page"></Link>
          </noscript>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/plans" element={<Plans/>} />
        <Route exact path="/explore" element={<Explore/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/user-page" element={<UserPage/>} />
        <Route exact path="/search-results/duncan-idaho" element={<DuncanIdahoPage/>} />
        <Route exact path="/user-page/uploadDigital" element={<UploadDigital/>} />
        <Route exact path="/user-page/uploadPhysical" element={<UploadPhysical/>} />
        <Route exact path="/user-page01" element={<UserPage01/>}/>
        <Route exact path="/user-page02" element={<UserPage02/>}/>
        <Route exact path="/user-page03" element={<UserPage03/>}/>
      </Routes>
    </Router>
  );
}

function Home(){
  return(
    <div>
      <h2 class="centerme blue-text centerHomePageTitle">Life Data Vault</h2>
      <p class="centerme grey-text titleSlogan">Leave your data for the ones you love the most</p>
      
      <div class="buttonContainer">
        <Link to="/plans">
          <button class="blueButton">Get Started</button>
        </Link>
        
        <Link to="/explore">
          <button class="learnMoreButton">Learn More</button>
        </Link>
      </div>
    </div>
 ); 
}

function Explore(){
  return(
    <div>
      <img src={Photo} alt='Life Vault Cover Photo' class='ExploreImage'/>
      <p class='paragraphOne'>
      Death is as somber as it is inevitable. But as we live more of our lives online, it's more important than ever to make sure loved ones can access digital accounts when we're gone. Don't be the guy who locked cryptocurrency exchange customers out of $250 million after his death because only he knew the password.
      </p>
      <p class='paragraphTwo'>
      There are many ways loved ones can request access to your accounts once you're gone, but they don't need that stress. Several online services allow you to designate legacy contacts or grant access after a period of inactivity. Here's how to make sure those you leave behind can manage your affairs after you head to the great beyond.
      </p>
      <p class='credit'>
        LDV was a project developed by Andrew Ohakam, Alberto Garcia, Nicolas Medina, Ahsanul Haque, Imdad Ahmed and Joel Rosas.
      </p>
    </div>
  );
}

function Plans(){
  return(
    <div>
      <h2 class="centerme pageTitle">Our Main Pricing Option</h2>
      <div id="pricing-and-offer-div">
        {/* Left div */}
        <div id="plan-pricing-div">
          <h4>Plan Pricing</h4>
          <h1 className="centerme">$99.99</h1><h6>/year</h6>
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
      <h2 class="centerme" id="interestedText">Interested?</h2>
      <div class="centerme">
        <Link to="/login">
          <button id="login-btn" class="blueButton">Create an account today!</button>
        </Link>
      </div>
    </div>
  );
}

function Login(){
  return(
    <div>
        {/* Inputs must always be:
        F: John
        L: Doe
        U: JDoe1964
        P: password */}
         <label for="fname">Enter your first name:</label><br/>
         <input type="text" id="fname" name="fnameinput"></input><br/><br/>
         <label for="lname">Enter your last name:</label><br/>
         <input type="text" id="lname" name="lnameinput"></input><br/><br/>
         <label for="username">Enter your Username:</label><br/>
         <input type="text" id="username" name="uname"></input><br/><br/>
         <label for="passwordlabel">Enter your Password:</label><br/>
         <input type="password" id="password" name="uname"></input><br/>
        <Link to="/user-page">
          <button>Sign Up</button>
        </Link>
    </div>
  );
}

function UserPage(){
  return(
    <div>
      <div id="searchbar-div" class="centerme">
          <input class="searchbar" type="text" list="suggestions" placeholder="Search for beneficiaries"/>
          <datalist id="suggestions">
            <option>Duncan Idaho</option>
            <option>John Roe</option>
            <option>Randall Thor</option>
            <option>Jonas Akembu</option>
            <option>Miley Rothemby</option>
            <option>Kou Uraki</option>
            <option>Minerva Zabie</option>
            <option>Christina Mackenzie</option>
            <option>Leila Singh</option>
            <option>Miranda Cruz</option>
          </datalist>
          <Link to="/search-results/duncan-idaho">
            <button class="search-btn">Search</button>
          </Link>
      </div>
      <div class="userprofile-div">
        <div id="userNBeneficiariesCol" class="centerme">
          <div id="userDiv">
            <img class="profile-pic" src="profilepic.png"></img>
            <h3>John Doe</h3>
            <h6>@JDoe1964</h6>
          </div>

          <div id="dropdown" class="bene-div">
            <button id="dropbtn">Beneficiaries (0)</button>
            <div id="dropdown-content">
              <a href="#">None Available</a>
            </div>
          </div>
        </div>

        <div id="uploadDatanRecentActivityCol">
          <div id="uploadBtns">
            <Link to="/user-page/uploadDigital">
              <button> + Upload Website Access Info</button>
            </Link>
            <br></br>
            <Link to="/user-page/uploadPhysical">
              <button> + Upload Physical Device</button>
            </Link>
          </div>
          <h3 class="centerme">Recent Activity</h3>
          <div id="recentActivity">
            <p class=" centerme grey-text ital">No recent changes.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

// press this button first
// Website Link: facebook.com
// Username: John Doe
// Password: jDoe1964
// Email connected to account: jDoe1964@gmail.com
function UploadDigital(){
  return(
    <div>
        <h2 class="centerme pageTitle">Register/Update Website Info</h2>
            <div id="uploadDigitalCol" class="centerme">
                <label for="websitelink" class="registerlabel">Website Link</label><br/>
                <input type="text" class="registerinput"  id="websitelink" name="websitelinkinput" size="60" placeholder="ex: facebook.com, twitter.com" required></input>

                <br/><br/>
                
                <label for="username" class="registerlabel">Username</label><br/>
                <input type="text" class="registerinput"  id="username" name="usernameinput" size="60" placeholder="What is your username for the above website?" required></input><br/><br/>
                <label for="password" class="registerlabel">Password</label><br/>
                <input type="password" class="registerinput" id="password" name="password" size="60" placeholder="What is your password for the above website?" required></input><br/><br></br>
                <label for="accountemail" class="registerlabel">Email connected to account</label><br/>
                <input type="text" class="registerinput" id="accountemail" name="accountemailinput" size="60" placeholder="What email is connected to the above website?"></input><br/><br/>
                <label for="securityquestions" class="registerlabel">Security Questions (optional)</label><br/>
                <input type="text" class="registerinput" id="securityquestions" name="securityquestioninput" placeholder="Security Question"></input>
                <input type="text" class="registerinput" id="securityanswer" name="securityanswerinput" placeholder="Your answer"></input><br/><br/>
              </div>
            <div id="submitCol">
                  <Link to="/user-page01">
                    <button id="registerbutton">Submit</button>
                  </Link>
              </div>
    </div>
  );
}

// User has registered digital info
function UserPage01(){
  return(
    <div>
      <div id="searchbar-div" class="centerme">
          <input class="searchbar" type="text" list="suggestions" placeholder="Search for beneficiaries"/>
          <datalist id="suggestions">
            <option>Duncan Idaho</option>
            <option>John Roe</option>
            <option>Randall Thor</option>
            <option>Jonas Akembu</option>
            <option>Miley Rothemby</option>
            <option>Kou Uraki</option>
            <option>Minerva Zabie</option>
            <option>Christina Mackenzie</option>
            <option>Leila Singh</option>
            <option>Miranda Cruz</option>
          </datalist>
          <Link to="/search-results/duncan-idaho">
            <button class="search-btn">Search</button>
          </Link>
      </div>
      <div class="userprofile-div">
        <div id="userNBeneficiariesCol" class="centerme">
          <div id="userDiv">
            <img class="profile-pic" src="profilepic.png"></img>
            <h3>John Doe</h3>
            <h6>@JDoe1964</h6>
          </div>

          <div id="dropdown" class="bene-div">
            <button id="dropbtn">Beneficiaries (0)</button>
            <div id="dropdown-content">
              <a href="#">None Available</a>
            </div>
          </div>
        </div>

        <div id="uploadDatanRecentActivityCol">
          <div id="uploadBtns">
            <Link to="/user-page/uploadDigital">
              <button> + Upload Website Access Info</button>
            </Link>
            <br></br>
            <Link to="/user-page/uploadPhysical">
              <button> + Upload Physical Device</button>
            </Link>
          </div>
          <h3 class="centerme">Recent Activity</h3>
          <div id="recentActivity">
            <p class="blue-text bold">Facebook.com</p>
            <p class="grey-text ital">Account Details Entered</p>
          </div>
        </div>
      </div>

    </div>
  )
}

// register a physical device
// Device Name: Samsung Galaxy S10
function UploadPhysical(){
  return(
    <div>
        <h2 class="centerme pageTitle">Register Physical Device</h2>
        <div id="uploadPhysicalCol" class="centerme">
            <label for="devicename" >Device Name</label><br/>
            <input type="text" class="registerinput" id="devicename" name="devicenameinput" size="60" height="60px"placeholder="Official name of the device (ex: Samsung Galaxy S10, iPhone 8)"></input><br/><br/>
            <label for="devicetype" class="registerlabel">Type of Device</label><br/>
            <select name="devices" id="devices">
                <option value="Computer">Computer (Desktop/Laptop)</option>
                <option value="Tablet">Tablet</option>
                <option value="Phone">Phone</option>
                <option value="Harddrive">Hard Disk Drive (HDD)</option>
              </select><br/><br/>
            <label for="password" class="registerlabel">Password (optional)</label><br/>
            <input type="password" class="registerinput" id="password" name="password" size="60" placeholder="If a password is needed to access the device, enter it here."></input><br/><br></br>
            <label for="peripherals" class="registerlabel">Required Peripherals</label><br/>
            <input type="text" id="peripherals" class="registerinput"  name="peripheralinput" size="60" placeholder="Ex: chargers, power cords"></input><br/><br/>
         </div>
         <div id="submitCol">
                  <Link to="/user-page02">
                    <button id="registerbutton">Submit</button>
                  </Link>
              </div>
    </div>
  );
}


// User has registered digital and physical info
function UserPage02(){
  return(
    <div>
      <div id="searchbar-div" class="centerme">
          <input class="searchbar" type="text" list="suggestions" placeholder="Search for beneficiaries"/>
          <datalist id="suggestions">
            <option>Duncan Idaho</option>
            <option>John Roe</option>
            <option>Randall Thor</option>
            <option>Jonas Akembu</option>
            <option>Miley Rothemby</option>
            <option>Kou Uraki</option>
            <option>Minerva Zabie</option>
            <option>Christina Mackenzie</option>
            <option>Leila Singh</option>
            <option>Miranda Cruz</option>
          </datalist>
          <Link to="/search-results/duncan-idaho">
            <button class="search-btn">Search</button>
          </Link>
      </div>
      <div class="userprofile-div">
        <div id="userNBeneficiariesCol" class="centerme">
          <div id="userDiv">
            <img class="profile-pic" src="profilepic.png"></img>
            <h3>John Doe</h3>
            <h6>@JDoe1964</h6>
          </div>

          <div id="dropdown" class="bene-div">
            <button id="dropbtn">Beneficiaries (0)</button>
            <div id="dropdown-content">
              <a href="#">None Available</a>
            </div>
          </div>
        </div>

        <div id="uploadDatanRecentActivityCol">
          <div id="uploadBtns">
            <Link to="/user-page/uploadDigital">
              <button> + Upload Website Access Info</button>
            </Link>
            <br></br>
            <Link to="/user-page/uploadPhysical">
              <button> + Upload Physical Device</button>
            </Link>
          </div>
          <h3 class="centerme">Recent Activity</h3>
          <div id="recentActivity">
            <p class="blue-text bold">Samsung Galaxy S10</p>
            <p class="grey-text ital">Physical Device Registered</p>
            <hr></hr>
            <p class="blue-text bold">Facebook.com</p>
            <p class="grey-text ital">Account Details Entered</p>      
          </div>
        </div>
      </div>

    </div>
  )
}

function DuncanIdahoPage(){
  return(
    <div>
      <div class="userprofile-div">

        <div id="userNBeneficiariesCol" class="centerme">
          <div id="userDiv">
            <img class="profile-pic" src="../profilepic.png"></img>
            <h3>Duncan Idaho</h3>
            <h6>@secondlife01</h6>
          </div>
        </div>

        <div id="uploadDatanRecentActivityCol">
          <div id="uploadBtns">
            <Link to="/user-page03">
              <button> Add as beneficiary</button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

function UserPage03(){
  return(
    <div>
      <div id="searchbar-div" class="centerme">
          <input class="searchbar" type="text" list="suggestions" placeholder="Search for beneficiaries"/>
          <datalist id="suggestions">
            <option>Duncan Idaho</option>
            <option>John Roe</option>
            <option>Randall Thor</option>
            <option>Jonas Akembu</option>
            <option>Miley Rothemby</option>
            <option>Kou Uraki</option>
            <option>Minerva Zabie</option>
            <option>Christina Mackenzie</option>
            <option>Leila Singh</option>
            <option>Miranda Cruz</option>
          </datalist>
          <Link to="/search-results/duncan-idaho">
            <button class="search-btn">Search</button>
          </Link>
      </div>
      <div class="userprofile-div">
        <div id="userNBeneficiariesCol" class="centerme">
          <div id="userDiv">
            <img class="profile-pic" src="profilepic.png"></img>
            <h3>John Doe</h3>
            <h6>@JDoe1964</h6>
          </div>

          <div id="dropdown" class="bene-div">
            <button id="dropbtn">Beneficiaries (1)</button>
            <div id="dropdown-content">
              <a href="#">Duncan Idaho</a>
            </div>
          </div>
        </div>

        <div id="uploadDatanRecentActivityCol">
          <div id="uploadBtns">
            <Link to="/user-page/uploadDigital">
              <button> + Upload Website Access Info</button>
            </Link>
            <br></br>
            <Link to="/user-page/uploadPhysical">
              <button> + Upload Physical Device</button>
            </Link>
          </div>
          <h3 class="centerme">Recent Activity</h3>
          <div id="recentActivity">
            <p class="blue-text bold">Samsung Galaxy S10</p>
            <p class="grey-text ital">Physical Device Registered</p>
            <hr></hr>
            <p class="blue-text bold">Facebook.com</p>
            <p class="grey-text ital">Account Details Entered</p>      
          </div>
        </div>
      </div>

    </div>
  )
}