import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import { ContextApp } from "../utils/Context";

function Mobile() {
  const { Mobile, setMobile, handleQuery } = useContext(ContextApp);

  return (
    <div className={`absolute left-0 top-0 w-full z-50 bg-black/60 flex justify-end ${Mobile ? "" : "hidden"}`}>
      <div className="h-screen bg-gray-900 w-[300px] flex flex-col p-2 text-white">
        <div className="flex items-start justify-between w-full mb-4">
          <span className="border border-gray-600 rounded w-full py-2 text-xs flex gap-1 items-center cursor-pointer hover:bg-gray-800 transition" onClick={() => window.location.reload()}>
            <AiOutlinePlus fontSize={18} />
            New Chat
          </span>
        </div>
        <div className="flex-grow overflow-y-auto text-sm">
          {/* Example query items */}
          {["What is Programming?", "How to use an API?"].map((query) => (
            <span
              key={query}
              className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center cursor-pointer hover:bg-gray-800 transition"
              onClick={() => handleQuery(query)}
            >
              <FiMessageSquare />
              <span className="text-sm truncate">{query}</span>
            </span>
          ))}
        </div>
        <div className="border-t border-gray-600 flex flex-col gap-2 items-center p-2">
          <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center cursor-pointer hover:bg-gray-800 transition">
            <FiUser />
            Upgrade to Plus
            <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">NEW</span>
          </span>
        </div>
      </div>
      <div className="m-2">
        <span className="border border-gray-600 text-white rounded px-3 py-2 flex items-center cursor-pointer hover:bg-gray-800 transition" title="Close sidebar" onClick={() => setMobile(!Mobile)}>
          <MdClose />
        </span>
      </div>
    </div>
  );
}

export default Mobile;