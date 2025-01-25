import { cn } from "@heroui/theme";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Flex = ({ className, ...props }: IProps) => {
  return <div className={cn(className, "flex")} {...props} />;
};

export default Flex;
