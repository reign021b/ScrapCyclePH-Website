import Image from "next/image";

// icons
import { CgClose } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const DownloadDialog = ({ setCloseDownloadDialog }) => {
  return (
    <div className="fixed z-30 top-0 flex w-full h-full items-center justify-center">
      {/* backdrop */}
      <div
        onClick={setCloseDownloadDialog}
        className="bg-slate-800/50 backdrop-blur-sm w-full h-full absolute z-40"
      />

      {/* dialog */}
      <div className="bg-white mx-4 my-4 w-4/5 xl:w-3/5 h-3/5 rounded-3xl overflow-clip flex z-50">
        {/* image */}
        <div className="hidden md:block w-full h-full bg-neutral-50">
          <div className="relative w-full h-full group-hover:scale-110 transition duration-300 ease-in-out">
            <Image
              src="/qr-code-phone.png"
              fill
              style={{ objectFit: "contain" }}
              alt="ScrapCycle App Phone"
            />
          </div>
        </div>

        {/* download details */}
        <div className="w-full md:flex flex-col md:pl-2 xl:pl-4 md:pr-3 xl:pr-6 mt-5 lg:my-auto">
          {/* close button */}
          <button
            onClick={setCloseDownloadDialog}
            className="flex text-3xl lg:mb-10 ml-auto mr-5 text-slate-600"
          >
            <CgClose />
          </button>

          {/* content */}
          <div className="w-full pt-6 md:pt-0 px-5 my-auto">
            {/* title logo */}
            <div className="flex justify-center items-center">
              <div className="mt-[3px] mr-4">
                <Image
                  src="/logo.png"
                  width={47.46}
                  height={45.38}
                  alt="ScrapCycle Logo"
                />
              </div>
              <div>
                <Image
                  src="/title-logo.png"
                  width={148.99}
                  height={23.15}
                  alt="ScrapCycle Title Logo"
                />
              </div>
            </div>

            <h2 className="text-center lg:text-left text-3xl font-semibold my-5 pt-5">
              Start turning your <br />
              trash to cash
            </h2>
            <p className="hidden lg:block text-slate-500">
              ScrapCycle is a junkshop you can book that picks up your scraps
              and pays you for their market rate!
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 pb-10 border-slate-300">
              <a
                href="https://play.google.com/store/apps/details?id=scrapcycle.com&hl=en-PH"
                target="_blank"
                className="mx-8 lg:mx-0 border border-slate-600 rounded-xl p-3 flex col-span-2 lg:col-span-1 hover:bg-green-50 hover:border-green-600 transition duration-200 ease-in"
              >
                <div className="relative h-9 w-9">
                  <Image
                    src="/logos_google-play-icon.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt="Playstore Logo"
                  />
                </div>
                <div className="text-left ml-3">
                  <p className="text-xs">Download on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </a>
              <button className="mx-8 lg:mx-0 border border-slate-300 rounded-xl p-3 flex col-span-2 lg:col-span-1 text-slate-400 cursor-not-allowed">
                <div className="text-4xl">
                  <FaApple />
                </div>
                <div className="text-left ml-3">
                  <p className="text-xs">Available soon</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadDialog;
