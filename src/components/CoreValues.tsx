import { Lightbulb, Award, ShieldCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import innovationImg from "@/assets/innovation4.png";

const CollaborationIcon = ({ className }) => (
  <FontAwesomeIcon
    icon={faUsers}
    className={className}
  />
);

const InnovationIcon = () => (
  <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="6" x2="12" y2="4" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="22" strokeLinecap="round" />
    <line x1="18" y1="12" x2="20" y2="12" strokeLinecap="round" />
    <line x1="4" y1="12" x2="6" y2="12" strokeLinecap="round" />
    <line x1="17.2" y1="6.8" x2="18.6" y2="5.4" strokeLinecap="round" />
    <line x1="5.4" y1="18.6" x2="6.8" y2="17.2" strokeLinecap="round" />
    <line x1="17.2" y1="17.2" x2="18.6" y2="18.6" strokeLinecap="round" />
    <line x1="5.4" y1="5.4" x2="6.8" y2="6.8" strokeLinecap="round" />
    <circle cx="9" cy="9" r="1.5" fill="#16a34a" />
    <circle cx="15" cy="8" r="1" fill="#16a34a" />
    <circle cx="12" cy="14" r="1.5" fill="#16a34a" />
    <path d="M9 10.5v2.5M15 9v2M12 15.5v2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 6l-1.5 3H12l1.5 3M12 6v8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const values = [
  {
    icon: innovationImg,
    title: "Innovation",
    description: "We relentlessly pursue creative solutions to improve our processes and systems.",
  },
  {
    icon: CollaborationIcon,
    title: "Collaboration",
    description: "We promote an environment of respect and collaboration, supporting each other.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We go above and beyond to exceed our valued client's expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "We take ownership of the quality of our work and take pride in what we deliver.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Label and Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Our Framework</span>
          <h2 className="section-title-dark mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">
            Our core values make us who we are. As we change and grow, the beliefs that
            are most important to us stay the same
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-28 h-28 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary transition-colors duration-300">
                {typeof value.icon === "string" ? (
                  <img src={value.icon} alt={value.title} className="w-14 h-14" />
                ) : (
                  <value.icon className="w-14 h-14 text-secondary group-hover:text-secondary-foreground transition-colors" />
                )}
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
