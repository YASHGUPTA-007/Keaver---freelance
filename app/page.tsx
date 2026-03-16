import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhoWeAre from "@/components/WhoWeAre";
import Objectives from "@/components/Objectives";
import Programs from "@/components/Programs";
import HowWeWork from "@/components/HowWeWork";
import Impact from "@/components/Impact";
import Values from "@/components/Values";
import VideoBreak from "@/components/VideoBreak";
import GetInvolved from "@/components/GetInvolved";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhoWeAre />
      <Objectives />
      {/* <Programs /> */}
      <HowWeWork />
      <Impact />
      <Values />
      <VideoBreak />
      <GetInvolved />
      <Apply />
      <Footer />
    </>
  );
}
