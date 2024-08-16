import Image from "next/image";
import Link from "next/link";

// icons
import { FaNewspaper, FaAddressCard } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";

const NavigationModal = () => {
  return (
    <div className="absolute top-6 -left-7 bg-white shadow-2xl p-5 rounded-3xl w-72">
      {/* modal menu 1 */}
      <Link href="/about" className="flex mb-5 group">
        {/* icon */}
        <div className="bg-green-100 rounded-lg w-11 h-11 flex items-center justify-center shrink-0">
          <div className="relative w-4/6 h-4/6">
            <Image
              src="/logo.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle Logo"
            />
          </div>
        </div>

        {/* text */}
        <div className="flex flex-col flex-1 text-left px-4">
          <h4 className="font-semibold group-hover:text-green-600 transition duration-300">
            About ScrapCycle PH
          </h4>
          <p className="text-sm text-slate-500 group-hover:text-green-600 transition duration-300">
            Learn more about us
          </p>
        </div>
      </Link>

      {/* modal menu 2 */}
      <Link href="/article" className="flex my-5 group">
        {/* icon */}
        <div className="bg-green-100 rounded-lg w-11 h-11 flex items-center justify-center shrink-0 text-green-600 text-2xl">
          <FaNewspaper />
        </div>

        {/* text */}
        <div className="flex flex-col flex-1 text-left px-4">
          <h4 className="font-semibold group-hover:text-green-600 transition duration-300">
            Articles
          </h4>
          <p className="text-sm text-slate-500 group-hover:text-green-600 transition duration-300">
            Posts
          </p>
        </div>
      </Link>

      {/* modal menu 3 */}
      <Link href="/careers" className="flex mb-5 group">
        {/* icon */}
        <div className="bg-green-100 rounded-lg w-11 h-11 flex items-center justify-center shrink-0 text-green-600 text-2xl">
          <FaAddressCard />
        </div>

        {/* text */}
        <div className="flex flex-col flex-1 text-left px-4">
          <h4 className="font-semibold group-hover:text-green-600 transition duration-300">
            Careers
          </h4>
          <p className="text-sm text-slate-500 group-hover:text-green-600 transition duration-300">
            See if we’re hiring
          </p>
        </div>
      </Link>

      {/* modal menu 4 */}
      <Link href="/faqs" className="flex pt-5 group border-t border-slate-200">
        {/* icon */}
        <div className="bg-green-100 rounded-lg w-11 h-11 flex items-center justify-center shrink-0 text-green-600 text-2xl">
          <MdQuestionAnswer />
        </div>

        {/* text */}
        <div className="flex flex-col flex-1 text-left px-4">
          <h4 className="font-semibold group-hover:text-green-600 transition duration-300">
            FAQs
          </h4>
          <p className="text-sm text-slate-500 group-hover:text-green-600 transition duration-300">
            Common questions
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NavigationModal;
