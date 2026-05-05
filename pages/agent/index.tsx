import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return (
      <>
        <Stack className={"footer-container"}>AGENT MOBILE</Stack>
      </>
    );
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">AGENT LIST</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(AgentList);
