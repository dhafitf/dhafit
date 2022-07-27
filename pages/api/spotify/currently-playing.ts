/* eslint-disable import/no-anonymous-default-export */
import { getNowPlaying } from "~lib/spotify";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const fetch = await getNowPlaying();
      const song = await fetch.json();

      const title = song.item.name,
        artists = song.item.artists.map((artist: { name: string; external_urls: { spotify: string } }) => {
          return {
            name: artist.name,
            url: artist.external_urls.spotify,
          };
        }),
        album = song.item.album.name,
        albumImageUrl = song.item.album.images[0].url,
        songUrl = song.item.external_urls.spotify,
        isPlaying = song.is_playing;

      return res.status(200).json({
        title,
        artists,
        album,
        albumImageUrl,
        songUrl,
        isPlaying,
      });
    } catch (err: unknown) {
      return res.status(200).json({ isPlaying: false });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
