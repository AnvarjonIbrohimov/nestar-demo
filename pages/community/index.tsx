import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { useState } from "react";
import { NextPage } from "next";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("Hello!");
  return (
    <div>
      COMMUNITY
      <button onClick={() => alert("Salom hammaga")} style={{ margin: "20px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
