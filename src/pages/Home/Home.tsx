import { FunctionComponent } from "react";
import Slider from "./Slider/Slider";
import TrendProduct from "./Trend/TrendProduct";
import SellingProduct from "./Selling/SellingProduct";
import BannerTypes from "./BannerType/BannerTypes";
import TabProducts from "./Tabs/TabProducts";
import Intro from "./Introduce/Intro";

const Home: FunctionComponent = () => {
  return (
    <>
      <Slider />
      <TrendProduct />
      <SellingProduct  />
      <BannerTypes />
      <TabProducts />
      <Intro />
    </>
  );
};

export default Home;
