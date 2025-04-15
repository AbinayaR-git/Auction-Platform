import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout_user } = useAuth();

  const hideOnRoutes = ["/Auction/Login", "/Auction/Signup"];

  if (hideOnRoutes.includes(location.pathname)) return null;

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      const bsCollapse = new window.bootstrap.Collapse(menu, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-warning navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fs-4">
          <span className="material-symbols-outlined text-dark me-2" style={{ fontSize: "30px" }}>
            gavel
          </span>
          Auction Bid
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-mb-0 ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-black nav-underline" onClick={closeMenu}>
                <i className="bi bi-house"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Auction/Category" className="nav-link text-black nav-underline" onClick={closeMenu}>
                <i className="bi bi-grid-fill"></i> Category
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Auction/upcoming" className="nav-link text-black nav-underline" onClick={closeMenu}>
                <i className="bi bi-lightning-charge"></i> Upcoming Auction
              </NavLink>
            </li>

         
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink to="/Auction/Login" className="nav-link text-black nav-underline" onClick={closeMenu}>
                    <i className="bi bi-person-circle"></i> Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Auction/Signup" className="nav-link text-black nav-underline" onClick={closeMenu}>
                    <i className="bi bi-person-fill-add"></i> Signup
                  </NavLink>
                </li>
              </>
            )}

            
            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-black nav-underline"
                  onClick={() => {
                    logout_user();
                    closeMenu();
                  }}
                >
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/Auction/Help" className="nav-link text-black nav-underline" onClick={closeMenu}>
                <i className="bi bi-question-square"></i> Help
              </NavLink>
            </li>
          </ul>
          <form onSubmit={(e) => {
            e.preventDefault();
            const query = e.target.search.value.trim();
            if (query) navigate(`/Auction/search?q=${encodeURIComponent(query)}`);
            closeMenu();
          }}>
            <input
              name="search"
              type="search"
              className="form-control"
              placeholder="🔍︎ Search..."
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
