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
          <Link href={songUrl} className="ml-3 flex w-full min-w-0 flex-1 text-white hover:text-cyan">
            <div className="relative">
              <Image src={albumImageUrl} alt={album} width={48} height={48} draggable={false} />
            </div>
            <div className="ml-3 flex min-w-0 flex-1 flex-col justify-center">
              <div className="truncate font-medium">{title}</div>
              <div className="truncate text-sm text-gray">{artist}</div>
            </div>
          </Link>
        </>
      );
    }
    return (
      <>
        <div className="ml-3 flex w-full min-w-0 flex-1 animate-pulse">
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
      <div className="flex tabular-nums text-gray">{index.toString().padStart(2, "0")}</div>
      {renderTrackItem()}
    </div>
  );
}
