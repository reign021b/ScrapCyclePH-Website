import Image from "next/image";

export default function Business() {
  return (
    <div className="px-5 flex flex-col items-center justify-between max-w-5xl container mx-auto pt-10 lg:pt-20 pb-8">
      {/* title and description */}
      <h3 className="text-lg text-slate-500">Business Waste Services</h3>
      <h1 className="text-2xl md:text-4xl font-semibold md:mt-2 w-full text-center pb-10 leading-relaxed md:px-12">
        Maximizing Earnings and Environmental Impact with ScrapCycle Business
        Collections
      </h1>

      {/* header */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-clip flex items-center justify-center">
        <Image
          src="/articles/businesses.png"
          fill
          style={{ objectFit: "cover" }}
          alt="ScrapCycle App Phones"
        />
      </div>

      {/* article */}
      <div className="md:p-8 bg-white rounded-lg lg:mx-36 pt-12">
        <p className="mb-10">
          In the modern business world, sustainability and profitability go hand
          in hand. With ScrapCycle Business Collections, businesses can achieve
          both by maximizing their earnings while making a positive
          environmental impact.
        </p>

        <h2 className="text-2xl font-semibold mb-7">Why Choose ScrapCycle?</h2>
        <ol className="list-decimal ml-10">
          <li className="mb-4">
            <span className="font-bold">Convenience:</span> ScrapCycle offers
            businesses a convenient and hassle-free solution for recycling their
            waste materials. With our easy-to-use app, businesses can schedule
            collection services with just a few taps, saving valuable time and
            resources.
          </li>
          <li className="mb-4">
            <span className="font-bold">Profitability:</span> ScrapCycle offers
            businesses a lucrative opportunity to earn additional revenue by
            recycling their waste materials. Through our transparent pricing
            structure and competitive rates, businesses can maximize their
            earnings from the sale of recyclable materials. Contact us for
            business pricing information.
          </li>
          <li className="mb-4">
            <span className="font-bold">Cost Savings:</span> In addition to
            generating revenue, ScrapCycle helps businesses save on waste
            disposal costs. By diverting recyclable materials from landfills,
            businesses can reduce their waste management expenses and improve
            their bottom line.
          </li>
          <li className="mb-4">
            <span className="font-bold">Environmental Impact:</span> ScrapCycle
            Business Collections enables businesses to make a significant
            environmental impact by diverting recyclable materials from
            landfills and reducing their carbon footprint. By choosing
            ScrapCycle, businesses can demonstrate their commitment to
            sustainability and contribute to a cleaner, greener future.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-7 mt-10">
          Benefits of ScrapCycle Business Collections:
        </h2>
        <ol className="list-decimal ml-10">
          <li className="mb-4">
            <span className="font-bold">Increased Revenue:</span> With
            ScrapCycle, businesses can turn their waste materials into a new
            revenue stream. By selling their recyclable materials through
            ScrapCycle, businesses can unlock additional income opportunities
            and boost their profitability.
          </li>
          <li className="mb-4">
            <span className="font-bold">Environmental Stewardship:</span> By
            recycling their waste materials, businesses can reduce the
            environmental impact of their operations and help conserve natural
            resources. ScrapCycle's commitment to sustainability ensures that
            businesses can make a meaningful contribution to environmental
            conservation.
          </li>
          <li className="mb-4">
            <span className="font-bold">Brand Reputation:</span> Businesses that
            partner with ScrapCycle can enhance their brand reputation as
            environmentally responsible organizations. By promoting their
            recycling efforts, businesses can attract environmentally conscious
            customers and stakeholders and differentiate themselves in the
            marketplace.
          </li>
          <li className="mb-4">
            <span className="font-bold">Regulatory Compliance:</span> ScrapCycle
            helps businesses ensure compliance with environmental regulations
            and waste management requirements. By partnering with ScrapCycle,
            businesses can rest assured that their waste materials are being
            handled and disposed of in compliance with all applicable laws and
            regulations.
          </li>
        </ol>

        <p className="mt-10">
          In summary, ScrapCycle Business Collections offers businesses a
          win-win solution for maximizing their earnings and environmental
          impact. By recycling their waste materials through ScrapCycle,
          businesses can generate revenue, reduce costs, and demonstrate their
          commitment to sustainability—all while making a positive difference
          for the planet.
        </p>
      </div>
    </div>
  );
}
