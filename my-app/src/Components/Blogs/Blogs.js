import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='border p-2 bg-durk'>
                <h3> What is the purpose of react router</h3>
                <p> <strong> Routing is a process in which a user is directed</strong> to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border p-2 mt-3'>
                <h3>  How does context api work</h3>
                <p> <strong>The React Context API is a way for a React app </strong> to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..</p>
            </div>
            <div className='border p-2 mt-3'>
                <h3> Useref hook in react</h3>
                <p> <strong>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). </strong> The returned object will persist for the full lifetime of the component.

            A common use case is to access a child imperatively:Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

            You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.

              However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.</p>
            </div>
        </div>



        
    );
};

export default Blogs;