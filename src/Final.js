import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from './Card'
import {Data} from './Data'
import "./form.css";
import './Movie.css'
import  Dashboard from './SideDashboard'
import img from './bluepic.jpg'
function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [isSignOut,setSignOut]=useState(false);
  const [button,HoverButton] = useState(false);
  const Style={
    Hover:{
    display: button?'flex':'none',
    color: 'white',
  }
}
  
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
const handleSignout=(event)=>{
  event.preventDefault();
  setSignOut(true);
}
  const handleSubmit = (event) => {
 
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

   
    if (userData) {
      if (userData.password !== pass.value) {
 
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(false);
      }
    } else {
   
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

 
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

if(isSubmitted)
{
  return (
    <>
    
    <div className="app">
  
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
      </div>
    </div>
    </>
  );
}
else{
  if(isSignOut){
    return(
      <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
      </div>
    </div>


    )
  }
  else{
  return(
    <>
    <div className="body1">📽️MOVIES HUB🎬</div>
    <div className="flex">
    <div >
      <Dashboard></Dashboard>
    </div>
    
    <div className='body'>
    <div className='mov'>
      
      {
        
        Data.Movies.map((movie)=>{
          return <Card 
          src={movie.images[0].thumbnail}
          title={movie.title} 
          date={movie.release_date}      
          />
        })
      }
      <button className="button1" onClick={handleSignout}>SignOut</button>
      
      </div>
      
</div>

    </div>
    
    </>
  )
}
}
}

export default App;