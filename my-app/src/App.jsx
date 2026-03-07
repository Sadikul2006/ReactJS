// import { useState } from 'react'

// // import Hello from './Hello'
// // import Bye from './Bye'
// // import Student from './Student'
// // import InputExample from './InputExample'
// // import SimpleForm from './SimpleForm'
// import MultiInputForm from './MultiInputForm'


// function App() {
//     const [count, setCount] = useState(0)

//     return (
//         <>
//             {/* <Hello/>
//             <Bye/>
//             <Student />
//             <InputExample/> */}
//             {/* <SimpleForm/> */}
//             <MultiInputForm/>
//         </>
//     )
// }

// export default App



import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Phone from "./Phone"
import Laptop from "./Laptop"
function App() {
    function User() {
        console.log(useParams())
        const {id} = useParams()
        return <h2>User Profile for ID: {id}</h2>
    }

    function NotFound() {
        return <h1>404 - Page Not Found</h1>
    }
    return (
        <BrowserRouter>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/user/10">User</a> | <a href="/products">Products</a>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} >
                    <Route path="phone" element={<Phone/>}/>
                    <Route path="laptop" element={<Laptop/>}/>
                </Route>
                <Route path="/user/:id" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App