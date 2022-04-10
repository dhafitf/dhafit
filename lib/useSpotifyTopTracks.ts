import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("/api/spotify/top-tracks");
  const data = await response.json();
  return data;
};

export default function useSpotifyTopTrack() {
  const { data, error } = useSWR("/api/spotify/top-tracks", fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  } as const;
}
