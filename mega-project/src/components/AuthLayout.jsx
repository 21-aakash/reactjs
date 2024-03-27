import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

// This component, `Protected`, is a common pattern used in React applications for handling protected routes. It ensures that certain routes or components are only accessible to authenticated users.

// Here's how it works and why it's needed:

// 1. **Dependencies and Hooks**: 
//    - It imports necessary functions and hooks from React (`useEffect`, `useState`) and external libraries (`useSelector` from react-redux, `useNavigate` from react-router-dom).
//    - It defines a functional component named `Protected` which accepts `children` (the content to be rendered within the protected route) and an optional `authentication` prop (to determine whether authentication is required).

// 2. **Component Logic**:
//    - Inside the `Protected` component, it initializes state using `useState`. The `loader` state is used to indicate whether authentication status is being checked, and initially set to `true`.
//    - It retrieves the authentication status from the Redux store using `useSelector`.
//    - The `useEffect` hook is used to perform side effects when the component mounts or when the `authStatus`, `navigate`, or `authentication` props change.
//    - Within `useEffect`, it checks the `authentication` prop to determine whether the route should be protected.
//    - If `authentication` is `true` and the user is not authenticated (`authStatus !== true`), it redirects the user to the login page.
//    - If `authentication` is `false` and the user is authenticated (`authStatus !== false`), it redirects the user to the homepage.
//    - After performing the necessary checks, it sets the `loader` state to `false`, indicating that the authentication status has been determined and the content can be rendered.

// 3. **Return Statement**:
//    - While the loader state is `true`, it renders a loading message.
//    - Once the loader state becomes `false`, it renders the `children` passed to the `Protected` component.

// **Need and Usage**:
// - This component is essential for applications that require certain routes or components to be accessible only to authenticated users.
// - It ensures that unauthorized users are redirected to the login page, while authenticated users are directed to the appropriate routes.
// - By abstracting this logic into a reusable component, it helps maintain a clean and organized codebase, reducing duplication of authentication logic across different components or routes.