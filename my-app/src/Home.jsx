import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about")
    }
    return (
        <>
            <h1>Welcome to Home Page</h1>
            <button onClick={goToAbout}>Go to About</button>
        </>
    )
}