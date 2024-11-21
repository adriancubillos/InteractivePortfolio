import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "../../components/RenderModel";
import Hat from "@/app/components/models/Hat";
import AboutDetails from "@/app/components/about";




export default function About() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50" />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel preset="park">
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center z-30">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold xs:text-xl sm:text-2xl lg:text-4xl text-accent">
            Hello there, I&apos;m Edgar Adrian Cubillos
          </h1>
          <p className="font-bold text-foreground xs:text-lg sm:text-xl  lg:text-2xl">
            Welcome to my enchanted woods, where imagination meets execution.
          </p>
        </div>

      </div>

      <AboutDetails />

    </>
  );
}
