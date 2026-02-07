import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Main footer content */}
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-0 md:justify-between mb-8 md:mb-12">
            {/* Brand section - Left */}
            <div className="flex flex-col gap-2 md:items-start">
              <span className="font-display text-xl md:text-2xl text-gradient">CKR FITNESS</span>
              <p className="text-xs md:text-sm text-muted-foreground font-body">
                Real Coaching. Real Support. Real Results.
              </p>
            </div>

            {/* Social section - Right */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-xs md:text-sm text-muted-foreground font-body">
                Follow real client progress
              </p>
              <a
                href="https://instagram.com/ckrfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span>@ckrfitness</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section - Bottom center */}
        <div className="py-6 md:py-8 border-t border-border flex items-center justify-center">
          <p className="text-xs md:text-sm text-muted-foreground font-body text-center">
            © 2025 CKR Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
