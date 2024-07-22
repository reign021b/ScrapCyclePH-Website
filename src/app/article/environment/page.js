import Image from "next/image";

export default function Environment() {
  return (
    <div className="px-5 flex flex-col items-center justify-between max-w-5xl container mx-auto pt-10 lg:pt-20 pb-8">
      {/* title and description */}
      <h3 className="text-lg text-slate-500">Environment</h3>
      <h1 className="text-2xl md:text-4xl font-semibold mt-2 w-full text-center pb-10 leading-relaxed lg:px-12">
        ScrapCycle: Revolutionizing Waste Management for a Greener Future
      </h1>

      {/* header */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-clip flex items-center justify-center">
        <Image
          src="/articles/environment.png"
          fill
          style={{ objectFit: "cover" }}
          alt="ScrapCycle App Phones"
        />
      </div>

      {/* article */}
      <div className="lg:p-8 bg-white rounded-lg lg:mx-36 pt-12">
        <p className="mb-12">
          In today's fast-paced world, the issue of waste management has become
          increasingly critical. With landfills overflowing and environmental
          degradation on the rise, innovative solutions are urgently needed to
          address this pressing challenge. Enter ScrapCycle—a groundbreaking
          initiative that is revolutionizing waste management practices and
          paving the way for a greener, more sustainable future.
          <br />
          <br />
          <br />
          At its core, ScrapCycle is more than just a recycling app—it's a
          catalyst for change. By leveraging technology and harnessing the power
          of community engagement, ScrapCycle is transforming the way we think
          about waste. Through its user-friendly platform, ScrapCycle makes
          recycling accessible to everyone, offering a convenient and efficient
          solution for disposing of recyclable materials.
          <br />
          <br />
          <br />
          One of the key features of ScrapCycle is its commitment to
          transparency and fairness. Users can easily book collection schedules
          through the app, knowing that they will receive fair compensation for
          their recyclables. By providing real-time pricing information and
          clear guidelines, ScrapCycle ensures that users are empowered to make
          informed decisions about their recycling efforts.
          <br />
          <br />
          <br />
          But ScrapCycle's impact extends far beyond just recycling. By
          diverting recyclable materials from landfills, ScrapCycle helps reduce
          greenhouse gas emissions and alleviate the burden on our planet's
          finite resources. Additionally, by promoting recycling and
          environmental awareness, ScrapCycle is fostering a culture of
          sustainability that will benefit future generations.
          <br />
          <br />
          <br />
          Furthermore, ScrapCycle is actively engaged in community outreach and
          collaboration. By partnering with local governments, businesses, and
          community organizations, ScrapCycle is able to amplify its impact and
          reach more people than ever before. Through initiatives such as
          educational workshops, clean-up drives, and environmental advocacy
          campaigns, ScrapCycle is building a movement for positive change.{" "}
          <br />
          <br />
          <br />
          In conclusion, ScrapCycle is not just a recycling app—it's a force for
          good in the fight against waste and environmental degradation. With
          its innovative approach to waste management and unwavering commitment
          to sustainability, ScrapCycle is leading the way towards a cleaner,
          greener future for all. Join the ScrapCycle movement today and be part
          of the solution!
        </p>
      </div>
    </div>
  );
}
