import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";
import heroCoach from "@/assets/hero-coach.png";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const Hero = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-glow opacity-50" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.h1
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
          >
            Real Coaching.
            <br />
            <span className="text-gradient">Real Support.</span>
            <br />
            Real Results.
          </motion.h1>

          <motion.p
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/75 md:text-muted-foreground max-w-2xl mb-4 font-body"
          >
            Personalized fitness, nutrition, and yoga programs backed by a real team — not just a plan.
          </motion.p>

          <motion.p
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.7 }}
            className="text-base text-foreground/70 md:text-muted-foreground/80 max-w-2xl mb-8 font-body"
          >
            We don't sell PDFs or generic programs. We build systems, provide daily support, and help you stay consistent every single day.
          </motion.p>

          <motion.div
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: disableAnimations ? 0 : 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-primary font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              START WITH A FREE TRIAL
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-muted-foreground self-center">
              Experience the system before committing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
