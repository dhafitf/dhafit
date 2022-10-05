import type { NextPage } from "next";
import { Layout, Section } from "@components/Layout";
import { SpotifyTopTracks, SpotifyNowPlaying } from "~/components/Spotify";
import YoutubeCard from "~/components/Metrics/youtube";
import useTranslation from "~/lib/useTranslation";

const Dashboard: NextPage = () => {
  const { locale } = useTranslation();

  return (
    <Layout title="Dashboard - Dhafit Farenza" description="Personal dashboard milik Dhafit Farenza">
      <h1 className="pb-4 text-4xl font-bold">Dashboard</h1>
      <p className="pb-10">{locale["dashboard.description"]}</p>
      <YoutubeCard />
      <Section title="Music" id="music" className="relative">
        <SpotifyNowPlaying />
        <h3 className="pt-6 pb-4 text-lg font-semibold md:text-xl">{locale["spotify.topTrack"]}</h3>
        <div className="relative flex flex-col gap-4">
          <SpotifyTopTracks />
        </div>
      </Section>
    </Layout>
  );
};

export default Dashboard;
