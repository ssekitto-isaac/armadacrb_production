import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import analyticsImage from "@/assets/analytics_african_men.png";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/AboutArmada" },
    { label: "Our Services", href: "/product-suites" },
    { label: "Credit Reports", href: "/product-suites/credit-reports" },
    { label: "Analytics", href: "/product-suites/analytics" },
    { label: "Contact Us", href: "/contact" },
  ];

  const services = [
    { label: "Credit Information", href: "/product-suites/credit-reports" },
    { label: "Risk Reports", href: "/product-suites/credit-reports" },
    { label: "Data Analytics", href: "/product-suites/analytics" },
    { label: "Portfolio Management", href: "/product-suites/portfolio" },
    { label: "Data Management", href: "/product-suites/data-management" },
  ];

  return (
    <footer
      id="contact"
      className="footer relative"
      style={{
        backgroundImage: `url(${analyticsImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for color consistency */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0, backgroundColor: "rgba(0, 14, 23, 0.95)" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-41 h-41 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src="/armada-logo-2.png"
                  alt="Armada logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Armada Credit Bureau Limited is a duly licensed credit reporting
              and analytics company operating within the regulatory framework of
              the Bank of Uganda.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/ArmadaCRB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://ug.linkedin.com/company/armada-credit-bureau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-link flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="footer-link flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  29A, Lumumba Avenue
                  <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@armadacrb.co.ug" className="footer-link">
                  info@armadacrb.co.ug
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+256800100200" className="footer-link">
                  +256 800 100 200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon - Fri: 8am - 5pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Armada Credit Bureau. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;