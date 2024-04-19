import Image from "next/image";
import { useRouter } from "next/router";

interface Portfolio {
  fields: {
    title: string;
    heading: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    slug: string;
    tag: string[];
    date: string;
  };
}

// const PortfolioCard = ({ portfolio }) => {
const PortfolioCard: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const { title, heading, description, image, slug, tag, date } =
    portfolio.fields;

  const router = useRouter();

  const handleClick = () => {
    router.push("projects/" + slug);
  };

  return (
    <div
      className="group w-fill h-fill backdrop-blur-sm bg-[#D4D0D0]/20 rounded-xl outline-white outline-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="opacity-80">
        <div className="group">
          <Image
            src={image.fields.file.url}
            width={1500}
            height={1500}
            className="w-full object-contain h-auto rounded-xl transition-all duration-300 ease-in-out"
            alt="Picture of the project"
          />
        </div>

        <div className="flex flex-col px-[28px] py-[24px] overflow-hidden w-full space-y-1">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 opacity-100">
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
          <h1 className="text-xl text-white font-bold opacity-100">{title}</h1>
          {/* <div className="flex justify-between opacity-100"> */}
          <h3 className="text-[#C19C63] font-medium text-xs md:text-sm">
            {heading}
          </h3>
          {/* <p className="text-[#C19C63] font-medium text-xs md:text-sm">
              {date}
            </p> */}
          {/* </div> */}
          <div className="h-[90px] overflow-scroll opacity-100">
            <p className="text-[#B1B0B0] font-medium text-xs text-justify opacity-100">
              {description}
            </p>
          </div>
          <div className="w-fit">
            <a className="relative font-medium after:content-[''] after:bg-[#C19C63] after:h-[3px] after:left-0 after:w-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 group-hover:after:w-full">
              See more {"\u2192"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
