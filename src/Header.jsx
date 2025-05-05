import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .delete("/sessions.json")
      .then(() => {
        setUser(null);
        navigate("/login");
      })
      .catch((err) => console.error("Logout failed", err));
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>{" "}
        {user ? (
          <>
            | <span>Welcome, {user.name}</span> | <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
