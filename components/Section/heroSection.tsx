import Link from "next/link";
import { SpotifyNowPlaying } from "~/components/Spotify";

export default function HeroSection() {
  return (
    <div className="flex flex-col pb-20">
      <h1 className="text-4xl font-bold text-cyan">Dhafit Farenza</h1>
      <h2 className="text-2xl font-semibold text-lavender">Penerjemah & Fullstack web developer.</h2>
      <p className="max-w-[492px] pt-4 pb-6">
        Saya seorang penerjemah, yang biasanya menerjemahkan bahasa Jepang dan Inggris ke bahasa Indonesia. Serta seorang fullstack web developer.
      </p>
      <SpotifyNowPlaying />
    </div>
  );
}
