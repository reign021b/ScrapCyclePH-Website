"use client";

import { useState } from "react";
import Image from "next/image";

const articles = [
  {
    href: "/article/clutter-into-trash",
    title: "Turn Clutter into Cash with Ease - ScrapCycle's Here to Help!",
    description:
      "Is your home or office overrun with clutter? Do you find yourself constantly navigating around piles of scraps, old electronics, and other unwanted items? If so, you're not alone...",
    imgSrc:
      "https://alfljqjdwlomzepvepun.supabase.co/storage/v1/object/public/article/clutter-to-trash.png",
    readTime: "4 min read",
  },
  {
    href: "/article/recycling-with-ease",
    title: "Recycling with Ease: Dispose of E-Waste Properly with ScrapCycle",
    description:
      "In our tech-driven world, we constantly use electronic devices such as phones, laptops, tablets, air conditioners, old appliances, and televisions...",
    imgSrc:
      "https://alfljqjdwlomzepvepun.supabase.co/storage/v1/object/public/article/recycling-with-ease.png",
    readTime: "2 min read",
  },
  // Add more articles here...
];

const ARTICLES_PER_PAGE = 3;

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex flex-col items-center justify-between max-w-5xl container mx-auto pt-10 lg:pt-20 pb-28">
      <h1 className="text-lg text-green-600">ScrapCycle PH</h1>
      <h1 className="scale-75 md:scale-90 lg:scale-100 text-center px-5 text-4xl font-semibold mt-2 mb-12">
        Articles
      </h1>
      {/* grid */}
      {currentArticles.map((article, index) => (
        <a
          href={article.href}
          key={index}
          className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          <div className="rounded-2xl grid md:flex grid-cols-2 md:grid-cols-3 px-5 pb-5 lg:pb-10">
            <div className="col-span-2 md:cols-span-1 lg:min-w-[500px] md:min-w-[300px] max-w-[400px]">
              <Image
                width={500}
                height={500}
                alt="article"
                src={article.imgSrc}
                className="rounded-2xl"
              />
            </div>
            <div className="col-span-2 pl-5 py-3">
              <div className="flex pb-3">
                <Image
                  alt="scrapcycle-logo"
                  src={
                    "https://alfljqjdwlomzepvepun.supabase.co/storage/v1/object/public/article/logo.png"
                  }
                  width={30}
                  height={30}
                />
                <div className="text-sm font-semibold items-center flex justify-center pl-1">
                  ScrapCycle PH
                </div>
              </div>
              <div className="text-2xl font-semibold pb-2">{article.title}</div>
              <div className="text-gray-600 hidden lg:block">
                {article.description}
              </div>
              <div className="lg:mt-5">{article.readTime}</div>
            </div>
          </div>
        </a>
      ))}

      <div className="flex justify-center space-x-2 mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white bg-green-600 rounded disabled:bg-gray-300"
        >
          &lt; Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`px-4 py-2 rounded ${
              page === currentPage
                ? "bg-green-700 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-white bg-green-600 rounded disabled:bg-gray-300"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}
