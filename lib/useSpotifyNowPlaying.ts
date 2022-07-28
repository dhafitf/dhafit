import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("/api/spotify/currently-playing");
  const data = await response.json();
  return data;
};

export default function useSpotifyCurrentlyPlaying() {
  const { data, error } = useSWR("/api/spotify/currently-playing", fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  } as const;
}
