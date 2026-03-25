import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  description: string;
}

const SocialLink = ({ href, icon, label, description }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md px-8 py-6 transition-all duration-500 hover:border-primary/20 hover:bg-card/50 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.15)]"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-muted-foreground/70 transition-colors duration-500 group-hover:text-primary">
      {icon}
    </div>
    <div className="flex-1 text-center pr-4">
      <p className="text-[13px] font-medium tracking-[0.2em] text-foreground/90 uppercase transition-colors duration-500 group-hover:text-foreground">{label}</p>
      <p className="text-[11px] text-muted-foreground/60 mt-1 tracking-wider">{description}</p>
    </div>
    <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 shrink-0 transition-all duration-500 group-hover:text-primary/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>
);

export default SocialLink;
