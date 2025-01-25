import { ImageProps, Image as NextImage } from "@heroui/react";

interface IProps extends ImageProps {}

const Image = (props: IProps) => {
  return <NextImage {...props} />;
};

export default Image;
