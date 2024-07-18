"use client";

import Image from "next/image";
import ReactPlayer from "react-player";

export default function GettingStarted() {
  return (
    <div className="flex flex-col items-center justify-between max-w-5xl container mx-auto pt-20 pb-8">
      {/* title and description */}
      <h3 className="text-lg text-slate-500">Getting Started</h3>
      <h1 className="text-4xl font-semibold mt-2 w-full text-center pb-10 leading-relaxed px-12">
        A Guide to Scrap Trading with ScrapCycle and Harnessing the Power of Our
        App
      </h1>

      {/* header */}
      <div className="w-full h-[450px] bg-green-100 rounded-3xl overflow-clip flex items-center justify-center">
        <div className="w-3/4 h-full relative">
          <Image
            src="/articles/steps.png"
            fill
            style={{ objectFit: "contain" }}
            alt="ScrapCycle App Phones"
          />
        </div>
      </div>

      {/* article */}
      <div className="p-8 bg-white rounded-lg mx-36 py-12">
        <p>
          With ScrapCycle, simplicity meets practicality. We understand that
          people seek a straightforward, hassle-free way to recycle their waste.
          Our solution—ScrapCycle—is an app designed to transform waste
          collection into a seamless and convenient experience. ScrapCycle
          eliminates the need for individuals and businesses to venture out for
          sustainable and eco-friendly waste disposal.
        </p>

        <div className="w-[450px] h-[450px] mx-auto my-12">
          <div className="relative w-full h-full rounded-3xl border-4 border-green-400 overflow-hidden flex items-center justify-center">
            <ReactPlayer
              url="https://youtu.be/cAqoxpjYrWY"
              style={{ objectFit: "cover" }}
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold">
          Step 1: Book a Collection Schedule
        </h2>
        <p className="mt-5">
          Open the ScrapCycle app and click the{" "}
          <span className="font-semibold">"Add a booking"</span> button. Fill in
          the booking form with essential details such as your preferred
          collection day, address, and payment method (cash or GCash). Ensure
          accuracy and click <span className="font-semibold">"Confirm"</span> to
          finalize your booking.
        </p>

        <div className="w-full h-[600px] relative mb-12">
          <Image
            src="/articles/step-1.png"
            fill
            style={{ objectFit: "contain" }}
            alt="ScrapCycle App Phones"
          />
        </div>

        <h2 className="text-2xl font-semibold">
          Step 2: ScrapCycle Collection
        </h2>
        <p className="mt-5">
          Prepare your recyclables at home or your business by segregating them
          based on their material and type. To expedite the collection process,
          refer to the app's Pricelist page to see the accepted materials and
          their corresponding prices. On the designated collection day, our
          dedicated team will arrive at your doorstep to pick up your
          recyclables.
        </p>

        <div className="w-full h-[600px] relative mb-12">
          <Image
            src="/articles/step-2.png"
            fill
            style={{ objectFit: "cover" }}
            alt="ScrapCycle App Phones"
          />
        </div>

        <h2 className="text-2xl font-semibold">Step 3: Get Paid</h2>
        <p className="mt-5">
          During the collection process, our team will carefully assess your
          recyclables to determine their value. Prices may vary depending on the
          material and weight, so it's essential to consult the app's pricelist
          for transparency. We'll promptly weigh and count your scraps on-site
          and calculate your total earnings. Choose your preferred payment
          method<span className="font-semibold">—cash or GCash</span>—and
          receive your payment swiftly with a paper receipt.
        </p>

        <div className="w-3/4 h-96 relative mb-12 rounded-3xl overflow-clip mt-8 mx-auto">
          <Image
            src="/articles/step-3.png"
            fill
            style={{ objectFit: "cover" }}
            alt="ScrapCycle App Phones"
          />
        </div>

        <p className="mt-5">
          By recycling with ScrapCycle, you're not only contributing to a
          cleaner environment but also supporting sustainable practices and
          earning rewards for your efforts. Join us today and be part of the
          movement towards a greener, more eco-conscious future!
        </p>
      </div>
    </div>
  );
}
