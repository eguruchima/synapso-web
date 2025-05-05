import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { NotesPage } from "./NotesPage";
import { Routes, Route, Navigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/me.json")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <>
      <Header user={user} setUser={setUser} />

      <Routes>
        {/* Auth screens (always accessible) */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />

        {/* Protected notes area */}
        <Route path="/notes/*" element={user ? <NotesPage /> : <Navigate to="/login" replace />} />

        {/* catch-all: redirect */}
        <Route path="*" element={user ? <Navigate to="/notes" replace /> : <Navigate to="/login" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
