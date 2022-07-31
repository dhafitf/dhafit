import type { NextPage } from "next";
import { Layout, Section } from "@components/Layout";
import { SpotifyTopTracks, SpotifyNowPlaying } from "~/components/Spotify";
import YoutubeCard from "~/components/Metrics/youtube";
import { NextSeo } from "next-seo";

const Dashboard: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Dashboard"
        description="Personal dashboard's Dhafit Farenza"
        openGraph={{
          title: "Dashboard",
          description: "Personal dashboard's Dhafit Farenza",
        }}
      />
      <Layout>
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
    </>
  );
};

export default Dashboard;
