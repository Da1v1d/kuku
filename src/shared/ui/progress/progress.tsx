import { Progress as HeroProgress, ProgressProps } from "@heroui/react";

interface IProps extends ProgressProps {}

const Progress = (props: IProps) => {
  return <HeroProgress color="primary" {...props} />;
};

export default Progress;
