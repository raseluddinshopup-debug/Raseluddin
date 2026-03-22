import { Link, useNavigate } from "react-router-dom";

export default function AdminLayout({ title, children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    navigate("/admin/login");
  };

  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/site-editor">Site Editor</Link>
        <Link to="/admin/skills">Manage Skills</Link>
        <Link to="/admin/projects">Manage Projects</Link>
        <button onClick={logout}>Logout</button>
      </aside>
      <main className="admin-content">
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}