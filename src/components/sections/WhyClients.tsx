import { motion } from "framer-motion";
import { useDisableAnimations } from "@/hooks/use-performance";

const reasons = [
  "A dedicated performance team supporting one client training, nutrition, mobility aligned",
  "Daily structured communication follow-ups not occasional",
  "Programs that evolve with your goals, schedule, and performance data",
  "Real accountability and human oversight, not automated templates",
  "A performance system built for long-term consistency, not short-term motivation",
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            Why Clients <span className="text-gradient">Stay</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto px-6 md:px-0">
          <div className="space-y-2 md:space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={disableAnimations ? { opacity: 1 } : { opacity: 0, x: -20 }}
                whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: disableAnimations ? 0 : 0.5, delay: disableAnimations ? 0 : index * 0.05 }}
                className="flex gap-3 md:gap-4 items-start"
              >
                <div className="w-2 h-2 rounded-full gradient-primary shrink-0 mt-2" />
                <p className="text-sm md:text-lg text-foreground/90 font-body leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClients;
