// Robot.jsx (or Robot.tsx)

import Spline from "@splinetool/react-spline";
import React from "react";

const Robot = () => {
  return (
    <div className="w-full h-[360px] max-w-[800px] mx-auto relative z-100 top-18">
      <Spline
        className="w-full h-full absolute top-20"
        scene="https://prod.spline.design/Kq9JyNofPlZVvMgR/scene.splinecode"
      />
    </div>
  );
};

export default Robot;
