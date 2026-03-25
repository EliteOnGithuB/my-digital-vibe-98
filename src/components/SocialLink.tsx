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
    className="group flex items-center rounded-xl border border-foreground/[0.06] bg-secondary/40 px-5 py-4 transition-colors duration-300 hover:border-foreground/10 hover:bg-secondary/70"
  >
    <div className="flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
      {icon}
    </div>
    <div className="flex-1 text-center pr-3">
      <p className="text-xs font-medium tracking-[0.15em] text-foreground/80 uppercase">{label}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">{description}</p>
    </div>
    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 shrink-0 transition-colors duration-300 group-hover:text-foreground/50" />
  </a>
);

export default SocialLink;
