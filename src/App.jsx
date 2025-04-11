import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <LogoutLink />
      <Footer />
    </div>
  );
}

export default App;
