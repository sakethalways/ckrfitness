import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Utensils, Leaf, Users } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const programs = [
  {
    icon: Dumbbell,
    title: "Private Performance Coaching",
    bestFor: "Best for professionals who want structured accountability, live coaching, and full performance support.",
    features: [
      "Private live coaching sessions",
      "Personalized training structure",
      "Integrated nutrition support",
      "Daily communication access to assigned team",
      "Weekly performance reviews",
      "Physio & mobility support when needed",
      "Program Lead for accountability and coordination",
    ],
    pricing: [
      { duration: "4 Weeks (4 Sessions/Week)", price: "₹18,000" },
      { duration: "4 Weeks (5 Sessions/Week)", price: "₹21,000" },
      { duration: "12 Weeks (4 Sessions/Week)", price: "₹45,000", label: "Most Popular", bold: true },
      { duration: "12 Weeks (5 Sessions/Week)", price: "₹54,000", bold: true },
    ],
    featured: true,
  },
  {
    icon: Dumbbell,
    title: "Structured Online Coaching",
    bestFor: "Best for professionals who want structured guidance without daily live sessions.",
    features: [
      "Personalized training program",
      "Custom nutrition framework",
      "Two live demo sessions",
      "Video-based form review",
      "Weekly structured check-ins",
      "Ongoing chat and call support",
      "Assigned Program Lead",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹32,000" }],
    featured: false,
  },
  {
    icon: Utensils,
    title: "Performance Nutrition Coaching",
    bestFor: "Best for individuals focused on sustainable fat loss, muscle gain, or metabolic health.",
    features: [
      "Fully customized nutrition strategy",
      "Lifestyle-integrated meal planning",
      "Weekly progress reviews",
      "Daily communication support",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹22,000" }],
    featured: false,
  },
  {
    icon: Leaf,
    title: "Group Yoga (Online)",
    bestFor: "Best for professionals seeking flexibility, mobility, and structured weekly recovery.",
    features: [
      "Live online group yoga sessions",
      "4 structured training days per week",
      "Multiple live time slots each day",
      "Access to attend any scheduled session",
      "12-week structured format",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹18,000" }],
    featured: false,
  },
  {
    icon: Users,
    title: "Yoga + Nutrition Coaching",
    bestFor: "Best for individuals who want structured yoga and personalized nutrition combined.",
    features: [
      "Live online group yoga sessions (4 structured days/week)",
      "Access to all scheduled yoga sessions",
      "Personalized nutrition strategy",
      "Weekly nutrition reviews",
      "Daily structured support",
      "12-week structured format",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹30,000" }],
    featured: false,
  },
];

const Programs = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="text-center mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            Programs & <span className="text-gradient">Investment</span>
          </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto font-body">
            All programs are delivered through a structured performance system designed for long-term results.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto font-body mt-2">
            Every client begins with a structured Trial Week. Long-term commitment is confirmed after alignment during onboarding.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mx-auto font-body mt-2">
            Limited slots available to maintain delivery standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: disableAnimations ? 0 : 0.5, delay: disableAnimations ? 0 : index * 0.05 }}
              className={`gradient-card rounded-2xl p-4 md:p-6 border shadow-card transition-all duration-300 hover:-translate-y-2 ${
                program.featured
                  ? "border-primary/40 md:col-span-2 lg:col-span-1"
                  : "border-border"
              }`}
            >
              {program.featured && (
                <div className="inline-block px-3 py-1 rounded-full gradient-primary text-xs font-semibold mb-4">
                  MOST POPULAR
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  program.featured ? "gradient-primary" : "bg-muted"
                }`}>
                  <program.icon className={`w-5 h-5 ${program.featured ? "" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-display text-lg md:text-xl">{program.title}</h3>
              </div>

              <p className="text-sm text-primary mb-4 font-body">Best for: {program.bestFor}</p>

              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-4">
                {program.pricing.map((price, idx) => (
                  <div key={idx} className={`flex justify-between items-center mb-2 font-body ${price.bold ? "font-bold" : ""}`}>
                    <span className="text-sm text-muted-foreground">{price.duration}</span>
                    <span className={`font-semibold text-foreground ${price.bold ? "text-lg font-bold" : ""}`}>{price.price}</span>
                  </div>
                ))}
              </div>

              {program.featured && (
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Limited private slots available per batch to maintain coaching standards.
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: disableAnimations ? 0 : 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8 py-2 md:py-4 rounded-lg gradient-primary font-semibold text-sm md:text-lg shadow-glow transition-all duration-300 hover:scale-105"
          >
            Start Your Trial Week
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-muted-foreground mt-4 font-body">
            Experience the structure before long-term commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
