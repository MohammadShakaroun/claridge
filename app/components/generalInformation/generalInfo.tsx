import React from "react";
import { motion } from "framer-motion";
import { WithAnimation } from "../withAnimationComponents/withAnimation";
import Image from "next/image";
import ClaridgeDirector from "../../images/claridgedirector.jpg";

const GeneralInfo = () => {
  return (
    <motion.div className="">
      <motion.div className="flex md:flex-row flex-col w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className=" bg-secondary p-4 mx-auto items-center justify-center"
        >
          <WithAnimation
            initialX={"-100vw"}
            visibleX={0}
            duration={0.8}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
          >
            <h2 className="text-xl font-semibold w-full mx-auto text-black">
              General Information
            </h2>
            <p className="mx-auto w-full items-center justify-center text-black">
              Board of Directors and other officers
              <br />
              DIRECTORS
              <br />
              Vasiliou Andreas - DIRECTOR <br />
              Laniti Tzoanna - DIRECTOR <br />
              Lanitis Platon E. - DIRECTOR <br />
              Loutsios Giannos A. - DIRECTOR <br />
              Solomonides Demetris - DIRECTOR <br />
              Charitou Costas - DIRECTOR <br />
              Hadjikyriacos Michalis - DIRECTOR <br />
            </p>
          </WithAnimation>
        </motion.div>
        <motion.div className="flex flex-row md:w-1/2 bg-secondary ">
          <Image
            className="rounded w-1/2 mx-auto"
            objectFit="cover"
            alt=""
            src={ClaridgeDirector}
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex md:flex-col bg-secondary items-center justify-center">
        <motion.div className="flex md:flex-row md:w-1/2 bg-secondary items-center justify-center">
          <Image
            className="rounded w-1/2 mx-auto"
            objectFit="cover"
            alt=""
            src={ClaridgeDirector}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className=" bg-secondary p-4 md:w-1/2 items-center justify-center"
        >
          <WithAnimation
            initialX={"100vw"}
            visibleX={0}
            duration={0.8}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
          >
            <p className="mx-auto w-full text-black">
              COMPANY SECRETARY <br />
              P & D Secretarial Services Limited 10 Georgios Gennadiou Street,
              Agathangelos Court, 3rd floor 3041 Limassol
              <br />
              REGISTERED OFFICE <br />
              10 Georgiou Gennadiou Street, Agathangelos Court, 3rd floor 3041
              Limassol Shareholders holding more than 5% of the Company's
              capital On April 24, 2010 the following shareholders owned more
              than 5% of the Company's issued share capital. Fully paid shares %
              Amathus Public Limited 40.53 Strawdale Limited 18.94 Powergen
              Holdings Limited 7.25
            </p>
          </WithAnimation>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GeneralInfo;
