"use client";

import React, { useEffect, useRef, useState } from "react";
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
    <div className="flex flex-col items-center justify-between max-w-5xl container mx-auto pt-10 lg:pt-20 pb-28">
      {/* title and description */}
      <h3 className="text-lg text-green-600">What we buy</h3>
      <h1 className="text-2xl md:text-4xl px-5 font-semibold mt-2 w-full text-center pb-12 border-b border-slate-200">
        We accept a wide catalog of materials and items
      </h1>

      {/* menu */}
      <div className="scale-75 md:scale-90 lg:scale-100 md:px-5 w-full grid grid-cols-6 gap-8 md:mt-8">
        <button
          onClick={() => scrollToRef(1)}
          className="col-span-3 md:col-span-2 lg:col-span-1 w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Plastic
        </button>
        <button
          onClick={() => scrollToRef(2)}
          className="col-span-3 md:col-span-2 lg:col-span-1 w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Metal
        </button>
        <button
          onClick={() => scrollToRef(3)}
          className="col-span-3 md:col-span-2 lg:col-span-1 w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Paper
        </button>
        <button
          onClick={() => scrollToRef(4)}
          className="col-span-3 md:col-span-2 lg:col-span-1 w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          E-Waste
        </button>
        <button
          onClick={() => scrollToRef(5)}
          className="col-span-3 md:col-span-2 lg:col-span-1 w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Battery
        </button>
        <button
          onClick={() => scrollToRef(6)}
          className="col-span-3 md:col-span-2 lg:col-span-1 w-full rounded-2xl border border-slate-400 text-center text-lg py-2 hover:bg-green-50 hover:border-green-500 hover:text-green-700"
        >
          Glass
        </button>
      </div>

      {/* items */}
      {/* plastics */}
      <div ref={plasticRef} className="scale-90 md:scale-100 px-5 md:pt-24">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl font-medium mr-10 w-52">Plastics</h2>
          <p>
          Plastic is a man-made material that can be shaped into many different forms. It's created by combining simple chemicals into long chains. This makes plastic flexible and strong. While plastics are durable and inexpensive, their disposal and environmental impact are significant concerns. Recycling plastics helps reduce waste and conserve resources.
            <br />
            <br />
            Note: Pricing for bulk scraps is higher (contact us for more info).
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-6 gap-x-7 gap-y-10 row-auto w-full mt-10">
          {items
            .filter((item) => item.type === "plastic")
            .map((item, index) => (
              <PriceItem
                key={item.id} // Assuming 'id' is a unique identifier for each item
                imgUrl={item.image}
                name={item.itemName}
                price={item.priceRange}
              />
            ))}
        </div>
      </div>

      {/* metal */}
      <div ref={metalRef} className="scale-90 md:scale-100 px-5 md:pt-28">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl font-medium mr-10 w-52">Metals</h2>
          <p>
          Metals are materials that are usually hard, shiny, and can conduct heat and electricity. Recycling metals helps save resources and reduces waste. Instead of throwing away old metal items, recycling them allows us to reuse the metal to make new products. 
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
                key={item.id} 
                imgUrl={item.image}
                name={item.itemName}
                price={item.priceRange}
              />
            ))}
        </div>
      </div>

      {/* paper */}
      <div ref={paperRef} className="scale-90 md:scale-100 px-5 md:pt-28">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl font-medium mr-10 w-52">Paper</h2>
          <p>
          Paper is a material made from plant fibers, usually from wood but sometimes from other plants like cotton. It’s used for things like books, newspapers, and packaging. During recycling, paper is broken down, cleaned, and reprocessed into new paper products, helping to reduce the need for virgin materials and decrease environmental impact.
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
                key={item.id}
                imgUrl={item.image}
                name={item.itemName}
                price={item.priceRange}
              />
            ))}
        </div>
      </div>

      {/* e-waste */}
      <div ref={ewasteRef} className="scale-90 md:scale-100 px-5 md:pt-28">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl font-medium mr-10 w-52">E-Waste</h2>
          <p>
          E-waste, or electronic waste, refers to discarded electrical or electronic devices. E-waste often contains hazardous materials like lead, mercury, and cadmium, which can pose environmental and health risks if not properly managed. Recycling e-waste helps recover valuable materials and reduces the negative impact on the environment.
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
                key={item.id}  
                imgUrl={item.image}
                name={item.itemName}
                price={item.priceRange}
              />
            ))}
        </div>
      </div>

      {/* battery */}
      <div ref={batteryRef} className="scale-90 md:scale-100 px-5 md:pt-28">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl font-medium mr-10 w-52">Batteries</h2>
          <p>
          Car and Motorcycle batteries are specialized batteries designed to power vehicles. Both types of batteries contain hazardous materials like lead and sulfuric acid, making proper disposal and recycling crucial for environmental safety and resource recovery.
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
                key={item.id}  
                imgUrl={item.image}
                name={item.itemName}
                price={item.priceRange}
              />
            ))}
        </div>
      </div>

      {/* glass */}
      <div ref={glassRef} className="scale-90 md:scale-100 px-5 md:pt-28 mb-20">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl font-medium mr-10 w-52">Glass</h2>
          <p>
          Glass is a hard and breakable material often used for things like windows, bottles, and jars. It’s made by melting sand and then quickly cooling it to create a solid. Glass is recyclable and can be processed repeatedly without losing quality, making it an environmentally friendly option when properly managed. Recycling glass helps conserve resources and reduces the need for raw materials.
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
                key={item.id}
                imgUrl={item.image}
                name={item.itemName}
                price={item.priceRange}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
