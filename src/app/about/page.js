"use client";

import Image from "next/image";

// icons
import { MdOutlineTimer } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import ReviewSlides from "../components/review-slides";
import ReactPlayer from "react-player";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-between max-w-5xl container mx-auto pt-20">
      <h3 className="text-lg text-slate-500">About Us</h3>
      <h1 className="text-3xl font-semibold mt-2 w-full text-center leading-relaxed">
        At ScrapCycle, we're on a mission to revolutionize waste management and
        recycling in the Philippines. Our aim is to make recycling{" "}
        <span className="text-green-600">accessible</span>
        {", "}
        <span className="text-green-600">convenient</span>
        {", and "}
        <span className="text-green-600">rewarding</span> for everyone.
      </h1>

      {/* gallery */}
      <div className="flex justify-around w-full items-center pt-16 pb-24">
        <div className="w-56 h-72">
          <div className="relative w-full h-full rounded-3xl overflow-clip flex items-center justify-center">
            <Image
              src="/about-left.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phones"
            />
          </div>
        </div>

        {/* video */}
        <div className="w-[500px] h-[500px]">
          <div className="relative w-full h-full rounded-3xl border-4 border-green-400 overflow-hidden flex items-center justify-center">
            <ReactPlayer
              url="https://youtu.be/cAqoxpjYrWY"
              style={{ objectFit: "cover" }}
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="w-56 h-72">
          <div className="relative w-full h-full rounded-3xl overflow-clip flex items-center justify-center">
            <Image
              src="/about-right.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phones"
            />
          </div>
        </div>
      </div>

      {/* statements */}
      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold">Problems we aim to solve</h2>
          <p className="text-slate-500 mt-3">
            At ScrapCycle, we address the challenge of improper waste management
            practices and limited recycling opportunities. We strive to combat
            the growing issue of waste accumulation in landfills, polluted
            waterways, and harmful emissions, fostering a more sustainable
            future for communities.
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold">Our Solutions</h2>
          <p className="text-slate-500 mt-3">
            Through our innovative platform, ScrapCycle provides a convenient
            solution for individuals and businesses to recycle their waste
            responsibly. By offering seamless waste collection services,
            transparent pricing, and environmentally friendly practices, we
            empower users to participate in sustainable initiatives.
          </p>
        </div>
      </div>

      {/* competitive advantages */}
      {/* heading text */}
      <h2 className="text-4xl font-semibold mt-40">Why choose us?</h2>
      <p className="text-slate-500 max-w-lg text-center mt-5 mb-14">
        Choose ScrapCycle and experience fair pricing, unmatched convenience,
        and a tangible positive impact on the environment.
      </p>
      {/* grid */}
      <div className="my-8 grid grid-cols-2 gap-x-12 gap-y-20">
        <div className="relative bg-neutral-100 px-6 pt-14 pb-8 rounded-2xl col-span-1">
          <div className="absolute bottom-3/4 mb-3 bg-white rounded-full w-20 h-20 border border-green-600 text-green-600 flex items-center justify-center text-4xl">
            <MdOutlineTimer />
          </div>
          <h3 className="text-2xl font-semibold mb-3 px-2">Convenience</h3>
          <p className="text-sm px-2">
            With our app-based platform, scheduling a recycling collection has
            never been easier. Simply book a collection, and we'll take care of
            the rest.
          </p>
        </div>
        <div className="relative bg-neutral-100 px-6 pt-14 pb-8 rounded-2xl col-span-1">
          <div className="absolute bottom-3/4 mb-3 bg-white rounded-full w-20 h-20 border border-green-600 text-green-600 flex items-center justify-center text-3xl">
            <FaMoneyBillTrendUp />
          </div>
          <h3 className="text-2xl font-semibold mb-3 px-2">
            Competitive Pricing
          </h3>
          <p className="text-sm px-2">
            ScrapCycle offers competitive rates for your recyclable materials,
            ensuring that you receive fair compensation for your contribution to
            sustainability.
          </p>
        </div>
        <div className="relative bg-neutral-100 px-6 pt-14 pb-8 rounded-2xl col-span-1">
          <div className="absolute bottom-3/4 mb-3 bg-white rounded-full w-20 h-20 border border-green-600 text-green-600 flex items-center justify-center text-4xl">
            <IoEarth />
          </div>
          <h3 className="text-2xl font-semibold mb-3 px-2">
            Environmental Impact
          </h3>
          <p className="text-sm px-2">
            By recycling with ScrapCycle, you're not only earning extra income
            but also contributing to a healthier planet. Together, we can make a
            difference!
          </p>
        </div>
        <div className="relative bg-neutral-100 px-6 pt-14 pb-8 rounded-2xl col-span-1">
          <div className="absolute bottom-3/4 mb-3 bg-white rounded-full w-20 h-20 border border-green-600 text-green-600 flex items-center justify-center text-4xl">
            <RiCustomerService2Fill />
          </div>
          <h3 className="text-2xl font-semibold mb-3 px-2">
            24/7 Customer Service
          </h3>
          <p className="text-sm px-2">
            Experience peace of mind with ScrapCycle's round-the-clock customer
            support. We're here for you whenever you need assistance or have
            questions.
          </p>
        </div>
      </div>

      {/* last part */}
      <div className="relative w-24 h-24 mt-36 rounded-3xl overflow-clip flex items-center justify-center">
        <Image
          src="/logo.png"
          fill
          style={{ objectFit: "cover" }}
          alt="ScrapCycle App Phones"
        />
      </div>

      <h2 className="text-3xl font-semibold my-6 leading-relaxed max-w-2xl text-center">
        Join us in our mission to create a greener, more sustainable future!
      </h2>
      <p className="max-w-3xl text-center">
        Join ScrapCycle on our mission to create a greener, more sustainable
        future – starting with you! Together, let's take action for a cleaner
        planet and a brighter tomorrow. Your support matters!
      </p>

      <div className="mb-12 mt-20 relative w-screen overflow-auto cursor-grab">
        {/* review container */}
        <ReviewSlides />
      </div>
    </div>
  );
}
