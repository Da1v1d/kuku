import { Heart } from "lucide-react";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<typeof Heart> {}

const HeartIcon = ({ ...props }: IProps) => {
  return <Heart  stroke="red" {...props} />;
};

export default HeartIcon;
