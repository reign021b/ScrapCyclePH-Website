"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadDialog from "./download-dialog";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

// icons
import { FaChevronDown } from "react-icons/fa6";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import NavigationModal from "./navigation-modal";

const PageContainer = ({ children }) => {
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
      <nav className="sticky top-0 md:px-4 backdrop-blur-2xl bg-white/70 z-20 w-full">
        <div className="w-full mx-auto md:px-4 pr-4 md:pr-0 py-2.5 flex items-center justify-between">
          {/* title logo */}
          <Link href="/" className="scale-75 md:scale-100 flex items-center">
            <div className="mt-[3px] mr-2 md:mr-4">
              <Image
                src="/logo.png"
                width={50.21}
                height={48}
                alt="ScrapCycle Logo"
              />
            </div>
            <div className="mr-6">
              <Image
                src="/title-logo.png"
                width={197}
                height={30.61}
                alt="ScrapCycle Title Logo"
              />
            </div>
          </Link>

          {/* middle options */}
          <ul className="hidden lg:flex items-center">
            <li className="hover:text-green-600 hover:cursor-pointer transition duration-300">
              <Link href="/services">What we do</Link>
            </li>
            <li className="hover:text-green-600 hover:cursor-pointer transition duration-300 mx-12">
              <Link href="/what-we-buy">What we buy</Link>
            </li>
            <li
              onMouseOver={modalSwitchOn}
              onMouseOut={modalSwitchOff}
              className="group/more cursor-pointer flex items-center relative"
            >
              {/* modal */}
              {openModal && <NavigationModal />}

              <p className="mr-4 group-hover/more:text-green-600 transition duration-300 flex items-center">
                More
              </p>
              <FaChevronDown className="text-slate-500 group-hover/more:text-green-500 transition duration-300 flex items-center" />
            </li>
          </ul>

          {/* call to action buttons */}
          <div className="pl-3 md:flex items-center">
            <button
              onClick={() => setOpenDownloadDialog(true)}
              className="hidden md:block w-32 py-2.5 mr-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
            >
              Sell Scrap
            </button>
            <Link
              href="/contact-us"
              className="hidden md:block w-32 py-2.5 rounded-2xl text-center font-medium border-green-500 text-green-600 border-solid border hover:bg-green-200/50 transition duration-300"
            >
              Contact Us
            </Link>

            {/* mobile menu */}
            <div className="ml-3 lg:hidden">
              <button
                className="rounded-2xl shadow-inherit navbar-burger flex items-center text-green-600 p-3"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="block h-6 w-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <div
              className={`absolute top-0 left-0 w-full h-auto opacity-100 bg-white transform ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              } transition-transform duration-300 lg:hidden`}
            >
              {isMobileMenuOpen && (
                <div className="mobile-menu mt-5">
                  <button
                    onClick={toggleMobileMenu}
                    className="flex w-full items-right pr-5"
                  >
                    <div className="text-2xl flex ml-auto">
                      <CgClose />
                    </div>
                  </button>
                </div>
              )}
              <Link
                href="/"
                className="scale-75 md:scale-100 flex justify-center items-center mx-auto"
              >
                <div className="mr-2 md:mr-4">
                  <Image
                    src="/logo.png"
                    width={50.21}
                    height={48}
                    alt="ScrapCycle Logo"
                  />
                </div>
                <div className="mr-6">
                  <Image
                    src="/title-logo.png"
                    width={197}
                    height={30.61}
                    alt="ScrapCycle Title Logo"
                  />
                </div>
              </Link>

              <ul className="p-5 mb-5 md:mb-2">
                {/* Middle options */}
                <li className="block p-2 text-center font-semibold hover:bg-green-50 hover:text-green-600 rounded border-t border-b">
                  <Link href="/services">What we do</Link>
                </li>
                <li className="block p-2 text-center font-semibold hover:bg-green-50 hover:text-green-600 rounded border-b">
                  <Link href="/what-we-buy">What we buy</Link>
                </li>
                <li className="block p-2 text-center font-semibold hover:bg-green-50 hover:text-green-600 rounded border-b">
                  <Link href="/about">About ScrapCycle PH</Link>
                </li>
                <li className="block p-2 text-center font-semibold hover:bg-green-50 hover:text-green-600 rounded border-b">
                  <Link href="/article">Articles</Link>
                </li>
                <li className="block p-2 text-center font-semibold hover:bg-green-50 hover:text-green-600 rounded border-b">
                  <Link href="/faqs" className="hover:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
              {/* Call to action buttons */}
              <div className="flex items-center justify-center pb-10 md:pb-0">
                <button
                  onClick={() => setOpenDownloadDialog(true)}
                  className=" md:hidden w-32 py-2.5 mr-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
                >
                  Sell Scrap
                </button>
                <Link
                  href="/contact-us"
                  className=" md:hidden w-32 py-2.5 rounded-2xl text-center font-medium border-green-500 text-green-600 border-solid border hover:bg-green-200/50 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
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
      <footer className="px-3 md:px-10 lg:px-20 container lg:mx-auto sm:mx-auto">
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
            <div className="w-full">
              <h2 className="text-2xl font-semibold leading-normal">
                We would love to hear from you.
              </h2>
              <p className="mt-4 mb-10">
                Feel free to reach out if you want to collaborate with us or
                simply have a chat.
              </p>
              <div className="flex justify-center md:justify-start items-center">
                <Link
                  href="/contact-us"
                  className="text-center px-2 md:px-3 py-3 rounded-2xl text-xs sm:text-sm md:text-md lg:text-lg font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact us details */}
            <ul className="text-sm px-3 w-full text-slate-500">
              <li className="font-semibold text-slate-800">Contact us</li>
              <li className="mt-4">
                <p>Our Email</p>
                <p>scrapcycle781@gmail.com</p>
              </li>
              <li className="mt-4">
                <p>Our Phone</p>
                <p>(+63)966 902 8659</p>
              </li>
              <li className="mt-4">
                Hiraya Bldg. Caraga State University, Brgy. Ampayon, Butuan City
              </li>
            </ul>

            {/* Contact us details */}
            <ul className="hidden md:block text-sm ml-8 mr-8 w-full text-slate-500 ">
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
            <ul className="hidden md:block text-sm w-full text-slate-500 ">
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
