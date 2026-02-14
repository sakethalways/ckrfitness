import { motion } from "framer-motion";
import { Dumbbell, Utensils, Stethoscope, ClipboardList } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const team = [
  {
    icon: Dumbbell,
    role: "Fitness Coaches",
    description: "Handle training, exercise form, progression, consistency, and workout execution.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Utensils,
    role: "Nutrition Coaches",
    description: "Create practical, personalized nutrition based on your lifestyle, preferences, and habits.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Stethoscope,
    role: "Physiotherapist",
    description: "Supports mobility, injury prevention, pain management, and safe movement when required.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ClipboardList,
    role: "Program Lead",
    description: "Ensures clear communication, regular follow-ups, and coordination between the team.",
    color: "from-purple-500 to-pink-500",
  },
];

const Team = () => {
  const disableAnimations = useDisableAnimations();

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: disableAnimations ? 0 : 0.6 }}
          className="text-center mb-16 px-4 sm:px-0"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            Meet the <span className="text-gradient">Team</span> Behind Your Progress
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body">
            We are not a one-person operation. Every client is supported by a structured team, each with a clear role — so your progress never depends on just one individual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 sm:px-0">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: disableAnimations ? 0 : 0.5, delay: disableAnimations ? 0 : index * 0.05 }}
              className="text-center group"
            >
              <motion.div
                whileHover={disableAnimations ? {} : { scale: 1.05 }}
                className="gradient-card rounded-2xl p-6 border border-border h-full transition-all duration-300 hover:border-primary/30 shadow-card"
              >
                <motion.div
                  whileHover={disableAnimations ? {} : { rotate: 360 }}
                  transition={{ duration: disableAnimations ? 0 : 0.5 }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <member.icon className="w-7 md:w-8 h-7 md:h-8" />
                </motion.div>
                <h3 className="font-display text-lg md:text-xl mb-2">{member.role}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={disableAnimations ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={disableAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: disableAnimations ? 0 : 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto font-body"
        >
          Every client is backed by more than one professional, which means better support, faster responses, and long-term consistency — not dependency on a single coach.
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
