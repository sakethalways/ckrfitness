import { motion } from "framer-motion";
import { Users, MessageCircle, Zap, Utensils, RefreshCw, Heart } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const reasons = [
  {
    icon: Users,
    title: "Multiple Experts, One Client",
    description: "Fitness, nutrition, physio, and a program lead — all working together for your progress.",
  },
  {
    icon: MessageCircle,
    title: "Daily Communication",
    description: "Daily communication and support, not weekly PDFs. We're with you every step.",
  },
  {
    icon: Zap,
    title: "Fast Responses",
    description: "Fast responses, clear follow-ups, and regular check-ins. No waiting days for answers.",
  },
  {
    icon: Utensils,
    title: "Flexible Nutrition",
    description: "Nutrition built around foods you already enjoy — no extreme or rigid plans.",
  },
  {
    icon: RefreshCw,
    title: "Adaptive Programs",
    description: "Programs adapt as your life, schedule, and goals change. We evolve with you.",
  },
  {
    icon: Heart,
    title: "Human Connection",
    description: "Strong human connection — real people who stay involved, not automated systems.",
  },
];

const WhyClients = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/50">
      <div className="absolute inset-0 grain" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Why Clients <span className="text-gradient">Stay With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Most of our clients come through referrals and stay with us long-term — because the system works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: disableAnimations ? 0 : 0.5, delay: disableAnimations ? 0 : index * 0.05 }}
              className="group"
            >
              <div className="gradient-card rounded-2xl p-6 border border-border h-full transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 shadow-card">
                <motion.div
                  whileHover={disableAnimations ? {} : { scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-glow"
                >
                  <reason.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-display text-xl mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClients;
