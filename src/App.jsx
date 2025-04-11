import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/me")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <div>
      <Header user={user} />
      <SignupPage />
      <LoginPage />
      <LogoutLink setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
