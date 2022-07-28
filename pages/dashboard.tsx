import type { NextPage } from "next";
import { Layout, Section } from "@components/Layout";
import { SpotifyTopTracks, SpotifyNowPlaying } from "~/components/Spotify";
import YoutubeCard from "~/components/Metrics/youtube";

const Dashboard: NextPage = () => {
  return (
    <Layout title="Dashboard | DhafitF" metaDesc="Dashboard pribadi milik Dhafit Farenza">
      <h1 className="pb-4 text-4xl font-bold">Dashboard</h1>
      <p className="pb-10">Ini adalah dashboard pribadi saya. Saya menggunakan ini untuk menampilkan metrik dari berbagai platform.</p>
      <YoutubeCard />
      <Section title="Music" id="music" className="relative">
        <SpotifyNowPlaying />
        <h3 className="pt-6 pb-4 text-lg font-semibold md:text-xl">Top Tracks</h3>
        <div className="relative flex flex-col gap-4">
          <SpotifyTopTracks />
        </div>
      </Section>
    </Layout>
  );
};

export default Dashboard;
