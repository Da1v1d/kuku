import { Skeleton as NextSkeleton, SkeletonProps } from "@nextui-org/react";

interface IProps extends SkeletonProps {}

const Skeleton = (props: IProps) => {
  return <NextSkeleton {...props} />;
};

export default Skeleton;
