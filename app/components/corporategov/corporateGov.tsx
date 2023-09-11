import React from "react";
import { motion } from "framer-motion";
import { WithAnimation } from "../withAnimationComponents/withAnimation";
import Image from "next/image";
import CorporateMeeting from "../../images/metings.jpg";
import CorporateGov from "../../images/corporategov.jpg";
import Council from "../../images/council.jpg";
import BoardOfDirectors from "../../images/boardofdirectors.webp";

const CorporteGov = () => {
  return (
    <motion.div className="m-8">
      <motion.div className="flex md:flex-row flex-col w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className=" p-4 shadow-sm md:w-1/2 items-center justify-center mx-auto"
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
            height={undefined}          >
            <h2 className="text-xl font-semibold lg:w-4/5 mx-auto text-black">
              Corporate Governance Report for the year 2010
            </h2>
            <p className="mx-auto text-black lg:mt-10 w-4/5">
              During these meetings minutes of the decisions have been kept by
              the Secretary of the Company which were ratified by the Chairman
              of the Board of Directors. <br />
              The Chairman of the Board of Directors is responsible for the
              orderly and efficient functioning of the board by ensuring the
              following during the meetings.
            </p>
          </WithAnimation>
        </motion.div>
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <Image
            className="rounded-2xl lg:w-3/4 mx-auto"
            objectFit="cover"
            alt=""
            src={CorporateMeeting}
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex md:flex-row flex-col-reverse w-full items-center justify-center mx-auto">
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <Image
            className="rounded-2xl md:w-3/4 mx-auto"
            objectFit="cover"
            alt=""
            src={CorporateGov}
          />
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
            duration={0.8}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={undefined}          >
            <p className="mx-auto lg:w-4/5 text-black">
              Ensuring the quorum of council members necessary for the conduct
              of its work allowing enough time for constructive discussion of
              all items on the agenda coverage of all agenda items that are
              adequately supported with all available information.{" "}
            </p>
          </WithAnimation>
        </motion.div>
      </motion.div>
      <motion.div className="flex md:flex-row flex-col w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="p-4 shadow-sm md:w-1/2 items-center justify-center"
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
            height={undefined}          >
            <h2 className="text-xl font-semibold w-4/5 mx-auto text-black">
              {" "}
            </h2>
            <p className="mx-auto lg:w-4/5 text-black lg:mt-10">
              The Board of Directors operates based on the principle of
              collective responsibility and no category of its members is
              differentiated in terms of responsibility towards the Company and
              its shareholders. The Board of Directors is responsible as a whole
              for the fulfillment of its duties.{" "}
            </p>
          </WithAnimation>
        </motion.div>
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <Image
            className="rounded-2xl md:w-3/4 mx-auto"
            objectFit="cover"
            alt=""
            src={Council}
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex md:flex-row flex-col-reverse w-full items-center justify-center mx-auto">
        <motion.div className="flex flex-row md:w-1/2 items-center justify-center">
          <Image
            className="rounded-2xl w-3/4 mx-auto"
            objectFit="cover"
            alt=""
            src={BoardOfDirectors}
          />
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
            duration={0.8}
            delay={0.1}
            width={"100%"}
            initialScale={0}
            visibleScale={1}
            initialY={0}
            visibleY={1}
            height={undefined}          >
            <p className="mx-auto lg:w-4/5 text-black">
              The Board of Directors consists of one (1) Executive and nine (9)
              Non-Executive Directors of which two (2) are Independent. The
              names and status of the Company's Directors as of December 31,
              2010 are presented on page 2 of the Annual Report.
            </p>
          </WithAnimation>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CorporteGov;
