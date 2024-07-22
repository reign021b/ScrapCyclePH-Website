import Image from "next/image";
import ServiceItem from "./components/service-item";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-between max-w-5xl container mx-auto pt-10 lg:pt-20 pb-28">
      {/* title and description */}
      <h3 className="text-lg text-green-600">What we do</h3>
      <h1 className="scale-75 md:scale-90 lg:scale-100 text-center px-5 text-4xl font-semibold mt-2 mb-12">
        We buy your scraps and recycle them
      </h1>
      <p className="px-5 pt-10 border-t border-slate-200 leading-relaxed">
        Welcome to ScrapCycle – your trusted partner in revolutionizing waste
        management and promoting environmental sustainability across the
        Philippines. At ScrapCycle, we're on a mission to simplify recycling,
        empower individuals, and create a cleaner, greener future for
        generations to come. In this blog, we'll dive into what we do and how
        our innovative platform is reshaping the recycling landscape.
      </p>

      {/* grid */}
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14 gap-x-7 gap-y-16 w-full">
        <ServiceItem
          title="Residential"
          description="Clear clutter, earn cash, and go green with ScrapCycle's hassle-free residential recycling services."
          imgUrl="/services/residential.png"
          availability={true}
          link="/services/residential"
        />
        <ServiceItem
          title="Business"
          description="Unlock sustainable solutions for your business waste with ScrapCycle's efficient recycling services."
          imgUrl="/services/business.png"
          availability={true}
          link="/services/business"
        />
        <ServiceItem
          title="Construction"
          description="Construction waste services to be available soon. Contact our team for more information."
          imgUrl="/services/construction.png"
          availability={false}
        />
        <ServiceItem
          title="MRF"
          description="Government and MRF waste services to be available soon. Contact our team for more information."
          imgUrl="/services/mrf.png"
          availability={false}
        />
        <ServiceItem
          title="Disaster"
          description="Post-disaster waste services to be available soon. Contact our team for more information."
          imgUrl="/services/disaster.png"
          availability={false}
        />
        <ServiceItem
          title="Vehicle Scrapping"
          description="Vehicle scrapping services to be available soon. Contact our team for more information."
          imgUrl="/services/vehicle-scrapping.png"
          availability={false}
        />
      </div>
    </div>
  );
}
