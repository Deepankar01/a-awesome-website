import { useState } from "react";
import HeroImage1 from "../../assets/hero-images/1.jpg";

const HeroTitle = ({
  titles,
  activeIndex,
}: {
  titles: string[];
  activeIndex: number;
}) => (
  <div className="">
    {titles.map((title, index) => {
      const titleColor =
        activeIndex === index ? "text-primary-blue" : "text-monochrome-999";
      return (
        <span className={`font-recoleta font-normal text-[80px] ${titleColor} pl-1 pr-1`}>
          {title}
        </span>
      );
    })}
  </div>
);
const Subtitle = ({ subtitle }: { subtitle: string }) => (
  <div className="font-avenir font-medium text-[20px] text-monochrome-test">
    {subtitle}
  </div>
);

// https://stackoverflow.com/questions/63299092/change-the-colour-of-text-that-overlaps-an-image
const HeroSlider = () => {
  const [activeIndex] = useState(0);
  return (
    <div className="flex items-center bg-monochrome-light w-screen h-screen pl-[15%] pr-[20%]">
      <div className="grid grid-flow-col grid-cols-[80%_auto] place-items-stretch">
        <div className="pt-[2%] z-0">
          <HeroTitle
            activeIndex={activeIndex}
            titles={[
              "Artist.",
              "Digital Craftsman.",
              "User Experience Designer.",
              "& More"
            ]}
          />
          <Subtitle subtitle="I'm Akshay, an ordinary designer from India who creates engaging interfaces and functional experiences that make people’s lives simple." />
        </div>
        <div className="h-[100%] z-1 ml-[-70%]">
          <img src={HeroImage1} className="h-[100%] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
