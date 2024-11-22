import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "../../components/RenderModel";
import Hat from "@/app/components/models/Hat";
import AboutDetails from "@/app/components/about";

export default function About() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50" />

      <div className="w-full h-3/5 xs:h-5/6 sm:h-screen absolute sm:top-1/2 xs:top-80 top-52 -translate-y-1/2 left-0 z-10">
        <RenderModel preset="park">
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center z-30">
        <div className="absolute flex flex-col items-center text-center top-[45%] sm:top-[55%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            AdrianCubillos
          </h1>
          <p className="w-full font-bold text-foreground xs:text-lg sm:text-xl  lg:text-2xl">
            Meet the Hero behind behind this porfolio.
          </p>
        </div>

      </div>

      <AboutDetails />

    </>
  );
}
