import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { NotesPage } from "./NotesPage";

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
      {user ? (
        // Logged in view: showing NotesPage (with Signup/Login hidden)
        <>
          <LogoutLink setUser={setUser} />
          <NotesPage />
        </>
      ) : (
        // Logged-out view: show signup and login forms
        <>
          <SignupPage />
          <LoginPage />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
