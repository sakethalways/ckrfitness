import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const FinalCTA = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: disableAnimations ? 0 : 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl mb-6"
          >
            Ready to <span className="text-gradient">Get Started?</span>
          </motion.h2>

          <motion.p
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: disableAnimations ? 0 : 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-body"
          >
            Start with a free trial and experience how our system actually works.
          </motion.p>

          <motion.div
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: disableAnimations ? 0 : 0.4 }}
            className="flex flex-col items-center gap-2 mb-8"
          >
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground font-body">
              <span>No pressure.</span>
              <span className="hidden sm:inline">•</span>
              <span>No forced commitment.</span>
              <span className="hidden sm:inline">•</span>
              <span>Just real support.</span>
            </div>
          </motion.div>

          <motion.div
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: disableAnimations ? 0 : 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-5 rounded-xl gradient-primary font-semibold text-sm md:text-xl shadow-glow transition-all duration-300 hover:scale-105"
            >
              START WITH A FREE TRIAL
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
            </a>
            
            <p className="text-xs md:text-sm text-muted-foreground font-body">
              Experience the system before committing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
