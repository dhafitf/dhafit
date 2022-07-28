import TrackItem from "./trackItem";
import { TopTracksResponse } from "~/types/spotify";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "~/lib/fetcher";

export default function SpotifyTopTracks() {
  const { data, error } = useSWR<TopTracksResponse>("/api/spotify/top-tracks", fetcher);

  const router = useRouter();

  const renderTracks = () => {
    if (data) {
      return data.tracks.map((track, index: number) => {
        return <TrackItem key={index} index={index + 1} track={track} />;
      });
    }

    if (error) {
      return (
        <div className="errorSpotify">
          Error when fetching spotify. Please{" "}
          <span
            onClick={() => {
              router.reload();
            }}
          >
            reload the page.
          </span>
        </div>
      );
    }

    return Array.from({ length: 10 }).map((_, index) => {
      return <TrackItem key={index} index={index + 1} isSkeleton />;
    });
  };

  return <>{renderTracks()}</>;
}
