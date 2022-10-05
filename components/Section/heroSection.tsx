import { SpotifyNowPlaying } from "~/components/Spotify";
import useTranslation from "~/lib/useTranslation";

export default function HeroSection() {
  const { locale } = useTranslation();

  return (
    <div className="flex flex-col pb-20">
      <h1 className="text-4xl font-bold text-cyan">Dhafit Farenza</h1>
      <h2 className="text-2xl font-semibold text-lavender">{locale["role"]}</h2>
      <p className="max-w-[492px] pt-4 pb-6">{locale["shortDescription"]}</p>
      <SpotifyNowPlaying />
    </div>
  );
}
