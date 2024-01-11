import type { NextPage } from "next";
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <FirstSection></FirstSection>
    </div>
  );
};

export default Home;
