import TrackItem from "./trackItem";
import useSpotifyTopTrack from "~/lib/useSpotifyTopTracks";
import { TrackResponseItem } from "~/types/spotify";
import { useRouter } from "next/router";

export default function SpotifyTopTracks() {
  const { data, isError } = useSpotifyTopTrack();

  const router = useRouter();

  const renderTracks = () => {
    if (data) {
      return data.tracks.map((track: TrackResponseItem, index: number) => {
        return <TrackItem key={index} index={index + 1} track={track} />;
      });
    }

    if (isError) {
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
