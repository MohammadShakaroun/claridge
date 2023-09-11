import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import ClaridgeEnter from "../../images/claridgeenter.jpg";
import { WithAnimation } from "../withAnimationComponents/withAnimation";

function HomePage() {
  return (
    <motion.div className="w-full bg-secondary items-center justify-center mx-auto">
      <WithAnimation
        initialX={0}
        visibleX={0}
        duration={0.2}
        delay={0.3}
        initialY={"50vh"}
        visibleY={0}
        initialScale={1}
        visibleScale={1}
        width={"100%"}
      >
        {" "}
        <Image
          src={ClaridgeEnter}
          alt={""}
          className="w-full lg:h-96 rounded-md"
        />
      </WithAnimation>
    </motion.div>
  );
}
export default HomePage;
