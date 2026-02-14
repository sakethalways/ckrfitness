import { motion } from "framer-motion";
import { useDisableAnimations } from "@/hooks/use-performance";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to pay before starting?",
    answer: "Payment begins only after the trial week if you decide to continue.",
  },
  {
    question: "What happens during the trial week?",
    answer: "You complete onboarding, experience structured coaching, and interact with your assigned team. This allows you to understand our communication standards and system before long-term commitment.",
  },
  {
    question: "How is this different from other online coaching programs?",
    answer: "Most programs provide static plans with limited follow-up. Our system involves multiple specialists, daily communication, structured reviews, and ongoing program adjustments.",
  },
  {
    question: "How much time do I need to commit each day?",
    answer: "Program structure is designed around your schedule. Consistency matters more than long hours, and plans are adjusted to fit your availability.",
  },
  {
    question: "Is this only for beginners?",
    answer: "No. We work with beginners, professionals returning after a break, and experienced individuals seeking structured performance support.",
  },
  {
    question: "Do you provide strict meal plans?",
    answer: "Nutrition is personalized and practical. We build strategies around your lifestyle instead of imposing rigid or generic diets.",
  },
  {
    question: "What if I have injuries or pain?",
    answer: "Programs are adjusted accordingly. Physiotherapy support is integrated when required to ensure safe progress.",
  },
  {
    question: "What if I decide not to continue after the trial week?",
    answer: "There is no obligation. You continue only if the structure aligns with your expectations.",
  },
  {
    question: "How do I get started?",
    answer: "Click \"Start Trial Week,\" complete the assessment form, and our team will guide you through onboarding.",
  },
];

const FAQ = () => {
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
          className="text-center mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-0"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card rounded-xl border border-border px-4 sm:px-6 overflow-hidden hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-base sm:text-lg py-4 sm:py-6 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
