"use client";

import faqItems from "@/data/faqs";
import { useState } from "react";
import { HiPlus } from "react-icons/hi2";

export default function FAQs() {
  const [question, setQuestion] = useState(0);

  return (
    <div className="flex flex-col items-center justify-between max-w-2xl container mx-auto pt-10 md:pt-20 pb-16 md:pb-28 text-center">
      {/* title and description */}
      <h1 className="text-2xl md:text-4xl font-semibold mt-2 w-full text-center">FAQs</h1>
      <p className="pt-6 pb-12">
        Can’t find an answer to your question? Feel free to contact us for
        personalized assistance and further clarification.
      </p>
      {/* questions */}
      {faqItems.map((item, index) => (
        <>
          <input
            className="hidden"
            type="radio"
            id={`faq-${index}`}
            name="fav_language"
            value={index}
            onChange={(val) => val && setQuestion(index)}
          />
          <label
            for={`faq-${index}`}
            className={`py-6 px-5 ${
              index == 0 ? "border-y" : "border-b"
            } border-slate-300 w-full`}
          >
            <div className="flex justify-between w-full cursor-pointer group">
              <h2
                className={`text-lg font-medium text-left group-hover:text-slate-400 ${
                  question == index && "text-green-600"
                }`}
              >
                {item.question}
              </h2>
              <p
                className={`text-3xl text-slate-600 transition-all duration-200 ${
                  question == index && "rotate-45"
                }`}
              >
                <HiPlus />
              </p>
            </div>

            {question == index && (
              <p className="text-left mt-3 pb-2">{item.answer}</p>
            )}
          </label>
        </>
      ))}
    </div>
  );
}
