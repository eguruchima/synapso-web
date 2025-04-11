import axios from "axios";

export function LogoutLink({ setUser }) {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      setUser(null);
    });
  };

  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
