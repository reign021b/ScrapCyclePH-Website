"use client";

import Image from "next/image";
import DownloadDialog from "./download-dialog";
import { useState } from "react";

const HomeHeader = () => {
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false);

  return (
    <>
      {/* download dialog */}
      {openDownloadDialog && (
        <DownloadDialog
          setCloseDownloadDialog={() => setOpenDownloadDialog(false)}
        />
      )}

      <header className="h-[90vh] grid md:flex items-center w-full">
        {/* image */}
        <div className="ml-12 md:hidden relative h-full flex-1 mt-36 lg:mr-8">
          <Image
            src="/phone-hand.png"
            fill
            style={{ objectFit: "contain" }}
            alt="ScrapCycle App Phone"
          />
        </div>
        
        {/* title */}
        <div className="flex-1">
          <div className="max-w-96 ml-auto mr-auto">
            <h1 className="text-center md:text-left text-4xl font-semibold leading-normal">
              ScrapCycle: Trash to Cash Made Easy
            </h1>
            <p className="text-lg mt-6 mb-8 text-slate-500 leading-normal">
              ScrapCycle is a junkshop you can book that picks up your scraps
              and pays you for their market rate!
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setOpenDownloadDialog(true)}
                className="px-8 py-3 mr-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
              >
                Download the app
              </button>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="hidden md:block relative h-full flex-1 mt-36 lg:mr-8">
          <Image
            src="/phone-hand.png"
            fill
            style={{ objectFit: "contain" }}
            alt="ScrapCycle App Phone"
          />
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
