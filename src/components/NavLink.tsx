import { NavLink } from "@/components/NavLink";

const MainNav = () => {
  return (
    <nav className="flex items-center gap-8">
      <NavLink
        to="/"
        className="text-sm font-medium text-foreground hover:text-secondary"
        activeClassName="text-secondary"
      >
        Home
      </NavLink>

      <NavLink
        to="/product-suites"
        className="text-sm font-medium text-foreground hover:text-secondary"
        activeClassName="text-secondary"
      >
        Product Suites
      </NavLink>

      <NavLink
        to="/news"
        className="text-sm font-medium text-foreground hover:text-secondary"
        activeClassName="text-secondary"
      >
        News
      </NavLink>

      <NavLink
        to="/contact"
        className="text-sm font-medium text-foreground hover:text-secondary"
        activeClassName="text-secondary"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default MainNav;
