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
    answer: "No. Every client starts with a free trial week. You experience the system, communication, and support first — then decide if you want to continue. No blind commitment.",
  },
  {
    question: "What happens during the free trial week?",
    answer: "During the free trial, you complete an assessment, have an onboarding call, experience daily support and communication, see how the team works together, and follow a structure based on your goals. There's no sales pressure — just experience the system as it actually runs.",
  },
  {
    question: "Is this only for beginners?",
    answer: "No. We work with beginners, people restarting after a break, intermediate and advanced individuals, busy professionals, and people with injuries or limitations. Everything is personalized based on your current level and lifestyle.",
  },
  {
    question: "Do you provide meal plans or strict diets?",
    answer: "We don't give rigid or generic diets. Nutrition is personalized to your lifestyle, built around foods you already enjoy, practical and sustainable, and adjusted as your schedule and goals change. No extreme restrictions. No copy-paste plans.",
  },
  {
    question: "What if I have injuries or pain?",
    answer: "That's completely okay. When needed, a physiotherapist is involved, mobility and pain management are addressed, and exercises are modified safely. Your progress never depends on pushing through pain.",
  },
  {
    question: "How is this different from other online coaching programs?",
    answer: "Most programs offer PDFs, one coach, and minimal follow-ups. Our system offers multiple experts supporting one client, daily communication, fast responses, structured systems (not motivation talk), and real human connection. You're supported every day — not left alone.",
  },
  {
    question: "How much time do I need to commit each day?",
    answer: "It depends on your program and goals. We design plans that fit your work schedule, energy levels, and available time. Consistency matters more than long hours.",
  },
  {
    question: "Can I switch programs later?",
    answer: "Yes. As your goals, schedule, or preferences change, programs can be adjusted, structure can evolve, and support adapts with you. You're not locked into a rigid system.",
  },
  {
    question: "What if I decide not to continue after the free trial?",
    answer: "That's completely fine. There's no obligation, no pressure, and no follow-ups pushing you. You continue only if it feels right.",
  },
  {
    question: "How do I get started?",
    answer: "Simply click \"Start Free Trial,\" fill out the coaching form, and we'll take it from there.",
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Everything you need to know before getting started.
          </p>
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
