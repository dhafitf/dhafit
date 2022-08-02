import { SiSpotify } from "react-icons/si";
import fetcher from "~/lib/fetcher";
import useSWR from "swr";
import { NowPlayingResponse } from "~/types/spotify";

export default function SpotifyNowPlaying() {
  const { data } = useSWR<NowPlayingResponse>("/api/spotify/currently-playing", fetcher);

  if (data?.isPlaying) {
    const { artists, title, songUrl } = data;
    return (
      <div className="flex items-center rounded text-sm">
        <div className="absolute h-6 w-6 overflow-hidden rounded-full">
          <SiSpotify className="h-6 w-6 text-[#1DB954]" />
        </div>
        <div className="inline-flex w-full items-center pl-8">
          <span className="text-gray-400 pr-1">Memutar</span>
          <a target="_blank" rel="noopener noreferrer nofollow" href={songUrl} className="cursor-pointer truncate font-semibold text-white hover:text-cyan">
            {title}
          </a>
          <span className="text-gray-400 pl-1">oleh</span>
          {artists?.map((artist: { url: string; name: string }, index: number) => {
            return (
              <span key={index} className="truncate after:content-[','] last:after:content-[]">
                <a target="_blank" rel="noopener noreferrer nofollow" href={artist.url} className="cursor-pointer truncate pl-1 font-semibold text-white hover:text-cyan">
                  {artist.name}
                </a>
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex rounded text-sm">
      <div className="absolute h-6 w-6 overflow-hidden rounded-full">
        <SiSpotify className="h-5 w-5" />
      </div>
      <div className="text-gray-400 inline-flex w-full items-center pl-7">
        <span className="truncate">Tidak sedang memutar musik</span>
        <span className="px-1 text-gray">-</span>
        <span className="text-gray">Spotify</span>
      </div>
    </div>
  );
}
