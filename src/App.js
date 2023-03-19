import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminMovie from "./pages/AdminMovie";
import AdminTV from "./pages/AdminTV";
import AllMovies from "./pages/AllMovies";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_movies" element={<AllMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin_tv"
            element={
              <ProtectedRoute>
                <AdminTV />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin_movie"
            element={
              <ProtectedRoute>
                <AdminMovie />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
