import { Skeleton as NextSkeleton, SkeletonProps } from "@heroui/react";

interface IProps extends SkeletonProps {}

const Skeleton = (props: IProps) => {
  return <NextSkeleton {...props} />;
};

export default Skeleton;
