import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './home.css' 

function Home(){
    return(
    <>
<div className="maindiv homebgimg">
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>

    <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
        
            <li class="nav-item active">
            <a class="nav-link" href="#">Find Candidates</a>
            </li>

           
            <li class="nav-item">
            <a class="nav-link" href="#">Find Jobs</a>
            </li>

           
            <li class="nav-item">
            <a class="nav-link" href="#">Find Companies</a>
            </li>

            <button className="btn-light">Log in</button>
            <button className="butt2">Register</button>
        </ul>
    </div>
    </nav>
    <br/>
<h1 className="homehead">Find The Candidates As Per Your Requirment.</h1><br/>
<input type='text' name='title' id='title' placeholder="Job Title/Keyword"/>
<input type='text' name='title' id='title' placeholder="Add Country/City"/> 
<button>Search</button>
</div>
</div>
    </>
    );
    }
export default Home;