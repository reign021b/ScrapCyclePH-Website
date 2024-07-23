import Image from "next/image";

export default function Residential() {
  return (
    <div className="px-5 flex flex-col items-center justify-between max-w-5xl container mx-auto pt-20 pb-8">
      {/* title and description */}
      <h3 className="text-lg text-slate-500">Residential</h3>
      <h1 className="text-2xl md:text-4xl font-semibold md:mt-2 w-full text-center md:pb-10 leading-relaxed md:px-12">
        Embrace Easy Recycling: Why ScrapCycle is Your Ultimate Solution
      </h1>

      {/* header */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-clip flex items-center justify-center">
        <Image
          src="/services/residential.png"
          fill
          style={{ objectFit: "cover" }}
          alt="ScrapCycle App Phones"
        />
      </div>

      {/* article */}
      <div className="p-8 bg-white rounded-lg md:mx-36 pt-12">
        <p className="mb-7">
          Hey there! Are you tired of the hassle of traditional recycling
          methods? I get it – sorting through bins, hauling heavy bags to
          recycling centers, and never quite knowing if you're doing it right.
          But what if I told you there's a better way? Let me introduce you to
          ScrapCycle – your new recycling hero.
        </p>

        <p className="mb-7">
          Picture this: no more trips to the recycling center, no more confusion
          about what goes where, and best of all, no more waste sitting around
          cluttering your space. With ScrapCycle, recycling becomes as easy as
          ordering takeout.{" "}
          <span className="font-semibold">
            Just open the app, schedule a pickup, and voila – your recyclables
            are whisked away, hassle-free, from your doorstep.
          </span>
        </p>

        <div className="w-full h-[400px] relative mb-12">
          <Image
            src="/services/residential-phone-screens.png"
            fill
            style={{ objectFit: "cover" }}
            alt="ScrapCycle App Phones"
          />
        </div>

        <p className="mb-7">
          But convenience is just the beginning. ScrapCycle puts you in control,
          giving you full transparency on pricing so you know exactly what
          you're earning for your efforts. And let me tell you, the rewards can
          be pretty sweet. Earn cash for every item you recycle – from old
          newspapers to plastic bottles to aluminum cans.{" "}
          <span className="font-semibold">
            It's like getting paid to declutter!
          </span>
        </p>

        <p className="mb-7">
          Now, I know what you're thinking – is it safe? Absolutely. ScrapCycle
          takes your safety seriously, with vetted collection teams and
          contactless options to put your mind at ease. Plus, you'll feel good
          knowing that every item you recycle with ScrapCycle is making a real
          difference for the environment. Say goodbye to landfill waste and
          hello to a greener, cleaner planet.
        </p>

        <p>
          So, what are you waiting for? Join the recycling revolution with
          ScrapCycle and discover just how easy and rewarding recycling can be.
          Trust me, once you try it, you'll never look back.
        </p>
      </div>
    </div>
  );
}
