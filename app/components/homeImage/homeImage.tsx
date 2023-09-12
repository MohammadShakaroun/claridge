import { motion } from "framer-motion";
import React from "react";

function HomePage() {
  return (
    <motion.div className="w-full bg-gradient-to-r from-violet-200 to-fuchsia-400">
      {/* <WithAnimation
        initialX={0}
        visibleX={0}
        duration={0.2}
        delay={0.3}
        initialY={"50vh"}
        visibleY={0}
        initialScale={1}
        visibleScale={1}
        width={"100%"}
        height={0}      >
        {" "}
        <Image
          src={ClaridgeEnter}
          alt={""}
          className="w-full lg:h-96 rounded-md"
        />
      </WithAnimation> */}
    </motion.div>
  );
}
export default HomePage;
