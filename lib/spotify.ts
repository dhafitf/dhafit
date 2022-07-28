import qs from "query-string";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    return response.json();
  } catch (error) {
    return { access_token: undefined };
  }
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  const url = qs.stringifyUrl({
    url: TOP_TRACKS_ENDPOINT,
    query: {
      time_range: "short_term",
    },
  });

  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response;
}
