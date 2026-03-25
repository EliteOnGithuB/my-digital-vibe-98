import SocialLink from "@/components/SocialLink";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background font-['Space_Grotesk',sans-serif] flex flex-col overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-md space-y-16">
          {/* Avatar & Name */}
          <div className="text-center space-y-6 animate-fade-in" style={{ animationDuration: '0.8s' }}>
            <div className="mx-auto h-28 w-28 rounded-full border border-muted-foreground/20 flex items-center justify-center text-3xl font-extralight text-foreground/80 bg-card/20 backdrop-blur-sm">
              E
            </div>
            <div className="space-y-2">
              <h1 className="text-base font-light text-foreground/90 tracking-[0.35em] uppercase">
                EliteUk
              </h1>
              <p className="text-[11px] text-muted-foreground/40 tracking-[0.25em] uppercase font-light">
                Digital Space
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center animate-fade-in" style={{ animationDuration: '1s', animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="w-8 border-t border-muted-foreground/15" />
          </div>

          {/* Links */}
          <div className="space-y-4">
            <div className="animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.3s', animationFillMode: 'both' }}>
              <SocialLink
                href="https://x.com/EliteUk_"
                icon={<TwitterIcon />}
                label="Twitter / X"
                description="@EliteUk_"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.45s', animationFillMode: 'both' }}>
              <SocialLink
                href="https://www.tiktok.com/@e1teuk"
                icon={<TikTokIcon />}
                label="TikTok"
                description="@e1teuk"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.6s', animationFillMode: 'both' }}>
              <SocialLink
                href="https://open.spotify.com/playlist/0wd3FBxmmGAhBpGV4RfdQO"
                icon={<SpotifyIcon />}
                label="Spotify"
                description="Playlist"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8">
        <p className="text-[10px] text-muted-foreground/25 tracking-wider font-light">© 2026 e1te.info</p>
      </footer>
    </div>
  );
};

export default Index;
