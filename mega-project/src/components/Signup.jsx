import React , {useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { UseDispatch, useDispatch } from 'react-redux'
import {useForm} from 'react-hook-from'

const Signup = () => {


    const dispatch =useDispatch()
    const navigate =useNavigate()
    const [error, seterror] = useState("")
   const {register ,handleSubmit} =useForm()



   const create =async (data)=>{


   seterror("")
   try {
    
  const userData= await authService.createAccount(data)
   if(userData)
   {
         const userData =await authService.getCurentUser()
         if(userData) dispatch(login(userData));
         navigate("/")
   }


   } catch (error) {
    seterror(error.message)
   }


   }
  return (
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

//Logo

<div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>


//check 
<h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
//form 
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>




</div>


</div>



  )
}

export default Signup

//    It clears any existing error message (seterror("")).
//    It attempts to create a new user account using the authService.createAccount function, passing the data parameter.
//    If the user account creation is successful (if (userData)), it proceeds to the next steps:
//    It attempts to fetch the current user's data using authService.getCurrentUser().
//    If the current user data is retrieved successfully (if (userData)), it dispatches a login action with the user data using dispatch(login(userData)).
//    It navigates the user to the homepage (navigate("/")).
//    Overall, this function handles user account creation, fetching current user data, logging in the user, and redirecting them to the homepage upon successful account creation. If any errors occur during the process, it likely updates an error state to provide feedback to the user.
