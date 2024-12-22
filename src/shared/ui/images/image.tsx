import { ImageProps, Image as NextImage } from "@nextui-org/react";

interface IProps extends ImageProps {}

const Image = (props: IProps) => {
  return <NextImage {...props} />;
};

export default Image;
