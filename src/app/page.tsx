import Appbar from "@/components/Appbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full relative">
      <div className="flex justify-center">
        <Appbar />
      </div>
      <div className="mt-36 max-sm:mt-24 gap-8 max-sm:gap-6 flex flex-col items-center min-h-[58vh]">
        <Hero />
      </div>
    </div>
  );
}
