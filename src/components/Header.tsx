import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/AboutArmada",
    subItems: [
      { label: "About Armada CRB", href: "/AboutArmada", description: "Learn about our company and values" },
      { label: "Our People", href: "/OurPeople", description: "Meet our leadership" },
    ],
  },
  {
    label: "Product Suites",
    href: "/product-suites",
    subItems: [
      { label: "Credit Information & Risk Reports", href: "/product-suites/credit-reports", description: "Actionable insights for credit decisions" },
      { label: "Decision and Data Analytics", href: "/product-suites/analytics", description: "Data-driven business intelligence" },
      { label: "Portfolio & Risk Management", href: "/product-suites/portfolio", description: "Comprehensive risk management solutions" },
      { label: "Data Management", href: "/product-suites/data-management", description: "Data is a valuable source of actionable insight" },
    ],
  },
  { label: "News", href: "/news" },
  {
    label: "Customer Information",
    href: "/credit-education",
    subItems: [
      { label: "Self Inquiry", href: "/SelfInquiry", description: "Submit a self inquiry request" },
      { label: "Complaint Handling", href: "/DisputeResolutionForm", description: "How we handle your concerns" },
      { label: "Consumer Education", href: "/credit-education", description: "Resources to improve your credit knowledge" },
      { label: "FAQs", href: "/FAQ", description: "Frequently asked questions" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return location.hash === href;
    return location.pathname === href;
  };

  const textColor = "text-[#1A2636]";
  const activeColor = "text-[#91CD95]";
  const activeBg = "bg-[#EAF7EC]";

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/armada-logo.png"
              alt="Armada Credit Bureau"
              className="h-8 md:h-10 object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex ml-8 mr-auto gap-6" ref={dropdownRef}>
            {navItems.map((item) => {
              const isItemActive = isActive(item.href);
              const isOpen = openDropdown === item.label;

              return (
                <div key={item.label} className="relative">

                  {/* Parent */}
                  <button
                    onClick={() =>
                      item.subItems
                        ? setOpenDropdown(isOpen ? null : item.label)
                        : null
                    }
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                      textColor,
                      isItemActive && `${activeColor} border-b-2 border-[#91CD95]`
                    )}
                  >
                    {item.label}

                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {item.subItems && (
                    <div
                      className={cn(
                        "absolute left-0 top-full mt-2 w-[350px] rounded-xl border bg-white shadow-lg p-4 z-50 transition-all duration-300 origin-top",
                        isOpen
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                      )}
                    >
                      <ul className="flex flex-col gap-1">
                        {item.subItems.map((sub) => {
                          const isSubActive = isActive(sub.href);

                          return (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                className={cn(
                                  "block rounded-md p-3 hover:bg-gray-50 transition-all duration-200",
                                  isSubActive && `${activeColor} ${activeBg}`
                                )}
                              >
                                <div className="text-sm font-medium">
                                  {sub.label}
                                </div>
                                {sub.description && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {sub.description}
                                  </p>
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Socials */}
          <div className="hidden lg:flex items-center gap-5 ml-auto">
            <SocialLink icon={Twitter} href="https://x.com/ArmadaCRB" />
            <SocialLink icon={Linkedin} href="https://ug.linkedin.com/company/armada-credit-bureau" />
            <SocialLink icon={Instagram} href="#" />
            <SocialLink icon={Youtube} href="#" />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-[#1A2636]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[340px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>ARMADA</SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <a
                      href={item.href}
                      className={cn(
                        "py-3 px-4 font-medium rounded-lg",
                        textColor,
                        isActive(item.href) && cn(activeColor, activeBg)
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>

                    {item.subItems && (
                      <div className="flex flex-col mt-1 mb-3">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="py-2 px-9 text-sm text-muted-foreground hover:bg-gray-50 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}

function SocialLink({ icon: Icon, size = 20, href = "#" }: { icon: any; size?: number; href?: string }) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="text-muted-foreground hover:text-[#1A2636] transition-colors"
    >
      <Icon size={size} />
    </a>
  );
}
