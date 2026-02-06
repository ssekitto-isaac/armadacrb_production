import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
// import heroImage from "@assets/two_ladies_african american final.jpeg";
import heroImage from "@/assets/hero-image.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  {
    label: "About Us",
    href: "/#about",
    subItems: [
      { label: "About Armada CRB", href: "/#about", description: "Learn about our company and values" },
      { label: "Our Vision", href: "/#vision", description: "Our vision for the future of credit reporting" },
      { label: "Our Mission", href: "/#mission", description: "Our mission to serve you better" },
      { label: "Core Values", href: "/#values", description: "The principles that guide us" },
    ],
  },
  {
    label: "Product Suites",
    href: "/product-suites",
    subItems: [
      { label: "Credit Information & Risk Reports", href: "/product-suites", description: "Actionable insights for credit decisions" },
      { label: "Decision and Data Analytics", href: "/product-suites", description: "Data-driven business intelligence" },
      { label: "Portfolio & Risk Management", href: "/product-suites", description: "Comprehensive risk management solutions" },
      { label: "Data Management", href: "/product-suites", description: "Data is a valuable source of actionable insight" },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Customer Information",
    href: "/#info",
    subItems: [
      { label: "FAQs", href: "/#faqs", description: "Frequently asked questions" },
      { label: "Complaint Handling", href: "/#complaints", description: "How we handle your concerns" },
      { label: "Consumer Education", href: "/#education", description: "Resources to improve your credit knowledge" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-teal-light rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">A</span>
              </div>
              <div className="ml-2">
                <span className="text-2xl font-heading font-bold text-primary">ARMADA</span>
                <span className="block text-[10px] text-muted-foreground tracking-widest -mt-1">
                  CREDIT BUREAU
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-transparent hover:text-secondary focus:bg-transparent data-[state=open]:bg-transparent",
                          item.active && "text-primary border-b-2 border-secondary"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 bg-background border border-border rounded-md shadow-lg">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.label}>
                              <NavigationMenuLink asChild>
                                {subItem.href.startsWith("/#") ? (
                                  <a
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none text-foreground">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </a>
                                ) : (
                                  <Link
                                    to={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none text-foreground">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </Link>
                                )}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      {item.href.startsWith("/#") ? (
                        <a
                          href={item.href}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-secondary focus:text-secondary focus:outline-none",
                            item.active && "text-primary border-b-2 border-secondary"
                          )}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-secondary focus:text-secondary focus:outline-none",
                            item.active && "text-primary border-b-2 border-secondary"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-primary"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center">
                    <img src="/armada-logo.png" alt="Armada logo" className="w-8 h-8 object-contain rounded-lg" />
                    <div className="ml-2">
                      <span className="text-xl font-heading font-bold text-primary">ARMADA</span>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.subItems ? (
                        <Collapsible
                          open={openMobileDropdowns.includes(item.label)}
                          onOpenChange={() => toggleMobileDropdown(item.label)}
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-2 text-foreground hover:text-secondary transition-colors font-medium">
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                openMobileDropdowns.includes(item.label) && "rotate-180"
                              )}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="pl-4 flex flex-col gap-1 pb-2">
                              {item.subItems.map((subItem) => (
                                subItem.href.startsWith("/#") ? (
                                  <a
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="py-2 px-2 text-sm text-muted-foreground hover:text-secondary transition-colors rounded-md hover:bg-accent"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    className="py-2 px-2 text-sm text-muted-foreground hover:text-secondary transition-colors rounded-md hover:bg-accent"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                )
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        item.href.startsWith("/#") ? (
                          <a
                            href={item.href}
                            className="block py-3 px-2 text-foreground hover:text-secondary transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="block py-3 px-2 text-foreground hover:text-secondary transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border px-2">
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
