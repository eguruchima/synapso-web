import axios from "axios";

export function LogoutLink({ setUser }) {
  const handleLogout = () => {
    axios
      .delete("/sessions.json")
      .then(() => setUser(null))
      .catch((e) => console.error(e));
  };

  return <button onClick={handleLogout}>Logout</button>;
}
