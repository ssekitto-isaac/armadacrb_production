import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);
  const location = useLocation();

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) return location.hash === href;
    return location.pathname === href;
  };

  const textColor = "text-[#1A2636]";
  const activeColor = "text-[#91CD95]";
  const activeBg = "bg-[#EAF7EC]";

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm font-sans">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/armada-logo.png"
              alt="Armada Credit Bureau"
              className="h-18 md:h-14 object-contain"
            />
            <span className="sr-only">Armada Credit Bureau</span>
          </a>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0.5">
              {navItems.map((item) => {
                const isItemActive = isActive(item.href);

                return (
                  <NavigationMenuItem key={item.label}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:bg-transparent hover:text-[#1A2636] px-4 py-2 text-base font-bold",
                            textColor,
                            "transition-none",
                            isItemActive && `${activeColor} border-b-2 border-[#91CD95]`
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                          <ul className="flex flex-col gap-1 p-4 min-w-[350px]">
                            {item.subItems.map((sub) => {
                              const isSubActive = isActive(sub.href);
                              return (
                                <li key={sub.label}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={sub.href}
                                      className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none w-full text-left hover:text-[#1A2636]",
                                        isSubActive && `${activeColor} ${activeBg}`,
                                        "transition-none font-bold"
                                      )}
                                    >
                                      <div className="text-base font-bold leading-none">{sub.label}</div>
                                      {sub.description && (
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground font-normal">
                                          {sub.description}
                                        </p>
                                      )}
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              );
                            })}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-bold hover:text-[#1A2636]",
                            textColor,
                            "transition-none",
                            isItemActive && `${activeColor} border-b-2 border-[#91CD95]`
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
          <div className="hidden lg:flex items-center gap-5">
            <SocialLink icon={Twitter} href="https://x.com/ArmadaCRB" />
            <SocialLink icon={Linkedin} href="https://ug.linkedin.com/company/armada-credit-bureau" />
            <SocialLink icon={Instagram} href="#" />
            <SocialLink icon={Youtube} href="#" />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-[#1A2636]" aria-label="Toggle menu">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-2">
                    <img src="/armada-logo.png" alt="Armada" className="w-24 h-24 object-contain" />
                    <span className="text-xl font-bold text-[#1A2636]">ARMADA</span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <Collapsible
                        open={openMobileDropdowns.includes(item.label)}
                        onOpenChange={() => toggleMobileDropdown(item.label)}
                      >
                        <CollapsibleTrigger
                          className={cn(
                            "flex w-full items-center justify-between py-3 px-3 font-bold text-base rounded-md",
                            textColor,
                            "transition-none",
                            isActive(item.href) && activeColor
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              openMobileDropdowns.includes(item.label) && "rotate-180"
                            )}
                          />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="pl-4 pt-1 pb-3">
                          {item.subItems.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className={cn(
                                "block py-2.5 px-3 text-base font-bold rounded-md",
                                "transition-none",
                                isActive(sub.href) ? activeColor : "text-muted-foreground"
                              )}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <a
                        href={item.href}
                        className={cn(
                          "block py-3 px-3 font-bold text-base rounded-md",
                          textColor,
                          "transition-none",
                          isActive(item.href) && activeColor
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Socials */}
              <div className="flex justify-center gap-6 mt-10 pt-6 border-t">
                <SocialLink icon={Twitter} size={20} href="https://x.com/ArmadaCRB" />
                <SocialLink icon={Linkedin} size={20} href="https://ug.linkedin.com/company/armada-credit-bureau" />
                <SocialLink icon={Instagram} size={20} href="#" />
                <SocialLink icon={Youtube} size={20} href="#" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// SocialLink
function SocialLink({ icon: Icon, size = 20, href = "#" }: { icon: any; size?: number; href?: string }) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="text-muted-foreground transition-none"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
