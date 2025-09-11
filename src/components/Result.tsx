import { IoMdCopy } from "react-icons/io";
import TypeWriter from "./TypeWriter";
import useResult from "@/hooks/useResult";
import { FaWandMagicSparkles } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShinyButton } from "./ui/shiny-button";

export default function Result({
  improvePrompt,
  isImprovingField,
  setImprovePrompt,
  handleRegenerate,
  copyToClipboard,
}: any) {
  const { result } = useResult();
  return (
    <section
      className={`flex flex-col gap-2 w-[60vw] max-sm:w-full bg-transparent border-none shadow-none mt-6 py-3 ${
        result ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end gap-2 relative">
        <input
          type="text"
          onChange={(e) => setImprovePrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRegenerate();
            }
          }}
          value={improvePrompt}
          placeholder="Follow Up"
          className={`dark:text-white bg-transparent text-xs w-0 py-0 transition-all duration-300 ${
            isImprovingField
              ? "w-[35vw] max-sm:w-full px-2 border border-gray-400/50 dark:border-white/20"
              : "w-0"
          } rounded-lg bg-opacity-10 backdrop-blur-lg dark:focus:outline-none dark:focus:border-white/20`}
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ShinyButton
                onClick={handleRegenerate}
                className="p-2 max-sm:p-2"
              >
                <FaWandMagicSparkles className="hover:scale-110" />
              </ShinyButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow up</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <button
          onClick={copyToClipboard}
          className="bg-transparent rounded-lg before:bg-opacity-5 backdrop-blur-lg border border-gray-400/50 dark:border-white/20 dark:text-white p-2 max-sm:p-1 max-sm:px-1.5 hover:bg-white/10 transition-all duration-300"
        >
          <IoMdCopy className="w-3 h-3" />
        </button>
      </div>

      <div className="w-full mt-2">
        <TypeWriter text={result} speed={30} />
      </div>
    </section>
  );
}
