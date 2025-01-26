// import { Slider } from "@/shared/ui/sliders"
import Slider from "@/shared/ui/sliders/slider";
import { Text } from "@/shared/ui/texts";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<typeof Slider> {
  duration?: number;
  progress?: number;
}

const AudioSlider = ({ duration, progress, ...props }: IProps) => {
  const hasDuration = duration !== undefined && !!progress !== undefined;

  return (
    <Slider
      classNames={{
        base: "w-full group ",
        track:
          "w-full h-[2px] group-hover:h-[4px] transition-height ease-in-out",
        thumb:
          "bg-primary invisible group-hover:visible bg-primary after:hidden w-4 h-4 bg-white",
        // filler: "bg-gradient-to-r from-red-400  to-blue-400",
      }}
      minValue={0}
      size="sm"
      endContent={
        hasDuration && (
          <Text className="text-xs text-gray-400 font-semibold">{`${progress}/${duration}`}</Text>
        )
      }
      {...props}
    />
  );
};

export default AudioSlider;
