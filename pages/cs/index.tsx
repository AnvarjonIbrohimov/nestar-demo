import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { useState } from "react";
import { NextPage } from "next";
import { Stack } from "@mui/material";

const CS: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">CS</Stack>
    </div>
  );
};

export default withLayoutBasic(CS);
