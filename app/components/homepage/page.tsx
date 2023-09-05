import React from "react";
import Image from "next/image";
import Claridge from "../../images/claridgemain.jpg";

function HomePage() {
  return (
    <div className=" w-10/12 min-h-screen bg-slate-400 bg-opacity-80 items-center justify-center px-4 mx-auto">
       <div className="bg-opacity-80 ">
            <Image
              src={Claridge}
              alt=""
              className="w-full h-96 top-0 items-center justify-center mx-auto"
            />
          </div>
    </div>
  );
}
export default HomePage;
