import Image from 'next/image';
import { Globe, Youtube, Instagram, Linkedin, Mail, Heart, Briefcase, Github, Rss, Rocket } from 'lucide-react';
import { TikTokIcon, WhatsAppIcon } from '@/components/icons';

const links = [
  { href: 'https://uixel.tech', text: 'UIXEL Website', icon: <Globe className="size-5 shrink-0" /> },
  { href: 'https://www.youtube.com/@uixel', text: 'YouTube', icon: <Youtube className="size-5 shrink-0" /> },
  { href: 'https://www.instagram.com/uixel.tech/', text: 'Instagram', icon: <Instagram className="size-5 shrink-0" /> },
  { href: 'https://www.tiktok.com/@uixel.tech', text: 'TikTok', icon: <TikTokIcon className="size-5 shrink-0" /> },
  { href: 'https://www.linkedin.com/in/pinsarasasika', text: 'LinkedIn', icon: <Linkedin className="size-5 shrink-0" /> },
  { href: '#', text: 'Support Me', icon: <Heart className="size-5 shrink-0" /> },
  { href: '#', text: 'Portfolio', icon: <Briefcase className="size-5 shrink-0" /> },
  { href: 'https://github.com/pinsarasasika', text: 'GitHub', icon: <Github className="size-5 shrink-0" /> },
  { href: '#', text: 'Blog', icon: <Rss className="size-5 shrink-0" /> },
  { href: 'https://xel.ai', text: 'xel.ai', icon: <Rocket className="size-5 shrink-0" /> },
  { href: 'https://wa.me/94765114442', text: 'WhatsApp', icon: <WhatsAppIcon className="size-5 shrink-0" /> },
  { href: 'mailto:uixel.tech@gmail.com', text: 'Email', icon: <Mail className="size-5 shrink-0" /> },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-background font-body text-foreground">
      <div className="flex w-full flex-1 flex-col items-center justify-center p-4">
        <main className="w-full max-w-sm space-y-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="https://placehold.co/128x128.png"
              alt="Profile picture of Pinsara Sasika"
              width={128}
              height={128}
              className="rounded-full border-2 border-border shadow-lg"
              priority
              data-ai-hint="man portrait"
            />
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Pinsara Sasika
              </h1>
              <p className="text-sm text-muted-foreground md:text-base">
                AI Agent Developer | UI/UX Designer | Web Developer
              </p>
            </div>
          </div>

          <div className="w-full space-y-3 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('mailto:') || link.href.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group flex w-full items-center rounded-md border border-border bg-card p-3 text-left transition-all duration-200 ease-in-out hover:scale-[1.02] hover:border-accent hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                <div className="flex w-10 items-center justify-center text-muted-foreground transition-colors group-hover:text-accent">
                  {link.icon}
                </div>
                <span className="flex-1 font-medium text-card-foreground">
                  {link.text}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="size-4 text-muted-foreground opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-1 group-hover:opacity-100"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ))}
          </div>
        </main>
      </div>

      <footer className="w-full p-4 text-center text-xs text-muted-foreground">
        Made with ❤️ by Pinsara Sasika
      </footer>
    </div>
  );
}
