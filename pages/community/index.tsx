import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Community: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return (
      <>
        <Stack className={"footer-container"}>COMMUNITY MOBILE</Stack>
      </>
    );
  } else {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">COMMUNITY</Stack>
    </div>
    );
  }
};

export default withLayoutBasic(Community);
``