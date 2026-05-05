import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { useState } from "react";
import { NextPage } from "next";
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const CS: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return (
      <>
        <Stack className={"footer-container"}>CS MOBILE</Stack>
      </>
    );
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">CS</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(CS);
