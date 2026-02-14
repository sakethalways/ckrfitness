import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useDisableAnimations } from "@/hooks/use-performance";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd282UtWOtK8TQqXLQWFntfmTZTLP41LSGPQ_bNjn7pxxoprQ/viewform?usp=header";

const navLinks = [
  { name: "Team", href: "#team" },
  { name: "Approach", href: "#approach" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Programs", href: "#programs" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const disableAnimations = useDisableAnimations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={disableAnimations ? { y: 0 } : { y: -100 }}
        animate={disableAnimations ? { y: 0 } : { y: 0 }}
        transition={{ duration: disableAnimations ? 0 : 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : ""
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="font-display text-lg md:text-xl text-foreground hover:text-primary transition-colors">
              CKR FITNESS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group font-body"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-primary font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                Start Trial Week
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={disableAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={disableAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            exit={disableAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: disableAnimations ? 0 : 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="container px-4">
              <div className="flex flex-col gap-2 py-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={disableAnimations ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    animate={disableAnimations ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={disableAnimations ? { duration: 0 } : { delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-xl text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={disableAnimations ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  animate={disableAnimations ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={disableAnimations ? { duration: 0 } : { delay: navLinks.length * 0.05 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-primary font-semibold text-base mt-4"
                >
                  Start Trial Week
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
