import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authlogin} from '../store/authSlice'
import {Button , Input , Logo} from './index'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'




const Login = () => {

    const dispatch =useDispatch()
    const navigate =useNavigate()
    const {register , handleSubmit} =useForm()
     const {error, seterror} =useState("")

     const login =async (data)=>{


seterror("")
try{
              
    const session= await authService.login(data)
    if(session)
    {
        const session= await authService.login(data)
        if(session)
        {
                const userData =await authService.getCurentUser()
                    if(userData) dispatch(authlogin(userData))
                    navigate("/")

        }
    }

}catch(error){
    seterror(error.message)
}


     }


  return (
    <div className='flex items-center justify-center w-full'
    
    
    >

<div


className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

<div className="mb-2 flex justify-center" >

    <span className='inline-block w-full max-w-[100px]'>

    <Logo width='100%'/>
    </span>
</div>
<h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
<p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

<form onSubmit={handleSubmit(login) }className="mt-8">



<div className='space-y-5'>

<Input 

label="Email:"
placeholder="Enter your email"
type="email"
{...register("email", 
{
    required: true,
    validate: {
        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        "Email address must be a valid address",
    }
}


)}

/>
<Input 

label="Password:"
placeholder="Enter your Password"
type="password"
{...register("", 
{
    required: true,
   
}


)}

/>


<Button
                type="submit"
                className="w-full"
                >Sign in</Button>



</div>



</form>







</div>



    </div>
  )
}

export default Login

// You're correct that `await` does indeed pause the execution of the asynchronous function until the awaited promise resolves. However, the key point to understand is that while the function is waiting for that specific operation (e.g., fetching data from an API) to complete, the overall program execution isn't halted.

// Consider this analogy: Imagine you're waiting for your friend to arrive at a coffee shop, but in the meantime, you can still chat with other friends, check your phone, or read a book. Similarly, when you use `await` in an asynchronous function, that function may pause execution while waiting for a specific task to finish (like fetching data), but the JavaScript runtime is free to handle other tasks in the meantime.

// In a web application, while JavaScript is waiting for data from an API (using `await`), the browser can continue rendering the UI, handling user interactions, or executing other JavaScript code. This non-blocking behavior ensures that the application remains responsive, even during potentially long-running operations like data fetching.

// So, although `await` temporarily suspends the execution of the current function, it doesn't block the entire program. Other tasks and operations can continue to execute concurrently, improving overall responsiveness and user experience.