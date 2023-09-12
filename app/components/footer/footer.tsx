import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import SubscriptionEmail from "../sendEmail/email";

function Footer() {
  return (
    <motion.div className=" bg-slate-600 p-5">
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-col lg:flex-row text-left lg:text-left h-80 lg:h-64">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold">
            Let's keep in touch!
          </h4>
          <Link href={"https://goo.gl/maps/hnG9GWr1MQtwR2KV8"}>
            <h5 className="text-lg mt-0 mb-2 hover:underline hover:text-blue-500">
              10 Georgiou Gennadiou Street, Agathangelos Court, 3rd floor 3041
              Limassol
            </h5>
          </Link>
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex flex-row mt-6 lg:mb-0 mb-6 lg:justify-center lg:mt-8">
            <Link href={""}>
              <AiFillFacebook className="shadow-lg h-10 w-10 items-center justify-center align-center hover:text-blue-500 rounded-full mr-2" />
            </Link>
            <Link href={""}>
              <AiFillInstagram className="shadow-lg h-10 w-10 items-center justify-center align-center hover:text-blue-500 rounded-full mr-2" />
            </Link>
            <Link href={""}>
              <AiFillTwitterSquare className="shadow-lg h-10 w-10 items-center justify-center align-center hover:text-blue-500 rounded-full mr-2" />
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-row lg:justify-end">
          <div className="flex flex-col items-top mb-6">
            <div className="w-full lg:w-5/12 px-4 md:mx-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold">
                Useful Links:
              </span>
              <ul className="list-unstyled mx-auto">
                <li>
                  <Link
                    className="text-blueGray-600 hover:text-blue-500 hover:underline font-semibold blocktext-sm"
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
            <div className="lg:w-full md:mt-2 ml-8 ">
              <SubscriptionEmail />
            </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center mt-30">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-6">
            Copyright © <span id="get-current-year">2023</span> Develop by{" "}
            <Link
              href="https://www.aetelco.com"
              className="text-blueGray-500 hover:text-blue-500 hover:underline"
            >
              AETELCO.
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Footer;
