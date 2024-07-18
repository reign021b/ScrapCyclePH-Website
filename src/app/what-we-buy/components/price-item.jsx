import Image from "next/image";

const PriceItem = ({ imgUrl, name, price }) => {
  return (
    <div className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-col">
      <div className="relative w-full h-36 rounded-3xl overflow-clip">
        <Image
          src={imgUrl}
          fill
          style={{ objectFit: "contain" }}
          alt="ScrapCycle App Phone"
        />
      </div>
      <h4 className="mt-3 font-semibold text-center">{name}</h4>
      <p className="text-center">₱ {price}</p>
    </div>
  );
};

export default PriceItem;
