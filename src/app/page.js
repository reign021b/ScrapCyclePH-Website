import Image from "next/image";

// icons
import { IoCalendar } from "react-icons/io5";
import { RiRecycleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";

// custom components
import UserReview from "./components/user-review";
import ReviewSlides from "./components/review-slides";
import HomeHeader from "./components/home-header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 container mx-auto">
      {/* header */}
      <HomeHeader />

      {/* features */}
      <section className="py-20 px-20 grid grid-cols-4 gap-28 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl w-28 h-28 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <IoCalendar />
          </div>
          <h3 className="text-wrap text-lg pt-6">
            Free Collection Booking All-Year Round
          </h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl w-28 h-28 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <RiRecycleFill />
          </div>
          <h3 className="text-wrap text-lg pt-6">
            Wide Variety of Scraps Accepted
          </h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl w-28 h-28 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <FaMoneyBillTransfer />
          </div>
          <h3 className="text-wrap text-lg pt-6">
            Get Paid in the Market Rate of Your Scraps
          </h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl w-28 h-28 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <BsShieldLockFill />
          </div>
          <h3 className="text-wrap text-lg pt-6">
            Safety and Transparency in Every Transaction
          </h3>
        </div>
      </section>

      {/* how it works section */}
      <section className="my-12">
        {/* top */}
        <div className="mb-16 grid grid-cols-6 gap-8">
          {/* left */}
          <div className="col-span-4">
            <div className="rounded-2xl px-6 text-center py-4 w-64 border border-slate-600 text-xl">
              How does it work?
            </div>
            <h3 className="text-3xl mt-6 pr-6 font-semibold leading-normal">
              Sell us your recyclable scraps and help contribute to the circular
              economy.
            </h3>
          </div>

          {/* right */}
          <div className="col-span-2">
            <h4 className="text-xl mb-6">
              We strive to reduce waste in landfills and protect the
              environment!
            </h4>
            <Link
              href="/article/environment"
              className="px-10 py-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* bottom */}
        <div className="grid grid-cols-3 gap-9">
          {/* step 1 */}
          <div className="col-span-1 rounded-3xl overflow-clip group flex flex-col">
            {/* image */}
            <div className="relative h-72 group-hover:scale-110 transition duration-300 ease-in-out">
              <Image
                src="/step-1.png"
                fill
                style={{ objectFit: "cover" }}
                alt="ScrapCycle App Phone"
              />
            </div>

            {/* details */}
            <div className="px-8 pt-4 pb-7 group-hover:text-white bg-neutral-100 group-hover:bg-green-600 transition duration-300 ease-in-out flex-1 z-10">
              <h5 className="text-2xl font-semibold">Step 1</h5>
              <p className="text-lg mt-2">Book a ScrapCycle Collection.</p>
            </div>
          </div>

          {/* step 2 */}
          <div className="col-span-1 rounded-3xl overflow-clip group flex flex-col">
            {/* image */}
            <div className="relative h-72 group-hover:scale-110 transition duration-300 ease-in-out">
              <Image
                src="/step-2.png"
                fill
                style={{ objectFit: "cover" }}
                alt="ScrapCycle Pick-up"
              />
            </div>

            {/* details */}
            <div className="px-8 pt-4 pb-7 group-hover:text-white bg-neutral-100 group-hover:bg-green-600 transition duration-300 ease-in-out flex-1 z-10">
              <h5 className="text-2xl font-semibold">Step 2</h5>
              <p className="text-lg mt-2">
                We will pickup and weigh/count your scraps on collection day.
              </p>
            </div>
          </div>

          {/* step 3 */}
          <div className="col-span-1 rounded-3xl overflow-clip group flex flex-col">
            {/* image */}
            <div className="relative h-72 group-hover:scale-110 transition duration-300 ease-in-out">
              <Image
                src="/step-3.png"
                fill
                style={{ objectFit: "cover" }}
                alt="User gets paid"
              />
            </div>

            {/* details */}
            <div className="px-8 pt-4 pb-7 group-hover:text-white bg-neutral-100 group-hover:bg-green-600 transition duration-300 ease-in-out flex-1 z-10">
              <h5 className="text-2xl font-semibold">Step 3</h5>
              <p className="text-lg mt-2">
                You will immediately be paid through cash or GCash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* articles section */}
      <section className="grid grid-cols-2 grid-rows-2 gap-8 w-full h-[120vh] my-44">
        {/* article 1 */}
        <Link
          href="/article/getting-started"
          className="group relative row-span-1 col-span-2 flex items-center justify-center rounded-3xl overflow-clip"
        >
          {/* bg-image */}
          <div className="h-full w-full absolute z-0 group-hover:scale-105 transition duration-500 ease-in-out">
            <Image
              src="/article-get-started.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phones"
            />
          </div>

          {/* content */}
          <div className="flex flex-col items-center max-w-[500px] text-center absolute z-10">
            <h3 className="text-3xl font-medium">
              How to Get Started with the ScrapCycle App
            </h3>
            <p className="text-lg my-6">
              ScrapCycle is the easy, convenient, and secure way to turn your
              trash into cash.
            </p>
            <div className="px-10 py-3 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-700 transition duration-300">
              Learn More
            </div>
          </div>
        </Link>

        {/* article 2 */}
        <Link
          href="/services/business"
          className="group relative row-span-1 flex items-center justify-center rounded-3xl overflow-clip"
        >
          {/* bg-image */}
          <div className="h-full w-full absolute z-0 scale-[1.15] group-hover:scale-125 transition duration-500 ease-in-out">
            <Image
              src="/article-businesses.png"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "left center",
              }}
              alt="ScrapCycle Team Hauling"
            />
          </div>

          {/* content */}
          <div className="absolute z-10 p-14 bg-green-800/75 h-full w-full text-white text-left flex items-end">
            <div className="w-8/12">
              <h3 className="text-3xl font-medium ">
                We help businesses become more sustainable
              </h3>
              <p className="text-lg my-6">
                ScrapCycle helps to offset businesses’ carbon footprint for
                eco-friendly organizational practices.
              </p>
              <div className="px-10 py-3 mt-2 w-fit rounded-2xl font-medium bg-white text-green-700 hover:bg-green-100 transition duration-300">
                Learn More
              </div>
            </div>
          </div>
        </Link>

        {/* article 3 */}
        <Link
          href="/article/environment"
          className="group relative row-span-1 flex items-center justify-center rounded-3xl overflow-clip"
        >
          {/* bg-image */}
          <div className="h-full w-full absolute z-0 object-right-top group-hover:scale-110 transition duration-500 ease-in-out">
            <Image
              src="/article-environment.png"
              fill
              style={{
                objectFit: "cover",
              }}
              alt="ScrapCycle Tagline T-Shirt"
            />
          </div>

          {/* content */}
          <div className="absolute z-10 p-14 bg-gradient-to-tr from-slate-50 to-transparent h-full w-full text-left flex items-end">
            <div className="w-6/12">
              <h3 className="text-3xl font-semibold text-green-800">
                Our Environmental Advocacy
              </h3>
              <p className="text-lg my-6">
                ScrapCycle provides safe disposal ways to ensure healthy
                environment & sustainable living.
              </p>
              <div className="px-10 py-3 w-fit mt-2 rounded-2xl font-medium bg-green-600 text-white hover:bg-green-700 transition duration-300">
                Learn More
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* reviews section */}
      <section className="w-full flex flex-col items-center my-20">
        {/* title */}
        <h2 className="text-4xl font-medium items-center justify-center flex flex-wrap max-w-2xl">
          Sustainability {"  "}
          <span>
            <div className="mx-3 w-44 h-16 rounded-2xl bg-[url('/sustainability.png')] bg-cover" />
          </span>{" "}
          & Reliability{" "}
          <span>
            <div className="mx-3 my-5 w-44 h-16 rounded-2xl bg-[url('/reliability.png')] bg-cover" />
          </span>{" "}
          is what we offer
        </h2>
        {/* description */}
        <p className="text-center text-lg max-w-4xl my-6">
          At ScrapCycle, we're dedicated to making recycling accessible to all
          through our dependable service. Explore genuine user reviews to learn
          about firsthand experiences with our app.
        </p>

        {/* user review marquee */}

        <div className="my-12 relative w-screen overflow-auto cursor-grab">
          {/* review container */}
          <ReviewSlides />
        </div>
      </section>
    </main>
  );
}
