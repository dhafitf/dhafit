/* eslint-disable import/no-anonymous-default-export */
import { getTopTracks } from "~lib/spotify";
import { NextApiHandler } from "next";
import { SpotifyTrack } from "~/types/spotify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const response = await getTopTracks();
      const { items } = await response.json();

      const tracks = await items.slice(0, 10).map((track: SpotifyTrack) => ({
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        title: track.name,
        duration: track.duration_ms,
        songUrl: track.external_urls.spotify,
      }));

      return res.status(200).json({ tracks });
    } catch (err: unknown) {
      console.log(err);
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
