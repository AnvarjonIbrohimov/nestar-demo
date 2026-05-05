import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Adventisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  // DEVICE: MOBILE vs PS
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>HOME PAGE MOBILE</Stack>;
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Adventisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
