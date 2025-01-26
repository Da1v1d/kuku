import { Slider as HeroSlider, SliderProps } from "@heroui/react";

interface IProps extends SliderProps {}

const Slider = (props: IProps) => {
  return <HeroSlider color="primary" {...props} />;
};

export default Slider;
