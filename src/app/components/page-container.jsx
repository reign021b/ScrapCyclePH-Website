"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadDialog from "./download-dialog";
import { useState } from "react";

// icons
import { FaChevronDown } from "react-icons/fa6";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import NavigationModal from "./navigation-modal";

const PageContainer = ({ children }) => {
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // open modal
  function modalSwitchOn() {
    setOpenModal(true);
  }
  function modalSwitchOff() {
    setOpenModal(false);
  }

  return (
    <>
      {/* download dialog */}
      {openDownloadDialog && (
        <DownloadDialog
          setCloseDownloadDialog={() => setOpenDownloadDialog(false)}
        />
      )}

      {/* navigation bar */}
      <nav className="sticky top-0 backdrop-blur-2xl bg-white/70 z-20 w-full">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* title logo */}
          <Link href="/" className="flex items-center">
            <div className="mt-[3px] mr-4">
              <Image
                src="/logo.png"
                width={50.21}
                height={48}
                alt="ScrapCycle Logo"
              />
            </div>
            <div>
              <Image
                src="/title-logo.png"
                width={197}
                height={30.61}
                alt="ScrapCycle Title Logo"
              />
            </div>
          </Link>

          {/* middle options */}
          <ul className="flex items-center">
            <li className="hover:text-slate-400 hover:cursor-pointer transition duration-300">
              <Link href="/services">What we do</Link>
            </li>
            <li className="hover:text-slate-400 hover:cursor-pointer transition duration-300 mx-12">
              <Link href="/what-we-buy">What we buy</Link>
            </li>
            <li
              onMouseOver={modalSwitchOn}
              onMouseOut={modalSwitchOff}
              className="group/more cursor-pointer flex items-center relative"
            >
              {/* modal */}
              {openModal && <NavigationModal />}

              <p className="mr-4 group-hover/more:text-slate-400 transition duration-300 flex items-center">
                More
              </p>
              <FaChevronDown className="text-slate-500 group-hover/more:text-slate-400 transition duration-300 flex items-center" />
            </li>
          </ul>

          {/* call to action buttons */}
          <div className="flex items-center">
            <button
              onClick={() => setOpenDownloadDialog(true)}
              className="w-32 py-2.5 mr-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
            >
              Sell Scrap
            </button>
            <Link
              href="/contact-us"
              className="w-32 py-2.5 rounded-2xl text-center font-medium border-green-500 text-green-600 border-solid border hover:bg-green-200/50 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {children}

      {/* download */}
      <section className="text-center mt-20 mb-36">
        <p className="text-lg">Ready to turn your trash into cash?</p>
        <h2 className="text-4xl font-semibold mt-4 mb-7">
          Sell your scraps to ScrapCycle!
        </h2>
        <button
          onClick={() => setOpenDownloadDialog(true)}
          className="px-10 py-3 mr-3 my-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
        >
          Try it now
        </button>
      </section>

      {/* footer */}
      <footer className="px-20 container mx-auto">
        {/* container */}
        <div className="border-t border-b border-t-slate-200 border-b-slate-200 w-full pt-10 pb-20 px-6">
          {/* title logo */}
          <div className="flex items-center">
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

          {/* bottom */}
          <div className="mt-9 flex justify-between">
            {/* contact */}
            <div className="max-w-sm">
              <h2 className="text-2xl font-semibold leading-normal">
                We would love to hear from you.
              </h2>
              <p className="mt-4 mb-10">
                Feel free to reach out if you want to collaborate with us or
                simply have a chat.
              </p>
              <Link
                href="/contact-us"
                className="text-center px-10 py-3 mr-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Contact us details */}
            <ul className="text-sm ml-8 max-w-64 text-slate-500">
              <li className="font-semibold text-slate-800">Contact us</li>
              <li className="mt-4">
                <p>Our Email</p>
                <p>scrapcycleph@gmail.com</p>
              </li>
              <li className="mt-4">
                <p>Our Phone</p>
                <p>(+63)966 902 8659</p>
              </li>
              <li className="mt-4">
                Hiraiya Bldg. Caraga State University, Brgy. Ampayon, Butuan
                City
              </li>
            </ul>

            {/* Contact us details */}
            <ul className="text-sm text-slate-500 ">
              <li className="font-semibold text-slate-800">Services</li>
              <li className="mt-4">
                <Link href={"/faqs"} className="hover:text-black">
                  FAQ
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href={"/article/getting-started"}
                  className="hover:text-black"
                >
                  Features
                </Link>
              </li>
              <li className="mt-4">
                <Link href={"/services"} className="hover:text-black">
                  What we do
                </Link>
              </li>
              <li className="mt-4">
                <Link href={"/what-we-buy"} className="hover:text-black">
                  What we buy
                </Link>
              </li>
            </ul>

            {/* Contact us details */}
            <ul className="text-sm text-slate-500 ">
              <li className="font-semibold text-slate-800">Company</li>
              <li className="mt-4">
                <Link href={"/about"} className="hover:text-black">
                  About us
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href={"/article/environment"}
                  className="hover:text-black"
                >
                  Environment
                </Link>
              </li>
              <li className="mt-4">
                <Link href={"/careers"} className="hover:text-black">
                  Careers
                </Link>
              </li>
              <li className="mt-4">
                <Link href={"/contact-us"} className="hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* social links */}
        <div className="flex justify-between py-6 text-sm text-slate-500">
          <p>© 2024 ScrapCycle PH • All rights reserved</p>
          <div className="text-lg flex text-slate-400">
            <Link
              href={"https://www.facebook.com/ScrapCycle.ph/"}
              target="_blank"
              className="hover:text-slate-700 transition-all duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"https://www.tiktok.com/@scrapcycle.ph"}
              target="_blank"
              className="ml-4 hover:text-slate-700 transition-all duration-300"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageContainer;