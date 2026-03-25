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
    className="group flex items-center rounded-xl border border-border bg-card/60 px-6 py-5 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-card"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-muted-foreground">
      {icon}
    </div>
    <div className="flex-1 text-center">
      <p className="text-sm font-medium tracking-[0.15em] text-foreground uppercase">{label}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
    </div>
    <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0" />
  </a>
);

export default SocialLink;
