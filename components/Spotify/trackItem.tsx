import * as React from "react";
import { TrackResponseItem } from "~/types/spotify";
import Image from "next/image";
import Link from "next/link";

interface TrackItemProps {
  index: number;
  track?: TrackResponseItem;
  isSkeleton?: boolean;
}

export default function TrackItem({ index, track, isSkeleton }: TrackItemProps) {
  const renderTrackItem = () => {
    if (track && !isSkeleton) {
      const { album, albumImageUrl, artist, title, songUrl } = track;
      return (
        <>
          <Link href={songUrl}>
            <a className="ml-3 flex w-full min-w-0 flex-1 text-white hover:text-main">
              <div className="h-12 w-12">
                <Image src={albumImageUrl} alt={album} width={48} height={48} />
              </div>
              <div className="ml-3 flex min-w-0 flex-1 flex-col justify-center">
                <div className="truncate font-semibold">{title}</div>
                <div className="text-gray-400">{artist}</div>
              </div>
            </a>
          </Link>
        </>
      );
    }
    return (
      <>
        <div className="ml-3 flex w-full min-w-0 flex-1">
          <div className="h-12 w-12 bg-zinc-700"></div>
          <div className="ml-3 flex min-w-0 flex-1 flex-col justify-center gap-1">
            <div className="h-5 w-full bg-zinc-700"></div>
            <div className="h-5 w-16 bg-zinc-700"></div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="flex items-center">
      <div className="flex tabular-nums text-gray-400">{index.toString().padStart(2, "0")}</div>
      {renderTrackItem()}
    </div>
  );
}
