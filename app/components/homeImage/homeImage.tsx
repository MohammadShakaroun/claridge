import { motion } from "framer-motion";
import React from "react";
import HomeContent from "../homeContent/homeContent";
import GeneralInfo from "../generalInformation/generalInfo"
import Image from "next/image";
import ClaridgeEnter from "../../images/claridgeenter.jpg";

function HomePage() {
  return (
    <motion.div className="w-full min-h-screen bg-secondary items-center justify-center mx-auto">
        <Image src={ClaridgeEnter} alt={""} className="w-full h-96 rounded-md" />
        <HomeContent />
        {/* <GeneralInfo /> */}
    </motion.div>
  );
}
export default HomePage;
