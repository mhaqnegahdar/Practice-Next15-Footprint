// Type
import { BannerProps } from "@/types/props";

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <div className="banner flex h-[50vh] w-full p-4 py-6 sm:p-6 lg:h-[60vh] lg:p-8">
      {/* Title */}
      <div className="relative z-10 rounded-xl bg-cover md:aspect-[2.4/1]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <h1 className="banner__text text-center">{title}</h1>
          <p className="desc text-center">{subtitle}</p>
        </div>

      </div>
      {/* Pattern */}
      <div className="gradient"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      </div>
    </div>
  );
};

export default Banner;
