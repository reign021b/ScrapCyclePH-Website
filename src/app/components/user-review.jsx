import Image from "next/image";
import { LiaFacebookF } from "react-icons/lia";

const UserReview = ({ reviewImage, name, description, imageHeight }) => {
  return (
    <div className="w-96 border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
      {/* image */}
      <div className={`relative w-full h-[${imageHeight}px]`}>
        <Image
          src={`/reviews/${reviewImage}.png`}
          fill
          style={{ objectFit: "cover" }}
          alt="ScrapCycle App Phone"
        />
      </div>

      {/* details */}
      <div className="py-6 px-5">
        {/* top */}
        <div className="flex items-center">
          {/* user image */}
          <div
            className={`w-14 h-14 bg-[url('/step-1.png')] bg-cover rounded-full`}
          />
          {/* name */}
          <div className="ml-3 mr-auto">
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm">Posted on Facebook</p>
          </div>
          {/* link button */}
          <div className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl">
            <LiaFacebookF />
          </div>
        </div>
        <p className="text-sm mt-4">{description}</p>
      </div>
    </div>
  );
};

export default UserReview;
