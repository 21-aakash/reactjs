

import { useForm } from "react-hook-form"

import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    setError,

    formState: { errors,isSubmitting },
  } = useForm()

  const delay=(d)=>{

    return new Promise((resolve , reject)=>
    {
      setTimeout(()=>{
          
        resolve();

      }, d*1000)
    })

    
  }
  const onSubmit= async (data)=> {

    await delay(2)

    console.log(data);
    if(data.username!=="aakash")
    {
      setError("myform", {message:"Credentials not correct!!!"})
    }
    if(data.username==="ravi")
    {
      setError("blocked", {message:"user is blocked"})
    }


  }


  
  return (
    <>
    {
      isSubmitting && <div>Loading ........</div> 
    }
     <div className="container">

<form action="" className="action" onSubmit={handleSubmit(onSubmit)}>

 <input  placeholder="username " type="text" {...register("username" , {required:{value: true , message:"This is required"}, minLength:{value: 3, message:"Min length is 3"}, maxLength:{value: 8 , message:"Max length is 8"} }) } />

 {errors.username && <div className="red">{errors.username.message  }</div>}   
 
 {/* //of above constraints are not fllfilled you can handle like this   */}

 <br />
 <input placeholder="enter password" type="password" {...register("password")}/>
 <input disabled={isSubmitting} type="submit"  />

 {errors.myform && <div className="red">{errors.myform.message  }</div>}   
 {errors.blocked && <div className="red">{errors.blocked.message  }</div>}   

</form>

     </div>
    </>
  )
}

export default App
