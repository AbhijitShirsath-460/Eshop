import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
   let Nevigate = useNavigate();

  let [fname , setfname] = useState('');
  let[lname , setlname] = useState('');
  let[email , setemail]= useState('');
  let[password , setPassword]= useState('');
  let[confirmpassword , setconfirmpassword] = useState('');


   let createsignup =()=>{

    if( fname ==''){

      alert('first name required');
  
    }
      
    else if( lname ==''){

      alert('last name required');
      
    }

    else if( email ==''){

      alert(' email required');
      
    }

    else if( password.length<8 ){

      alert('password must be 8 chracter');
      

    }
     
    else if( confirmpassword.length<8  ){

      alert('password must be 8 chracter');
    
      
    }

     else if(  password != confirmpassword ){
           alert('passsword dosent match');
           

   }else{
    Nevigate('/sign-In');
   }

  
  




  }






  return (
    <>

      <div className='form-container'>

        <i></i>

        <div className='Sign-Up-Form'>

          <form action="#">

            <h2>Sign-Up</h2>

            <div className='form-input'>
              <input type="text" name="name" className='input' value={fname} onChange={(e)=>{ fname = e.target.value ; setfname(fname)}}   placeholder='Enter first name here..'  required/>
            </div>

            <div className='form-input'>
              <input type="text" name="name" className='input' value={lname} onChange={(e)=>{ lname = e.target.value ; setlname(lname)}} placeholder='Enter last name here..'  required/>
            </div> 
            <div className='form-input'>
              <input type="email" name="name" className='input' value={email} onChange={(e)=>{ email = e.target.value ; setemail(email)}} placeholder='Enter email here..' required/>
            </div>

            <div className='form-input'>
              <input type="password" name="password" className='input' value={password}  onChange={(e)=>{ password = e.target.value ; setPassword(password)}} placeholder='Enter password here..' required />
            </div>

            
            <div className='form-input'>
              <input type="password" name="password" className='input' value={confirmpassword} onChange={(e)=>{ confirmpassword = e.target.value ; setconfirmpassword(confirmpassword)}}   placeholder='Enter confirmed password here..' required />
            </div>


            <button className='sign-in-btn' onClick={createsignup}>Sign-Up</button>

            <div className=" sign-up">
                Already have an account ? <Link to= '/sign-In'> <a href="/" id='signIn'>Sign-In</a> </Link>
              </div>



          </form>

        </div>
      </div>


    </>
  )
}
  
