import React from "react";
import { MdFastForward } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between pr-2 md:pr-12 z-50 sticky pl-4 md:pl-12 shadow-md shadow-red-400 h-20 bg-red-300">
      <div className="text-black no-underline">
        <div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: +180 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col justify-center"
        >
          <div    whileTap={{ scale: 0.6 }} className="flex items-center cursor-pointer">
            <span className="text-3xl font-bold text">S</span>
            <span className="text-3xl font-bold">tore It</span>
            <MdFastForward className="text-3xl mt-1 ml-1" />
          </div>
          <div>
            <div className="w-14 h-1 bg-black rounded-2xl" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
