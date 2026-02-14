import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";
import heroCoach from "@/assets/hero-coach.png";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const Hero = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="relative pt-40 pb-16 md:pt-16 md:pb-20 flex items-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Coach Image - positioned on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[55%]">
        <img
          src={heroCoach}
          alt="CKR Fitness Coach"
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        {/* Gradient overlay for text readability - slightly lightened */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/15" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-glow opacity-50" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-8">
        <div className="max-w-3xl">
          <motion.p
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.6, delay: 0.2 }}
            className="text-xs md:text-sm text-primary font-semibold mb-4 uppercase tracking-wide"
          >
            Trusted by professionals across USA, Canada, Australia & India
          </motion.p>

          <motion.h1
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6"
          >
            Elite Coaching for Professionals.
            <br />
            <span className="text-gradient">Built on Systems.</span>
            <br />
            Backed by a Dedicated Team.
          </motion.h1>

          <motion.p
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-foreground/75 md:text-muted-foreground max-w-2xl mb-8 font-body"
          >
            Personalized fitness, nutrition, and yoga programs designed for structured, long-term performance — not short-term motivation.
          </motion.p>

          <motion.div
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg gradient-primary font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              Start Your Trial Week
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.p
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.8 }}
            className="text-xs md:text-sm text-muted-foreground mt-3"
          >
            Experience the system before committing.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
