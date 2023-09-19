
import './nevigation.css'
import { Link } from 'react-router-dom';

export default function Nevigation2(props) {

  return (
    <>
               

      
         

      <div className='nav-container'>

           
        <header className='header'>
          <a href="/" className='logo'>upgradEshop</a>

          <nav className="navbar">

           
             <Link to= '/sign-In'>  <button id='loginbtn'>Sign-In</button>  </Link>
            
            <Link to= "/sign-Up">  <button id='signupBtn'>Sign-Up</button> </Link> 

            
          </nav>


        </header>

      </div>

        
         <div className='mesDisplay'>


         <h5 className='display'>Welcome to the upgrad Eshop website plezue first  SignIn</h5>     
         </div>

   


 








    </>
  )
}
