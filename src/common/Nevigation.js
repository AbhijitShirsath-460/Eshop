import React, { useState } from 'react'
import './nevigate.css'
import { Link, useNavigate } from 'react-router-dom'


export default function Nevigation() {
  let[ Email,  setEmail] = useState("")
  let[ Passsword,  setPassword] = useState("")
  const nevigate = useNavigate()
      // let email = document.getElementsByClassName('.email').value;
      // let password =document.getElementsByClassName('.password').value;     
      //  let btn = document.getElementsByClassName('.sign-in-btn');     

        let changeText = (e)=>{
              
          Email = e.target.value;
          setEmail(Email);
        }


        let changePassword = (e)=>{
        
        Passsword = e.target.value;
      setPassword(Passsword);
    }
 

     function validation(e){ 
      e.preventDefault();
     if(Email === '' ){
        
         alert("email required");
         return false;    
     }else if(Passsword.length<8){
            alert("pasword  must be 8 chracter");
     }else{
      nevigate('/Home');
     }
      
      }
          

        
    
          

   

  return (
    <>

      <div className='form-container'>

        <i></i>

        <div className='Sign-In-Form'>

          <form action="#">

            <h2>Sign-In</h2>

            <div className='form-input'>
              <input type="email" name="email" className='input  email' onChange={changeText} value={Email}  placeholder='Enter the email here..' required />
            </div>

            <div className='form-input'>
              <input type="password" name="password" className='input  password' placeholder='Enter password here..' value={Passsword} onChange={changePassword}  required/>
            </div>


            <button className='sign-in-btn' onClick={validation}>Sign-In</button>

            <div className=" sign-up">
              Dont have an account ? <Link to= "/sign-Up"><a href="/" id='signUp'>Sign-Up</a></Link>
            </div>



          </form>

        </div>
      </div>





    </>
  )
}
