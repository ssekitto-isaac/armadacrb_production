import { ArrowRight, TrendingUp, Shield, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description: "Leverage powerful analytics to make informed decisions",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Licensed and regulated by the Bank of Uganda",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast and efficient credit reporting services",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to your success",
  },
];

const WhyChooseUs = () => {
  //return (
    // <section className="py-20 bg-primary text-primary-foreground">
    //   <div className="container mx-auto px-4">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //       {/* Content */}
    //       <div>
    //         <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
    //           Why Choose Us
    //         </span>
    //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
    //           We have a wealth of experience
    //         </h2>
    //         <p className="text-primary-foreground/80 text-lg mb-8">
    //           We identify our clients' needs through detailed discussions and assessments
    //           of their business. We have the flexibility and experience to quickly
    //           identify existing and emerging risks.
    //         </p>
    //         <a
    //           href="#"
    //           className="btn-secondary inline-flex items-center gap-2 group"
    //         >
    //           Read More
    //           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    //         </a>
    //       </div>

    //       {/* Features Grid */}
    //       <div className="grid sm:grid-cols-2 gap-6">
    //         {reasons.map((reason) => (
    //           <div
    //             key={reason.title}
    //             className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors"
    //           >
    //             <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
    //               <reason.icon className="w-7 h-7 text-secondary-foreground" />
    //             </div>
    //             <h3 className="text-lg font-heading font-bold mb-2">{reason.title}</h3>
    //             <p className="text-primary-foreground/70 text-sm">{reason.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  //);
};

export default WhyChooseUs;
