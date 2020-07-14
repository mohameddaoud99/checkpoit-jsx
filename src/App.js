import React from 'react';
import './App.css';
import image2 from "./image2.png";
import "./style.css"

function App() {
  return (
    <div className="d1" style={{border: 'solid 1px black'}} >  
 
    	<h1 className="title red">Welcome My Lovers</h1> 
 
        	<br/>  
 
            <img src="/image1.jpg"  alt="image de quelque chose" className="im1"/> <br /> 
 
             	  
               <video width="320" height="240" controls className="vid1">  
 
               <source src="/myVideo.mp4" type="video/mp4" /> 
        
           </video> 
           <img src={image2} className="im2" />


 </div>  
 )
}
export default App;
