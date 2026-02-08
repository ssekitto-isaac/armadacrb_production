import { Users, Eye, FileText, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "About Us",
    description: "We focus on stakeholder relations and astute partnership building.",
    link: "#about",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Our vision is to be the leading and most trusted single",
    link: "#vision",
  },
  {
    icon: FileText,
    title: "Our Mission",
    description: "To facilitate value creation and trust between creditors",
    link: "#mission",
  },
];

const StandardsSection = () => {
  return (
    <section id="standards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-6">
            We're setting the new standards
          </h2>
          <p className="text-lg text-muted-foreground">
            Operations is beyond garbage-in, garbage-out. That is why we combine the power
            of data science and analytics to deliver value-creating insights that enable
            businesses and individuals to make better decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="value-card group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle-outline mx-auto">
                <card.icon className="w-8 h-8 text-primary group-hover:text-navy transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6">{card.description}</p>
              <a
                href={card.link}
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all rounded-full px-4 py-2 group-hover:bg-navy-dark group-hover:text-primary-foreground"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
