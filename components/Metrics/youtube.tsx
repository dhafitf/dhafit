import fetcher from "~/lib/fetcher";
import useSWR from "swr";
import MetricCard from "./card";
import { YoutubeResponse } from "~/types/components";

export default function YoutubeCard() {
  const { data } = useSWR<YoutubeResponse>("/api/youtube", fetcher);

  const viewCount = new Number(data?.viewCount) as number;
  const videoCount = new Number(data?.videoCount) as number;
  const link = "https://www.youtube.com/channel/UCeOw9hCtucHHgdl9zfUYR2w";

  return (
    <div className="mb-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard href={link} title="YouTube Views" value={viewCount} />
      <MetricCard href={`${link}/videos`} title="YouTube Videos" value={videoCount} />
    </div>
  );
}
