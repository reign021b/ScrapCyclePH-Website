"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ServiceItem = ({ imgUrl, title, description, link, availability }) => {
  const router = useRouter();

  return (
    <button
      onClick={availability ? () => router.push(link) : null}
      className={`group text-left col-span-1 w-full flex flex-col items-start ${
        availability ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      {/* display image */}
      <div className="h-72 w-full rounded-3xl overflow-clip relative">
        {!availability && (
          <div className="w-full h-full flex items-center justify-center absolute z-10 bg-green-700/60">
            <p className="text-2xl font-semibold text-white">AVAILABLE SOON</p>
          </div>
        )}
        <div
          className={`relative h-full ${
            availability && "group-hover:scale-110"
          } transition duration-300 ease-in-out`}
        >
          <Image
            src={imgUrl}
            fill
            style={{ objectFit: "cover" }}
            alt="ScrapCycle App Phone"
          />
        </div>
      </div>

      {/* title and description */}
      <h3
        className={`text-xl font-semibold mt-6 mb-2 ${
          availability ? "group-hover:text-green-600" : "text-slate-400"
        }`}
      >
        {title}
      </h3>
      <p className={`${!availability && "text-slate-400"}`}>{description}</p>
    </button>
  );
};

export default ServiceItem;
