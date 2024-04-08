import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ portfolio }) => {
  const { title, heading, description, image, slug, tag, date } =
    portfolio.fields;

  return (
    <div className="w-fill h-fill bg-[#1D1C1B] rounded-xl">
      <Image
        src={image.fields.file.url}
        width={1500}
        height={1500}
        className="relative w-full object-contain h-auto rounded-xl"
        alt="Picture of the project"
      />
      <div className="flex flex-col px-[28px] my-[24px] overflow-hidden w-full space-y-1">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {tag.map((tag) => (
              <p
                className="text-[#0B0B0B] font-medium text-[10px] bg-[#C19C63] px-[8px] py-[4px] rounded-lg"
                key={tag}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <h1 className="text-xl text-white font-bold">{title}</h1>
        <div className="flex justify-between">
          <h3 className="text-[#C19C63] font-medium text-sm">{heading}</h3>
          <p className="text-[#C19C63] font-medium text-xs">{date}</p>
        </div>
        <div className="h-[90px] overflow-scroll">
          <p className="text-[#B1B0B0] font-medium text-xs text-justify">
            {description}
          </p>
        </div>
      </div>
      <Link href={"/projects/" + slug}> test link </Link>
    </div>
  );
};

export default PortfolioCard;
