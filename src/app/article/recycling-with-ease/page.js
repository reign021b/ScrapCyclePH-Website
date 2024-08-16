import Image from "next/image";

export default function RecyclingWithEase() {
  return (
    <div className="px-5 flex flex-col items-center justify-between max-w-5xl container mx-auto pt-10 lg:pt-20 pb-8">
      {/* title and description */}
      <h3 className="text-lg text-slate-500">Article</h3>
      <h1 className="text-2xl md:text-4xl font-semibold mt-2 w-full text-center pb-10 leading-relaxed lg:px-12">
        Recycling with Ease: Dispose of E-Waste Properly with ScrapCycle
      </h1>

      {/* header */}
      <div className="relative w-full h-[200px] md:h-[350px] lg:h-[500px] rounded-3xl overflow-clip flex items-center justify-center">
        <Image
          src="https://alfljqjdwlomzepvepun.supabase.co/storage/v1/object/public/article/recycling-with-ease.png"
          fill
          style={{ objectFit: "cover" }}
          alt="ScrapCycle App Phones"
        />
      </div>

      {/* article */}
      <div className="lg:p-8 bg-white rounded-lg lg:mx-26 pt-12">
        <div className="mb-12">
          In our tech-driven world, we constantly use electronic devices such as
          phones, laptops, tablets, air conditioners, old appliances, and
          televisions. But what happens when these gadgets and appliances become
          outdated or stop working? They turn into electronic waste, or e-waste,
          which can be harmful if not disposed of correctly. Here's a simple
          guide on how to responsibly dispose of your e-waste using ScrapCycle.
          <br />
          <br />
          <br />
          <h2 className="text-2xl font-semibold mb-3">
            Why E-Waste is a Big Deal
          </h2>
          E-waste contains dangerous materials like lead and mercury that can
          pollute our environment if not handled properly. These toxic
          substances can harm the soil, water, and air, putting our health and
          wildlife at risk. On the flip side, e-waste also contains valuable
          materials such as gold and copper that can be recycled and reused,
          reducing the need to mine new resources.
          <br />
          <br />
          <br />
          <h3 className="text-center text-3xl font-semibold mb-3">
            How to Dispose of E-Waste with ScrapCycle
          </h3>
          <br />
          <h3 className="text-xl font-semibold my-3">
            1. Donate or Sell Working Devices
          </h3>
          <div className="pl-5">
            Before getting rid of your electronics, check if they still work. If
            they do, consider donating or selling them. This extends the
            device's life and reduces waste. For non-working items, ScrapCycle
            provides an easy and eco-friendly solution.
          </div>
          <br />
          <h3 className="text-xl font-semibold mb-3">
            2. Schedule a Pickup with ScrapCycle
          </h3>
          <div className="pl-5">
            If your device is broken or no longer useful, ScrapCycle makes
            disposal easy. Simply schedule a pickup through our app or website,
            and we'll come to collect your e-waste directly from your doorstep.
            We collaborate with certified junkshops to ensure your electronics
            are processed safely.
          </div>
          <br />
          <h3 className="text-xl font-semibold mb-3">
            3. Erase Your Personal Data
          </h3>
          <div className="pl-5">
            Before handing over any device, make sure to delete all your
            personal information. This step is crucial to protect your privacy
            and prevent any potential data breaches. ScrapCycle offers tips on
            how to securely erase data from your devices.
          </div>
          <br />
          <h3 className="text-xl font-semibold mb-3">
            4. Track Your Environmental Impact
          </h3>
          <div className="pl-5">
            The ScrapCycle app allows you to monitor the amount of e-waste
            you've diverted from landfills. By tracking your contributions, you
            can see the tangible impact of your recycling efforts and understand
            the positive effect your actions have on managing e-waste.
          </div>
          <br />
          <h3 className="text-xl font-semibold mb-3">
            5. Learn About Recycling Benefits Through ScrapCycle
          </h3>
          <div className="pl-5">
            ScrapCycle also provides educational resources to help you
            understand the importance of e-waste recycling. By using our
            platform, you're not only disposing of your e-waste but also
            learning how your actions contribute to a cleaner and more
            sustainable environment.
          </div>
          <br />
          <h3 className="text-xl font-semibold mb-3">
            6. Earn Money for Recycling
          </h3>
          <div className="pl-5">
            With ScrapCycle, you can earn money for every piece of e-waste you
            sell. Whether it's an old phone, laptop, air conditioner, or any
            other electronic device, ScrapCycle ensures that you get paid for
            your contributions to recycling. This way, you're not only helping
            the environment but also making some extra cash from your e-waste.
          </div>
          <br />
          <br />
          <h3 className="text-2xl font-semibold mb-3">
            The Role of ScrapCycle
          </h3>
          ScrapCycle partners with certified junkshops that follow strict
          guidelines for handling e-waste. We ensure that harmful materials are
          safely removed and valuable resources are recovered and reused. By
          using ScrapCycle, you're helping to protect the environment and
          support recycling efforts.
          <br />
          <br />
          <h3 className="text-2xl font-semibold mb-3">
            Why Recycling E-Waste Matters
          </h3>
          Recycling e-waste with ScrapCycle helps prevent environmental
          pollution, conserves resources, and reduces the need for new
          materials. Additionally, it supports the local recycling industry,
          creating jobs and boosting the economy.
          <br />
          <br />
          <div className="">
            By choosing ScrapCycle for your e-waste disposal needs, you're
            making a positive impact on the environment and contributing to a
            more sustainable future.
          </div>
        </div>
      </div>
    </div>
  );
}
