import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

function Annoucements() {
  const mainControls = useAnimation();

  return (
    <motion.div className="flex flex-col w-full h-auto bg-gradient-to-r from-cyan-100 to-blue-300 text-blue-900">
      <motion.h1 className="text-center text-4xl font-extrabold p-5">
        Announcements
      </motion.h1>
      <h4 className="text-2xl text-red-900 font-semibold pl-5">
        Announcements 2021
      </h4>
      <motion.div className="flex-row md:flex-col justify-between items-start w-full mt-8 text-center text-blue-900">
        <motion.div
          className="text-left text-black justify-center mx-auto ml-4"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href={
              "http://www.claridgepublic.com/docs/CLA%202019%20NOTICE%20FOR%20AGM.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            INVITATION FOR ANNUAL GENERAL MEETING
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/CLA%202019%20PROXY%20FOR%20AGM%20ENG.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            PROXY_EN
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/CLA%202019%20PROXY%20FOR%20AGM%20GRK.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            PROXY_GR
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/%CE%95%CF%84%CE%AE%CF%83%CE%B9%CE%B1%20%CE%88%CE%BA%CE%B8%CE%B5%CF%83%CE%B7%202020.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Report and consolidated financial statements for the year ended 31
            December 2020
          </Link>
          <br />
        </motion.div>
        <motion.div
          className="text-left justify-cente ml-4"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h4 className="text-2xl text-red-900 font-semibold ">
            Announcements 2020
          </h4>
          <Link href={""} className=" hover:text-red-500 hover:underline">
            Report and consolidated financial statements for the year ended 31
            December 2019
          </Link>
        </motion.div>
        <motion.div
          className="text-left justify-cente ml-4"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h4 className="text-2xl text-red-900 font-semibold ">
            Announcements 2019
          </h4>
          <Link href={""} className=" hover:text-red-500 hover:underline">
            INVITATION FOR ANNUAL GENERAL MEETING
          </Link>
          <br />
          <Link href={""} className=" hover:text-red-500 hover:underline">
            PROXY_EN
          </Link>
          <br />
          <Link href={""} className=" hover:text-red-500 hover:underline">
            PROXY_GR
          </Link>
        </motion.div>
        <motion.div
          className="text-left justify-cente ml-4"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h4 className="text-2xl text-red-900 font-semibold ">
            Announcements 2018
          </h4>
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public%20Ltd_AGM%20Notice%2010%20July%202018.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            INVITATION FOR ANNUAL GENERAL MEETING
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public%20Ltd_Consolidated%20Financial%20Statements%20for%20the%20year%202017.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Report and consolidated financial statements for the year ended 31
            December 2017
          </Link>
          <br />
        </motion.div>
        <motion.div
          className="text-left justify-cente ml-4"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h4 className="text-2xl text-red-900 font-semibold ">
            Announcements 2017
          </h4>
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge-%20Interim%20accounts%202017.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Interim condensed consolidated financial statements for the six
            months ended 30 June 2017
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public_Consolidated%20P&L%20and%20Balance%20Sheet%2030%20June%202017_Eng.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Interim condensed consolidated profit and loss account for the
            period ended 30 June 2017
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public%20Ltd_%20Consolidated%20Financial%20Statements%202016_G.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Report and consolidated financial statements for the year ended 31
            December 2016
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public%20Ltd%20-%20FS%202016%20(extracts)_E.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Consolidated statement of comprehensive income for the year ended 31
            December 2016
          </Link>
          <br />
        </motion.div>
        <motion.div
          className="text-left justify-cente ml-4"
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h4 className="text-2xl text-red-900 font-semibold ">
            Announcements 2016
          </h4>
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge-%20Interim%20accounts%202017.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Interim condensed consolidated profit and loss account for the
            period ended 30 June 2016{" "}
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public_Consolidated%20P&L%20and%20Balance%20Sheet%2030%20June%202017_Eng.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Interim condensed consolidated profit and loss account for the
            period ended 30 June 2017
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public%20Ltd_%20Consolidated%20Financial%20Statements%202016_G.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Report and consolidated financial statements for the year ended 31
            December 2016
          </Link>
          <br />
          <Link
            href={
              "http://www.claridgepublic.com/docs/Claridge%20Public%20Ltd%20-%20FS%202016%20(extracts)_E.pdf"
            }
            className=" hover:text-red-500 hover:underline"
          >
            Consolidated statement of comprehensive income for the year ended 31
            December 2016
          </Link>
          <br />
        </motion.div>
      </motion.div>
      <motion.div
        className="text-left text-black justify-cente ml-4"
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h4 className="text-2xl text-red-900 font-semibold ">
          Announcements 2015
        </h4>
        <Link
          href={
            "http://www.claridgepublic.com/docs/Claridge_Consolidated%20financial%20staements_2015_Greek.pdf"
          }
          className=" hover:text-red-500 hover:underline"
        >
          Report and consolidated financial statements for the year ended 31
          December 2015
        </Link>
        <br />
        <Link
          href={
            "http://www.claridgepublic.com/docs/Aug31_2015_CLA_6MonthResults2015.pdf"
          }
          className=" hover:text-red-500 hover:underline"
        >
          2015 FIRST SEMESTER FINANCIAL REPORT
        </Link>
        <br />
        <Link
          href={
            "http://www.claridgepublic.com/docs/Aug31_2015_CLA_6MonthResults2015_eng.pdf"
          }
          className=" hover:text-red-500 hover:underline"
        >
          HALF ANNUAL FINANCIAL REPORT 2015
        </Link>
        <br />
        <Link
          href={"http://www.claridgepublic.com/docs/June24_2015_CLA.pdf"}
          className=" hover:text-red-500 hover:underline"
        >
          APPLICATION FOR DISSOLUTION
        </Link>
        <br />
      </motion.div>
    </motion.div>
  );
}
export default Annoucements;
