//import NowPlaying  from '@/component/NowPlaying';

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import TwitterCard from "@/component/cards/TwitterCard";
import ProfileCard from "@/component/cards/ProfileCard";
import SpotifyCard from "@/component/cards/SpotifyCard";
import ModeCard from "@/component/cards/ModeCard";
import ICBCard from "@/component/cards/ICBCard";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <ProfileCard />
        <SpotifyCard />
        <ModeCard />
        <ICBCard />
        <TwitterCard />
      </main>
      <Footer />
    </>
  );
}
