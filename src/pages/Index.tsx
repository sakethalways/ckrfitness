import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Approach from "@/components/sections/Approach";
import HowItWorks from "@/components/sections/HowItWorks";
import Programs from "@/components/sections/Programs";
import WhyClients from "@/components/sections/WhyClients";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="team">
          <Team />
        </section>
        
        <section id="approach">
          <Approach />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="programs">
          <Programs />
        </section>
        
        <WhyClients />
        
        <section id="faq">
          <FAQ />
        </section>
        
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
