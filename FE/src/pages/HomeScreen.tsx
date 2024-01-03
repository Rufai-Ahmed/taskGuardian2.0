import { Hero } from "./Home/Hero";
import { Sponsor } from "./Home/Sponsor";
import { Blocks } from "./Home/Blocks";
import { Team } from "./Home/Team";
import { Community } from "./Home/Community";
import { Started } from "./Home/Started";

export const HomeScreen = () => {
  return (
    <div className="">
      <Hero />
      <Sponsor />
      <Blocks />
      <Team />
      <Community />
      <Started />
    </div>
  );
};
