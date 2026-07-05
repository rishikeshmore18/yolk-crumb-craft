import { ArrowRight, Coffee, Croissant, ExternalLink, MapPin, Play, Quote, Star } from "lucide-react";
import { InstagramReelEmbed } from "@/components/InstagramReelEmbed";
import googleDisplay from "@/assets/almond-croissant.jpg";

type EmbedReviewCard = {
  type: "embed";
  badge: string;
  text: string;
  footer: string;
  instagramUrl: string;
};

type VideoReviewCard = {
  type: "video";
  badge: string;
  text: string;
  footer: string;
  instagramUrl: string;
  poster: string;
  posterAlt: string;
};

type GoogleReviewCardData = {
  type: "google";
  reviewer: string;
  label: string;
  text: string;
  details: string[];
};

type ReviewCard = EmbedReviewCard | VideoReviewCard | GoogleReviewCardData;

const reviewCards: ReviewCard[] = [
  {
    type: "embed",
    badge: "Instagram Reel",
    text: "The croissants are unreal and worth the early visit.",
    footer: "Instagram customer share",
    instagramUrl: "https://www.instagram.com/reel/DXR27RNkZNW/",
  },
  {
    type: "google",
    reviewer: "Vy Ng",
    label: "Local Guide - Google Review",
    text: "Cute little bakery with a great variety of croissants, cakes, and coffees. I took my mom for Mother's Day and we might've found our new favorite carrot cake! Only downside is there's not much space to sit, but we'll definitely be back often.",
    details: ["Order type: Take out", "Food: 5", "Service: 5", "Atmosphere: 4", "Parking: Free parking lot"],
  },
  {
    type: "video",
    badge: "Instagram Video",
    text: "Everything looks gorgeous and tastes even better.",
    footer: "Shared by a customer",
    instagramUrl: "https://www.instagram.com/reel/DRPf2MJDsYH/?igsh=b3Nvd2Eyc2Vka3o1",
    poster: googleDisplay,
    posterAlt: "Close-up of a flaky almond croissant",
  },
];

const trustItems = [
  {
    icon: Croissant,
    title: "Known for croissants",
    text: "Flaky, filled, and small-batch.",
  },
  {
    icon: Coffee,
    title: "Coffee & pastries",
    text: "A simple stop for breakfast or takeout.",
  },
  {
    icon: MapPin,
    title: "Tatnuck Square favorite",
    text: "Loved by locals in Worcester.",
  },
];

const googleReviewsUrl =
  "https://www.google.com/maps/place/Yolk+and+Crumb/@42.2785256,-71.8552469,17z/data=!4m19!1m10!3m9!1s0x89e405001bfab589:0xea1b079aadc19fd6!2sYolk+and+Crumb!8m2!3d42.2783921!4d-71.8553252!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11ml51kjbp!3m7!1s0x89e405001bfab589:0xea1b079aadc19fd6!8m2!3d42.2783921!4d-71.8553252!9m1!1b1!16s%2Fg%2F11ml51kjbp?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";
const backupReelUrl = "https://www.instagram.com/reel/DXmKpTYjnrL/?igsh=MWhsbGNwdTc3YXdt";

function RatingBadge() {
  return (
    <div className="rounded-3xl border border-border/70 bg-card px-5 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="font-serif text-3xl text-caramel">4.7</span>
        <Star className="h-5 w-5 fill-butter text-butter" />
      </div>
      <p className="mt-1 text-sm font-semibold text-caramel">Google rating</p>
      <p className="text-xs text-foreground/60">Based on 89 reviews</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-toast">Bakery - $10-20</p>
    </div>
  );
}

function VideoCard({ card, onPlay }: { card: VideoReviewCard; onPlay: (card: VideoReviewCard) => void }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <button type="button" onClick={() => onPlay(card)} className="relative block aspect-[4/3] w-full overflow-hidden bg-peach text-left" aria-label={`Open ${card.badge}`}>
        <img src={card.poster} alt={card.posterAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-caramel shadow-sm">{card.badge}</span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-caramel shadow-lg transition group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </span>
      </button>
      <div className="p-6">
        <Quote className="h-8 w-8 text-peach" />
        <p className="mt-3 text-lg font-medium leading-7 text-caramel">"{card.text}"</p>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-toast">{card.footer}</p>
          <ExternalLink className="h-4 w-4 text-caramel" />
        </div>
      </div>
    </article>
  );
}

function GoogleReviewCard({ card }: { card: GoogleReviewCardData }) {
  return (
    <article className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Quote className="absolute right-5 top-5 h-14 w-14 text-peach/70" />
      <div className="flex gap-1 text-butter" aria-label="5 star review">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-foreground/75">"{card.text}"</p>
      <div className="mt-6 border-t border-border/60 pt-5">
        <p className="font-serif text-xl text-caramel">{card.reviewer}</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-toast">{card.label}</p>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-2 text-xs text-foreground/70">
        {card.details.map((detail) => {
          const [label, value] = detail.split(": ");
          return (
            <div key={detail} className="rounded-2xl bg-peach/50 px-3 py-2">
              <dt className="font-semibold text-caramel">{label}</dt>
              <dd>{value}</dd>
            </div>
          );
        })}
      </dl>
    </article>
  );
}

function InstagramEmbedReviewCard({ card }: { card: EmbedReviewCard }) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="p-4">
        <span className="inline-flex rounded-full bg-peach px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-caramel">{card.badge}</span>
        <div className="mt-4">
          <InstagramReelEmbed url={card.instagramUrl} title="Yolk and Crumb customer Instagram Reel" />
        </div>
      </div>
      <div className="px-6 pb-6">
        <Quote className="h-8 w-8 text-peach" />
        <p className="mt-3 text-lg font-medium leading-7 text-caramel">"{card.text}"</p>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-toast">{card.footer}</p>
          <ExternalLink className="h-4 w-4 text-caramel" />
        </div>
      </div>
    </article>
  );
}

export function ReviewsShowcase() {
  const handleVideoClick = (card: VideoReviewCard) => {
    window.open(card.instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full bg-peach px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-caramel">Reviews</span>
            <h2 className="mt-4 font-serif text-3xl text-caramel sm:text-5xl">Loved by Worcester locals</h2>
            <p className="mt-4 max-w-2xl text-foreground/70">Real customer notes from Google and Instagram, highlighting the croissants, pastries, coffee, and warm neighborhood bakery experience.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-[auto_auto] sm:items-end">
            <RatingBadge />
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 px-5 py-2.5 text-sm font-semibold text-caramel transition hover:bg-peach" aria-label="See all reviews on Google Maps">
              See all reviews <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviewCards.map((card, index) => {
            if (card.type === "embed") {
              return <InstagramEmbedReviewCard key={`${card.badge}-${index}`} card={card} />;
            }

            return card.type === "video" ? <VideoCard key={`${card.badge}-${index}`} card={card} onPlay={handleVideoClick} /> : <GoogleReviewCard key={card.reviewer} card={card} />;
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-border/70 bg-peach/50 p-5 shadow-sm">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-4 md:grid-cols-3">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-caramel shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-caramel">{item.title}</p>
                      <p className="text-sm text-foreground/70">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={googleReviewsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-caramel px-5 py-2.5 text-sm font-semibold text-cream transition hover:opacity-90" aria-label="Read more Google reviews">
                Read more reviews <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href={backupReelUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-caramel/40 px-5 py-2.5 text-sm font-semibold text-caramel transition hover:bg-cream" aria-label="Open another customer Instagram reel">
                More social proof <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
