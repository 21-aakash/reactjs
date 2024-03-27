import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input




// This code defines a React component called `Input` that renders an input field with a label. Here's a breakdown of how it works:

// 1. **Imports**: The code imports the necessary modules from React, including `useId` for generating unique IDs, and `forwardRef` for creating a ref-forwarding component.

// 2. **Component Definition**: The `Input` component is defined using `React.forwardRef`. This allows the component to forward a ref to the underlying DOM element, making it possible to access the input element's DOM node from the parent component.

// 3. **Props**:
//    - `label`: Specifies the text label for the input field. If provided, a label element is rendered above the input field.
//    - `type`: Specifies the type of input field. Defaults to "text" if not provided.
//    - `className`: Additional CSS classes that can be applied to the input field.
//    - `...props`: Allows passing any additional props that will be applied to the input element.

// 4. **ID Generation**: The `useId` hook is used to generate a unique ID for the input field. This ID is then assigned to both the input element's `id` attribute and the `htmlFor` attribute of the label element (if a label is provided). This ensures that the label is associated with the input field for accessibility purposes.

// 5. **Rendering**:
//    - The component renders a `div` element that wraps the input field and label.
//    - If a `label` prop is provided, a label element is rendered with the specified text.
//    - The input field is rendered with the specified type, CSS classes, and any additional props passed to the component.
//    - The `ref` prop is forwarded to the input element, allowing the parent component to access the input element's DOM node.

// 6. **Styling**: The input field is styled using Tailwind CSS classes to provide consistent styling and responsiveness.

// 7. **Export**: The `Input` component is exported as the default export of the module, making it available for use in other parts of the application.

// // Overall, this code creates a reusable and customizable input component that follows best practices for accessibility and styling.


// In summary, React.forwardRef enables the passing of a ref from a parent component to a child component, allowing the parent component to interact with the child component's DOM node directly. This is useful for cases where you need to access the DOM node of a child component from its parent component, such as focusing on an input field or triggering a DOM event.




