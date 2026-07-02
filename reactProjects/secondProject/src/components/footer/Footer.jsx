import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbPigFilled } from "react-icons/tb";
import { SiCloudinary } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import AIImageLogo from "../../assets/logo.png";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="flex items-center bg-black justify-between px-5 py-1 shadow-md ">
      <div className="w-20 h-20 rounded-full">
        <img
          src={AIImageLogo}
          alt="AI Image generator logo"
          className="w-full h-full rounded-full object-cover overflow-hidden"
        />
      </div>

      <div className="text-white" >
        <h2 className="text-center text-2xl text-green-500 capitalize font-bold pb-2">
          Tech stack used
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <li className="flex items-center gap-2">
            <FaReact className="text-blue-400 text-xl" />
            <span>React</span>
          </li>

          <li className="flex items-center gap-2">
            <FaNodeJs className="text-green-400 text-xl" />
            <span>Node.js</span>
          </li>

          <li className="flex items-center gap-2">
            <DiMongodb className="text-green-600 text-xl" />
            <span>MongoDB</span>
          </li>

          <li className="flex items-center gap-2">
            <SiExpress className="text-yellow-500 text-xl" />
            <span>Express.js</span>
          </li>

          <li className="flex items-center gap-2">
            <TbPigFilled className="text-pink-400 text-xl" />
            <span>Pig</span>
          </li>

          <li className="flex items-center gap-2">
            <SiCloudinary className="text-blue-500 text-xl" />
            <span>Cloudinary</span>
          </li>

          <li className="flex items-center gap-2">
            <RiTailwindCssFill className="text-blue-500 text-xl" />
            <span>Tailwind CSS</span>
          </li>
        </ul>
      </div>

      <Button className=" text-blue-500 underline underline-offset-4 cursor-pointer" type="submit">
        History
      </Button>

      {/* <button className="py-2 px-3 bg-blue-600 rounded">
        History
        </button> */}
    </footer>
  );
}
