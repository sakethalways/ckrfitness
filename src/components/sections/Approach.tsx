import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const forYou = [
  "You're looking for personalized guidance, not generic plans",
  "You value daily support, accountability, and real human connection",
  "You're willing to show up, communicate honestly, and trust the process",
  "You want long-term results, not quick fixes",
];

const notForYou = [
  "You're only looking for a PDF or one-time plan",
  "You want results without putting in consistent effort",
  "You're not ready to engage with the team or follow guidance",
  "You're looking for shortcuts instead of sustainable habits",
];

const Approach = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="pt-4 md:pt-32 pb-24 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="text-center mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Our Approach & <span className="text-gradient">Expectations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            We work best with people who genuinely want to improve their health and are ready to stay consistent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto px-4 sm:px-6 md:px-0">
          {/* For You */}
          <motion.div
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0 }}
            whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: disableAnimations ? 0 : 0.6, delay: 0.2 }}
            className="gradient-card rounded-2xl p-6 md:p-8 border border-primary/20 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center shrink-0">
                <Check className="w-5 md:w-6 h-5 md:h-6" />
              </div>
              <h3 className="font-display text-lg md:text-xl">This is for you if:</h3>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {forYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={disableAnimations ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: disableAnimations ? 0 : 0.3 + index * 0.05 }}
                  className="flex gap-2 md:gap-3 text-foreground/90 font-body text-xs md:text-sm"
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 flex-none mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={disableAnimations ? { opacity: 1 } : { opacity: 0 }}
            whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: disableAnimations ? 0 : 0.6, delay: 0.2 }}
            className="gradient-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <X className="w-5 md:w-6 h-5 md:h-6 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl">This may not be the right fit if:</h3>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {notForYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={disableAnimations ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: disableAnimations ? 0 : 0.3 + index * 0.05 }}
                  className="flex gap-2 md:gap-3 text-muted-foreground font-body text-xs md:text-sm"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 shrink-0 flex-none mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: disableAnimations ? 0 : 0.6 }}
          className="text-center text-lg text-muted-foreground mt-12 font-body"
        >
          We believe real change happens when the right system meets the right mindset.
        </motion.p>
      </div>
    </section>
  );
};

export default Approach;
