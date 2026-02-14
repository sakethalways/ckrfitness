import { motion } from "framer-motion";
import { ArrowRight, Play, ClipboardCheck, Calendar, CheckCircle2, TrendingUp } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const steps = [
  {
    icon: Play,
    title: "Apply for a Trial Week",
    description: "Every client begins with a structured trial week. This allows you to experience our communication, systems, and coaching standards before making any long-term commitment.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment & Onboarding Call",
    description: "You complete a detailed assessment. We conduct an onboarding call to understand your goals, lifestyle, limitations, and performance expectations.",
  },
  {
    icon: Calendar,
    title: "Experience the System",
    description: "You work directly with your assigned team. Daily communication, structured programming, and accountability begin immediately.",
  },
  {
    icon: CheckCircle2,
    title: "Continue if Aligned",
    description: "If the structure aligns with your expectations, you transition into a long-term program. The same team continues with you.",
  },
  {
    icon: TrendingUp,
    title: "Review, Adjust & Progress",
    description: "Progress is tracked weekly. Programs evolve based on data, performance, and feedback. We optimize continuously.",
  },
];

const HowItWorks = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="pt-4 md:pt-32 pb-24 md:pb-32 relative overflow-hidden bg-secondary/50">
      <div className="absolute inset-0 grain" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="text-center mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            How the <span className="text-gradient">System</span> Works
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-body">
            Results come from structure, clarity, and daily execution — not motivation or temporary plans.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: disableAnimations ? 0 : 0.5, delay: disableAnimations ? 0 : index * 0.05 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="flex gap-3 md:gap-6 mb-6 md:mb-8 group px-4 sm:px-6 md:px-0">
                {/* Icon */}
                <div className="shrink-0">
                  <motion.div
                    whileHover={disableAnimations ? {} : { scale: 1.1 }}
                    className="w-9 h-9 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow transition-all duration-300"
                  >
                    <step.icon className="w-4 h-4 md:w-6 md:h-6" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 md:pb-8 border-b border-border/50 group-last:border-0">
                  <div className="flex items-center gap-3 mb-1 md:mb-2">
                    <span className="text-primary font-display text-sm md:text-lg">STEP {index + 1}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-3xl mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
