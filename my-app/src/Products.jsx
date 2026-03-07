import { Link, Outlet } from "react-router-dom"
export default function Products() {
    return (
        <>
            <h1>Product Page</h1>
            <nav>
                <Link to = "phone">Phone</Link> | <Link to = "laptop">Laptop</Link>
            </nav>

            <Outlet/>
        </>
    )
}