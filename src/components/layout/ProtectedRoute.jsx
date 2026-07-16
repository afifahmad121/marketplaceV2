import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AutContext";

function ProtectedRoute({ children, requireAdmin = false }) {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <p style={{ padding: 24 }}>Memuat...</p>;

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
