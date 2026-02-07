import { motion } from "framer-motion";
import { ArrowRight, Play, ClipboardCheck, Calendar, CheckCircle2, TrendingUp } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const steps = [
  {
    icon: Play,
    title: "Start With a Free Trial",
    description: "Every new client starts with a free trial week. We don't ask you to commit blindly. We believe strongly in our system, so we want you to experience it first before making any decision.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment & Onboarding Call",
    description: "You'll fill out a detailed fitness assessment form. After that, we schedule an onboarding call to understand your goals, lifestyle, injuries or limitations, and food preferences.",
  },
  {
    icon: Calendar,
    title: "Experience the Free Trial Week",
    description: "Experience how our communication works, daily support and guidance, fast and clear responses, and how multiple experts support one client. We stay present every single day.",
  },
  {
    icon: CheckCircle2,
    title: "Continue Only If It Feels Right",
    description: "If you're happy with the process, you can choose to continue. You're officially onboarded, the same team continues with you, and your program runs in a structured, long-term format.",
  },
  {
    icon: TrendingUp,
    title: "Review, Adjust & Progress",
    description: "We track what's working, fix what's not, and keep moving forward. No perfection. Just consistency, structure, and support.",
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            How Our <span className="text-gradient">System</span> Works
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto font-body">
            Results come from clarity, systems, and daily support — not from PDFs or temporary motivation.
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

        {/* What Makes Us Different */}
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="mt-12 md:mt-16 px-4 sm:px-6 md:px-0 text-center"
        >
          <div className="gradient-card rounded-2xl p-6 md:p-12 border border-primary/20 max-w-3xl mx-auto shadow-card">
            <h3 className="font-display text-lg md:text-3xl mb-6 md:mb-8">What Makes Our System Different</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-8">
              {[
                "Multiple experts supporting one client",
                "Systems over motivation",
                "Consistency over perfection",
                "Real people and real conversations",
                "Daily accountability and presence",
                "Trust is built before payment",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 font-body text-xs md:text-sm">
                  <div className="w-2 h-2 rounded-full gradient-primary shrink-0 mt-1.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-lg gradient-primary font-semibold text-sm md:text-lg shadow-glow transition-all duration-300 hover:scale-105"
            >
              START WITH A FREE TRIAL
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 font-body">
              Experience the system before committing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
