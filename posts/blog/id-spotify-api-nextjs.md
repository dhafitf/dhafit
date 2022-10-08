---
title: Menggunakan API Spotify dengan Next.js
subtitle: Pada postingan kali ini, saya akan membagikan tutorial mendapatkan Top tracks dan lagu yang sedang diputar di Spotify, menggunakan Next.js API.
timestamp: Sabtu, 30 Juli 2022
thumb:
tags:
  - "Spotify"
  - "Tutorial"
  - "Next.js API"
featured: true
order: 1
---

Pada postingan kali ini, saya akan membagikan tutorial mendapatkan Top tracks dan lagu yang sedang diputar di [Spotify](https://www.spotify.com/), menggunakan [Next.js](https://nextjs.org/) API. Sebagai contoh, kamu bisa melihat halaman [dashboard](/dashboard).

## Membuat Spotify App

Kita perlu melakukan ini untuk mendapatkan kredensial yang akan digunakan untuk mengautentikasikan API.

- Pergi ke [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) dan masuk ke akun kamu.
- Klik "**Create an App**".
- Isi nama dan deskripsinya lalu klik "**Create**".
- Klik "**Show Client Secret**".
- Simpan Client ID dan Secret ke file `.env`.
- Klik "**Edit Settings**".
- Tambahkan `http://localhost:3000` pada redirect URIs.

## Autentikasi

Kita perlu mendapatkan `code` otorisasi dengan cara melakukan _request_ melalui URL yang diisi dengan parameter yang diperlukan.

Silahkan salin URL dibawah. Ganti `client_id` dan `scope` yang kamu inginkan. Karena pada tutorial ini kita hanya ingin membaca top track dan lagu yang sedang dimainkan, maka hanya perlu _scope_ **user-top-read** dan **user-read-currently-playing**, kamu dapat membaca tentang scope [di sini](https://developer.spotify.com/documentation/general/guides/authorization/scopes/)

```
https://accounts.spotify.com/id/authorize?
client_id=9b11ebc6d65840eebb0db51c15b211eb&response_type=code&
redirect_uri=http://localhost:3000/&scope=user-top-read%20user-read-currently-playing
```

Setelah otorisasi, kamu akan diarahkan kembali ke `redirect_uri` kamu tadi. Di URL, ada parameter kueri `code`. Simpan nilai tersebut.

```
http://localhost:3000/?code=AQCaXamT6nbRDghdG...dyRPlQ
```

Selanjutnya, kita memperlukan `refresh_token`. Kamu harus men-generate Base 64 encoded string yang berisi client ID dan secret dari sebelumnya. Kamu bisa menggunakan [alat ini](https://www.base64encode.org/) untuk men-encodenya. Formatnya harus `client_id:client_secret`.

```bash
curl -H "Authorization: Basic <base64 encoded client_id:client_secret>" -d grant_type=authorization_code -d code=<code> -d redirect_uri=http://localhost:3000/ https://accounts.spotify.com/api/token
```

Ubah perintah di atas sesuai dengan data milikmu. Jika sudah harusnya akan seperti ini. _(beberapa data milik saya akan saya samarkan)_

```bash
curl -H "Authorization: Basic OWIxMWViYzZkN...UyZDYwZGI=" -d grant_type=authorization_code -d code=AQCaXamT6nbRDghdG...dyRPlQ -d redirect_uri=http://localhost:3000/ https://accounts.spotify.com/api/token
```

Setelah melakukan POST request di atas, kamu akan menerima sebuah JSON seperti di bawah.

```json
{
  "access_token": "BQCr_Gc6LyFHnu3R0dC...uOU2xXYLs",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQDB5wwm...g9tTcaqKc",
  "scope": "user-read-currently-playing user-top-read"
}
```

## Menggunakan API Spotify

Kita telah berhasil mendapatkan semua data yang diperlukan. Selanjutnya, buatlah file `.env.local` dan isi dengan nilai yang kalian dapatkan tadi.

```env
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

Kita harus meminta `access_token` menggunakan client ID, client secret dan refresh_token yang tadi kita dapatkan.

```js
// lib/spotify.js

import qs from "query-string";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
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
};
```

Kita akan menggunakan `access_token` ini untuk melakukan request top tracks. Saya anggap tadi kamu memasukkan scope `user-top-read` pada bagian scope tadi.

```js
// lib/spotify.js

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

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
```

Pada kode di atas, terdapat query `time_range`, karena saya ingin mendapatkan top track selama 4 minggu ke belakang, maka saya menambahkan `short_term`, kamu dapat membaca tentang `time_range` [di sini](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks).

## Membuat endpoint API

Pertama, kamu harus membuat file baru pada `pages/api/spotify/top-tracks.js`. Lalu import fungsi `getTopTracks` yang kita buat tadi.

```js
// pages/api/spotify/top-tracks.js

import { getTopTracks } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    title: track.name,
    duration: track.duration_ms,
    songUrl: track.external_urls.spotify,
  }));

  return res.status(200).json({ tracks });
};
```

Ini akan memberikan 10 teratas lagu yang sering kamu putar. Kamu dapat mengubah kode di atas sesuai keinginan. Jika sudah melakukan semua hal di atas, kalian akan mendapatkan data seperti di bawah ini.

```json
{
  "tracks": [
    {
      "album": "Celebrate",
      "albumImageUrl": "https://i.scdn.co/image/ab67616d0000b273c5b34e22c26ee36af18aa30b",
      "artist": "TWICE",
      "title": "Celebrate",
      "duration": 188433,
      "songUrl": "https://open.spotify.com/track/5ZwlnR8yGofZ0669mEh8Xm"
    },
    {
      "album": "Dawn FM",
      "albumImageUrl": "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d",
      "artist": "The Weeknd",
      "title": "Sacrifice",
      "duration": 188918,
      "songUrl": "https://open.spotify.com/track/1nH2PkJL1XoUq8oE6tBZoU"
    },
    {
      "album": "井上陽水トリビュート",
      "albumImageUrl": "https://i.scdn.co/image/ab67616d0000b2733a7b98fc91b7cf4b31f0852b",
      "artist": "ヨルシカ",
      "title": "Make-up Shadow",
      "duration": 237733,
      "songUrl": "https://open.spotify.com/track/0ddW75PWqkWQxDOtKLmoQC"
    }
    // ...........
  ]
}
```

## Contoh

Kamu dapat melihat contoh penerapannya di [dashboard](/dashboard). Untuk kodenya, dapat dilihat [di sini](https://github.com/dhafitf/dhafit/blob/master/lib/spotify.ts). Pada repositori tersebut juga terdapat kode untuk menampilkan lagu yang sedang dimainkan.
