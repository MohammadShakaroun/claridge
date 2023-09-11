import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WithAnimation } from "../withAnimationComponents/withAnimation";
import ClaridgrWhiteTree from "../../images/Claridgeswhite.jpg";
import ClaridgeImg from "../../images/ClaridgeImg.jpg";

const HomeContent = () => {
  return (
    <motion.div className="m-8">
      <motion.div className=" flex md:flex-row flex-col w-full z-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className=" p-4 shadow-sm md:w-1/2 items-center justify-center"
        >
          <WithAnimation
            initialX={"-100vw"}
            visibleX={0}
            duration={1}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={0}
          >
            <h2 className="text-4xl font-semibold lg:w-4/5 mx-auto text-black">
              Main activities:
            </h2>
            <p className="mx-auto lg:w-4/5 text-lg text-black lg:mt-10">
              The Company was incorporated with its headquarters in Cyprus as a
              public limited liability company in accordance with the provisions
              of the Companies Law, Chapter 113. The Company is registered on
              the Cyprus Stock Exchange in accordance with the Securities and
              Cyprus Stock Exchange Laws and Regulations. Its registered office
              is at 10 Georgiou Gennadiou Street, Limassol.
            </p>
          </WithAnimation>
        </motion.div>
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <WithAnimation
            initialX={"100vw"}
            visibleX={0}
            duration={1}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={0}
          >
            <Image
              className="rounded-full lg:w-3/4 mx-auto"
              objectFit="cover"
              alt=""
              src={ClaridgrWhiteTree}
            />
          </WithAnimation>
        </motion.div>
      </motion.div>
      <motion.div className=" flex md:flex-row flex-col-reverse w-full items-center justify-center mx-auto">
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <WithAnimation
            initialX={"-100vw"}
            visibleX={0}
            duration={1}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={0}
          >
            <Image
              className="rounded-full lg:w-3/4 mx-auto"
              objectFit="cover"
              alt=""
              src={ClaridgeImg}
            />
          </WithAnimation>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="p-4 shadow-sm md:w-1/2 items-center justify-center"
        >
          <WithAnimation
            initialX={"100vw"}
            visibleX={0}
            duration={1}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={0}
          >
            <p className="mx-auto lg:w-4/5 text-lg text-black">
              The Company owns 100% of the share capital of Amathus Vacation
              Ownership Limited (“the Subsidiary”) whose principal activity is
              the construction of luxury villas and apartments and their
              disposal as privately owned residential units.
            </p>
          </WithAnimation>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeContent;
