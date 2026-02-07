import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Utensils, Leaf, Users } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const programs = [
  {
    icon: Dumbbell,
    title: "One-on-One Live Fitness Coaching",
    bestFor: "People who want full guidance, accountability, and live support.",
    features: [
      "Live one-on-one workout sessions",
      "Fully personalized training plan",
      "Customized nutrition support",
      "Daily WhatsApp chat support",
      "Weekly check-ins and team calls",
      "Physio and mobility guidance when needed",
    ],
    pricing: [
      { duration: "4 Weeks", price: "₹14,000 – ₹16,000" },
      { duration: "12 Weeks", price: "₹39,000 – ₹45,000" },
    ],
    featured: true,
  },
  {
    icon: Dumbbell,
    title: "Online Fitness + Nutrition Coaching",
    bestFor: "People who want structure and support without daily live sessions.",
    features: [
      "Personalized workout plan",
      "Customized nutrition plan",
      "Two live demo sessions for form guidance",
      "Exercise form review via short videos",
      "Weekly check-ins and plan updates",
      "Chat and call support",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹26,000" }],
    featured: false,
  },
  {
    icon: Utensils,
    title: "Personalized Nutrition Coaching",
    bestFor: "People who want sustainable eating without strict rules.",
    features: [
      "Customized nutrition plan based on your lifestyle",
      "Food choices built around what you already enjoy",
      "Weekly check-ins and plan adjustments",
      "Daily chat support",
      "Practical, flexible approach",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹16,000" }],
    featured: false,
  },
  {
    icon: Leaf,
    title: "Group Yoga Classes",
    bestFor: "People who want flexibility, consistency, and a simple routine.",
    features: [
      "Unlimited group yoga classes",
      "Multiple time slots (morning and evening)",
      "5 days per week",
      "Attend as many sessions as you want",
      "Structured 12-week format",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹16,000" }],
    featured: false,
  },
  {
    icon: Users,
    title: "Yoga + Nutrition Coaching",
    bestFor: "People who want holistic progress with movement and nutrition.",
    features: [
      "Unlimited group yoga classes",
      "Multiple time slots (morning and evening)",
      "Personalized nutrition plan",
      "Weekly nutrition check-ins",
      "Daily chat support",
    ],
    pricing: [{ duration: "12 Weeks", price: "₹26,000" }],
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Programs & <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            All programs begin with a free trial. Final structure and commitment happen only after you experience the system.
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
                  <div key={idx} className="flex justify-between items-center mb-2 font-body">
                    <span className="text-sm text-muted-foreground">{price.duration}</span>
                    <span className="font-semibold text-foreground">{price.price}</span>
                  </div>
                ))}
              </div>
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
          <p className="text-muted-foreground mb-6 font-body">
            Every program is supported by a real team — not just one person.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8 py-2 md:py-4 rounded-lg gradient-primary font-semibold text-sm md:text-lg shadow-glow transition-all duration-300 hover:scale-105"
          >
            START WITH A FREE TRIAL
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-muted-foreground mt-4 font-body">
            Experience the system before committing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
