import React from "react";
import { motion } from "framer-motion";
import { WithAnimation } from "../withAnimationComponents/withAnimation";
import Image from "next/image";
import ClaridgeDirector from "../../images/claridgedirector.jpg";
import ClaridgeFlair from "../../images/Claridgesflair.jpg";

const GeneralInfos = () => {
  return (
    <motion.div className="m-8">
      <motion.div className="flex md:flex-row flex-col w-full">
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
            duration={0.8}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={undefined}
          >
            <h2 className="text-3xl text-center font-semibold lg:w-full  mx-auto text-black underline">
              General Information
            </h2>
            <p className="mt-5 lg:w-4/5 text-black justify-end lg:mt-10 mx-auto text-center">
              <span className="text-xl font-medium">
                Board of Directors and other officers.
              </span>
              <br />
              <span className="text-2xl font-semibold">DIRECTORS:</span>
              <br />
              <div className="text-left mx-auto lg:pl-20">
                Vasiliou Andreas - DIRECTOR <br />
                Laniti Tzoanna - DIRECTOR <br />
                Lanitis Platon E. - DIRECTOR <br />
                Loutsios Giannos A. - DIRECTOR <br />
                Solomonides Demetris - DIRECTOR <br />
                Charitou Costas - DIRECTOR <br />
                Hadjikyriacos Michalis - DIRECTOR <br />
              </div>
            </p>
          </WithAnimation>
        </motion.div>
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <Image
            className="rounded-2xl lg:w-3/4 mx-auto"
            objectFit="cover"
            alt=""
            src={ClaridgeDirector}
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex md:flex-row flex-col-reverse w-full items-center justify-center mx-auto">
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <Image
            className=" rounded-2xl lg:w-3/4 mx-auto"
            objectFit="cover"
            alt=""
            src={ClaridgeFlair}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className=" p-4 shadow-sm md:w-1/2 items-center justify-center"
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
            height={undefined}
          >
            <p className="mx-auto lg:w-4/5 text-black">
              <span className="text-2xl font-medium">COMPANY SECRETARY:</span>
              <br />
              P & D Secretarial Services Limited 10 Georgios Gennadiou Street,
              Agathangelos Court, 3rd floor 3041 Limassol.
              <br />
              <span className="text-2xl font-medium">REGISTERED OFFICE:</span>
              <br />
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

export default GeneralInfos;
