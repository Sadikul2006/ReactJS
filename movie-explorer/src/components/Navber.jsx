import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <nav className="navbar">
      <Link className="logo">
        <h2>🎬 Movie Explorer</h2>
      </Link>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navber;
