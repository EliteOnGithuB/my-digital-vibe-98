import { type ReactNode } from "react";

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
    className="group flex items-center gap-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm px-6 py-5 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
      {icon}
    </div>
    <div>
      <p className="font-medium text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </a>
);

export default SocialLink;
