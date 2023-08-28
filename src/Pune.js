import './Pune.css'

function Pune (props){
     return(
 
         <div>
             <img className="puneImages" src ={props.imgLink} alt=""/>
             <h2>{props.cName}</h2>  
         </div>
     );
 }
 
 export default Pune ;