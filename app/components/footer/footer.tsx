import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import SubscriptionEmail from "../sendEmail/email"

function Footer() {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1}}
    >
      <motion.div className="mx-auto px-4 bg-slate-600 p-5">
    <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <Link href={"https://goo.gl/maps/hnG9GWr1MQtwR2KV8"}><h5 className="text-lg mt-0 mb-2 hover:underline hover:text-blue-500">
              10 Georgiou Gennadiou Street, Agathangelos Court, 3rd floor 3041
              Limassol
            </h5>
            </Link>
            <div className="flex flex-row mt-6 lg:mb-0 mb-6 items-center justify-center">
              <Link href={""}>
                <AiFillFacebook className="shadow-lg h-10 w-10 items-center justify-center align-center hover:text-blue-500 rounded-full mr-2" />
              </Link>
              <Link href={""}>
                <AiFillInstagram className="shadow-lg h-10 w-10 items-center justify-center align-center hover:text-blue-500 rounded-full mr-2" />
              </Link>
              <Link href={""}>
                <AiFillTwitterSquare className="shadow-lg h-10 w-10 items-center justify-center align-center hover:text-blue-500 rounded-full mr-2" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-5/12 px-4 md:mx-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links:
                </span>
                <ul className="list-unstyled mx-auto">
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blue-500 hover:underline font-semibold block pb-2 text-sm"
                      href="https://www.amathuslimassol.com/"
                    >
                      Amathus Hotels Rhodes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blue-500 hover:underline font-semibold block pb-2 text-sm"
                      href="http://www.claridgepublic.com/"
                    >
                      Claridge Public Ltd
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col lg:w-full">
              <SubscriptionEmail />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span> Develop by{" "}
              <Link
                href="https://www.aetelco.com"
                className="text-blueGray-500 hover:text-secondary"
              >
                AETELCO.
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Footer;
