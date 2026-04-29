import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER");
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

export default Community;
