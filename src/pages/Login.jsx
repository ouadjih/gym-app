import React, { useContext, useState } from 'react'
import biceps from '../images/biceps.png'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
  const [error,setError]= useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const navigate = useNavigate()

  const {currentUser,dispatch} = useContext(AuthContext)
  
  const handleLogin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload: user})
      console.log(currentUser,"login")
      navigate("/")
    })
    .catch((error) => {
      setError(true)
    });
  }
  return (
    <>
<form className='w-full min-h-screen flex items-center justify-center flex-col' 
      onSubmit={handleLogin}>
        
  <div className=" mb-5">
    <div className="flex flex-row align-center justify-center mb-10 md:mb-5 md:relative right-6 ">
       <img className="w-20 md:w-30 relative  md:top-[-2em]" src={biceps} alt="biceps logo"/>
        <p className='text-[#FFB74D] relative top-10 md:top-1  font-bold text-[30px] '>Biceps</p>
      </div>
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white relative top-[-2em]">Your email</label>
    <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
    dark:focus:border-blue-500 relative top-[-2em]" placeholder="email@mail.com" required="" />
  </div>
  
  <div className="mb-6 relative top-[-2em]">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"required=""/>
  </div>

  <button type="submit" className="text-black bg-[#FFB74D]  hover:bg-[#f37f2c] transition: all 6s ease; focus:outline-none
    rounded-lg text-sm  md:w-[170px] w-[10em] px-5 py-2.5 text-center relative top-[-2em] font-bold">Login</button>
  {error && <span className='text-[12px] font-bold text-[#eb2323]'>Wrong email or password</span>}
  <button
  onClick={()=>''}
   type="button" 
   className="flex felx-row  text-[#f37f2c]
      text-[28px]  px-5 py-2.5 text-center ">
  <span className=' text-[#f5f4f3] text-[15px] px-3 py-1 font-semibold'>Sign with </span>
         <AiFillGoogleCircle/>
  </button>

</form>
</>
)}
export default Login