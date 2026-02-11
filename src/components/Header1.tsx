import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// ── Types ────────────────────────────────────────────────
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

// ── Navigation Data ─────────────────────────────────────
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
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return location.hash === href;
    return location.pathname === href;
  };

  const textColor = "text-[#1A2636]";
  const activeColor = "text-[#91CD95]";
  const activeBg = "bg-[#EAF7EC]";

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
            <span className="sr-only">Armada Credit Bureau</span>
          </a>

          {/* Desktop Nav – fixed for independent-feeling dropdowns */}
          <NavigationMenu className="hidden lg:flex ml-12 mr-auto">
            <NavigationMenuList className="gap-3 lg:gap-4 xl:gap-6"> {/* More spacing between items */}
              {navItems.map((item) => {
                const isItemActive = isActive(item.href);

                return (
                  <NavigationMenuItem key={item.label}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium transition-colors",
                            textColor,
                            "hover:text-[#1A2636] hover:bg-gray-50/70 focus:bg-gray-50/70",
                            "data-[state=open]:bg-gray-50/80 data-[state=open]:text-[#1A2636] data-[state=open]:shadow-sm",
                            isItemActive && cn(activeColor, "border-b-2 border-[#91CD95]")
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="min-w-[420px] p-6 bg-white rounded-xl shadow-xl border border-gray-100/80">
                            <ul className="grid gap-2.5">
                              {item.subItems.map((sub) => {
                                const isSubActive = isActive(sub.href);
                                return (
                                  <li key={sub.label}>
                                    <NavigationMenuLink asChild>
                                      <a
                                        href={sub.href}
                                        className={cn(
                                          "block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all",
                                          "hover:bg-gray-50 hover:text-[#1A2636] hover:shadow-sm",
                                          isSubActive && cn(activeColor, activeBg, "font-medium")
                                        )}
                                      >
                                        <div className="text-base font-semibold leading-none">{sub.label}</div>
                                        {sub.description && (
                                          <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            {sub.description}
                                          </p>
                                        )}
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "inline-flex h-10 items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-medium transition-colors",
                            textColor,
                            "hover:text-[#1A2636] hover:bg-gray-50/70 focus:bg-gray-50/70",
                            isItemActive && cn(activeColor, "border-b-2 border-[#91CD95]")
                          )}
                        >
                          {item.label}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Socials */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <SocialLink icon={Twitter} href="https://x.com/ArmadaCRB" />
            <SocialLink icon={Linkedin} href="https://ug.linkedin.com/company/armada-credit-bureau" />
            <SocialLink icon={Instagram} href="#" />
            <SocialLink icon={Youtube} href="#" />
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-[#1A2636]" aria-label="Toggle menu">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-2">
                    <img src="/armada-logo.png" alt="Armada" className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold text-[#1A2636]">ARMADA</span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <a
                      href={item.href}
                      className={cn(
                        "block py-3.5 px-5 font-semibold rounded-xl text-base",
                        textColor,
                        "transition-all duration-200",
                        isActive(item.href)
                          ? cn(activeColor, activeBg, "shadow-sm")
                          : "hover:bg-gray-50/80"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>

                    {item.subItems && (
                      <div className="space-y-2 pl-4">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className={cn(
                              "block py-3 px-5 text-sm rounded-xl border border-gray-200/70",
                              "transition-all duration-200",
                              "bg-white/60 backdrop-blur-[1px]",
                              isActive(sub.href)
                                ? cn(activeColor, "border-[#91CD95]/40 shadow-sm font-medium")
                                : "text-gray-700 hover:border-gray-300 hover:bg-gray-50/80 hover:shadow-sm"
                            )}
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

              <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
                <SocialLink icon={Twitter} size={24} href="https://x.com/ArmadaCRB" />
                <SocialLink icon={Linkedin} size={24} href="https://ug.linkedin.com/company/armada-credit-bureau" />
                <SocialLink icon={Instagram} size={24} href="#" />
                <SocialLink icon={Youtube} size={24} href="#" />
              </div>
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
      <Icon className={`w-${Math.round(size / 4)} h-${Math.round(size / 4)}`} />
    </a>
  );
}