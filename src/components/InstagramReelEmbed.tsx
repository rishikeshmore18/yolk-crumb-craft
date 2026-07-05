import { useEffect, useMemo, useRef, useState } from "react";
import { Instagram } from "lucide-react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const embedScriptSrc = "https://www.instagram.com/embed.js";

function cleanInstagramUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    return `${parsedUrl.origin}${parsedUrl.pathname}`;
  } catch {
    return url;
  }
}

export function InstagramReelEmbed({ url, title = "Instagram Reel" }: { url: string; title?: string }) {
  const cleanUrl = useMemo(() => cleanInstagramUrl(url), [url]);
  const embedRef = useRef<HTMLDivElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    setShowFallback(false);

    const timeout = window.setTimeout(() => {
      setShowFallback(!embedRef.current?.querySelector("iframe"));
    }, 5000);

    const processEmbeds = () => {
      window.instgrm?.Embeds.process();
    };

    if (window.instgrm) {
      processEmbeds();
    } else if (!document.querySelector(`script[src="${embedScriptSrc}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = embedScriptSrc;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      const script = document.querySelector<HTMLScriptElement>(`script[src="${embedScriptSrc}"]`);
      script?.addEventListener("load", processEmbeds, { once: true });
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [cleanUrl]);

  return (
    <div className="overflow-hidden rounded-3xl border border-border/70 bg-peach/60 p-3 shadow-sm">
      <div ref={embedRef} className="flex max-h-[24rem] min-h-[20rem] items-center justify-center overflow-hidden rounded-[1.25rem] bg-cream p-2">
        <blockquote className="instagram-media w-full max-w-full" data-instgrm-permalink={cleanUrl} data-instgrm-version="14" title={title}>
          <div className="rounded-3xl border border-border/70 bg-card p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-peach text-caramel">
              <Instagram className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm font-semibold text-caramel">Instagram Reel</p>
            <p className="mt-1 text-sm text-foreground/70">Loading Instagram Reel...</p>
          </div>
        </blockquote>
      </div>

      {showFallback && (
        <div className="mt-3 rounded-2xl bg-cream px-4 py-3 text-sm text-foreground/70">
          Instagram may be blocked by browser privacy settings.{" "}
          <a href={cleanUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-caramel underline underline-offset-4">
            Watch on Instagram
          </a>
        </div>
      )}
    </div>
  );
}
