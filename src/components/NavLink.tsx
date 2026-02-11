import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="flex items-center gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-secondary ${
            isActive ? "text-secondary" : "text-foreground"
          }`
        }
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/product-suites"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-secondary ${
            isActive ? "text-secondary" : "text-foreground"
          }`
        }
      >
        Product Suites
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-secondary ${
            isActive ? "text-secondary" : "text-foreground"
          }`
        }
      >
        News
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-sm font-medium hover:text-secondary ${
            isActive ? "text-secondary" : "text-foreground"
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default MainNav;
