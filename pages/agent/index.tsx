import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { useState } from "react";
import { NextPage } from "next";
import { Stack } from "@mui/material";

const AgentList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENT LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
