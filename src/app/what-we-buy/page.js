"use client";

import { useEffect, useRef, useState } from "react";
import PriceItem from "./components/price-item";

// supabase
import { createClient } from "@supabase/supabase-js";

// supabase
// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://alfljqjdwlomzepvepun.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZmxqcWpkd2xvbXplcHZlcHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4MzA3MTEsImV4cCI6MTk4MzQwNjcxMX0.PQsUIVHXlt0P2lQ7ZGvYyHQioWZ-lz9uHKLdwVX-YYY"
);

export default function WhatWeBuy() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const plasticRef = useRef(null);
  const metalRef = useRef(null);
  const paperRef = useRef(null);
  const ewasteRef = useRef(null);
  const batteryRef = useRef(null);
  const glassRef = useRef(null);

  async function getItems() {
    const { data } = await supabase.from("prices").select();
    console.log(data);
    // const plasticItems = data.filter((item) => item.type == "plastic");
    // console.log(plasticItems);

    setItems(data);
  }

  function scrollToRef(materialType) {
    if (materialType == 1) {
      plasticRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (materialType == 2) {
      metalRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (materialType == 3) {
      paperRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (materialType == 4) {
      ewasteRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (materialType == 5) {
      batteryRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (materialType == 6) {
      glassRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col items-center justify-between max-w-5xl container mx-auto pt-20 pb-28">
      {/* title and description */}
      <h3 className="text-lg text-green-600">What we buy</h3>
      <h1 className="text-4xl font-semibold mt-2 w-full text-center pb-12 border-b border-slate-200">
        We accept a wide catalog of materials and items
      </h1>

      {/* menu */}
      <div className="w-full grid grid-cols-6 gap-8 mt-8">
        <button
          onClick={() => scrollToRef(1)}
          className="w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Plastic
        </button>
        <button
          onClick={() => scrollToRef(2)}
          className="w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Metal
        </button>
        <button
          onClick={() => scrollToRef(3)}
          className="w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Paper
        </button>
        <button
          onClick={() => scrollToRef(4)}
          className="w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          E-Waste
        </button>
        <button
          onClick={() => scrollToRef(5)}
          className="w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Battery
        </button>
        <button
          onClick={() => scrollToRef(6)}
          className="w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Glass
        </button>
      </div>

      {/* items */}
      {/* plastics */}
      <div ref={plasticRef} className="pt-24">
        <div className="flex">
          <h2 className="text-4xl font-medium mr-10 w-52">Plastics</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "plastic")
            .map((item) => (
              <PriceItem
                imgUrl={item.image}
                name={item.itemName}
                price={item.price}
              />
            ))}
        </div>
      </div>

      {/* metal */}
      <div ref={metalRef} className="pt-28">
        <div className="flex">
          <h2 className="text-4xl font-medium mr-10 w-52">Metals</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "metal")
            .map((item) => (
              <PriceItem
                imgUrl={item.image}
                name={item.itemName}
                price={item.price}
              />
            ))}
        </div>
      </div>

      {/* paper */}
      <div ref={paperRef} className="pt-28">
        <div className="flex">
          <h2 className="text-4xl font-medium mr-10 w-52">Paper</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "paper")
            .map((item) => (
              <PriceItem
                imgUrl={item.image}
                name={item.itemName}
                price={item.price}
              />
            ))}
        </div>
      </div>

      {/* e-waste */}
      <div ref={ewasteRef} className="pt-28">
        <div className="flex">
          <h2 className="text-4xl font-medium mr-10 w-52">E-Waste</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "e-waste")
            .map((item) => (
              <PriceItem
                imgUrl={item.image}
                name={item.itemName}
                price={item.price}
              />
            ))}
        </div>
      </div>

      {/* battery */}
      <div ref={batteryRef} className="pt-28">
        <div className="flex">
          <h2 className="text-4xl font-medium mr-10 w-52">Batteries</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "battery")
            .map((item) => (
              <PriceItem
                imgUrl={item.image}
                name={item.itemName}
                price={item.price}
              />
            ))}
        </div>
      </div>

      {/* glass */}
      <div ref={glassRef} className="pt-28 mb-20">
        <div className="flex">
          <h2 className="text-4xl font-medium mr-10 w-52">Glass</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "glass")
            .map((item) => (
              <PriceItem
                imgUrl={item.image}
                name={item.itemName}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}