import TrackItem from "./trackItem";
import useSpotifyTopTrack from "~/lib/useSpotifyTopTracks";
import { TrackResponseItem } from "~/types/spotify";

export default function SpotifyTopTracks() {
  const { data } = useSpotifyTopTrack();

  const renderTracks = () => {
    if (data) {
      return data.tracks.map((track: TrackResponseItem, index: number) => {
        return <TrackItem key={index} index={index + 1} track={track} />;
      });
    }

    return Array.from({ length: 10 }).map((_, index) => {
      return <TrackItem key={index} index={index + 1} isSkeleton />;
    });
  };

  return <>{renderTracks()}</>;
}
