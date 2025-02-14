import { cn } from "@heroui/theme";
import { ComponentProps } from "react";
import Button from "./button";

interface IProps extends Omit<ComponentProps<typeof Button>, "isIconOnly"> {}

const IconButton = ({ className, ...props }: IProps) => {
  return (
    <Button
      isIconOnly
      variant="solid"
      className={cn("bg-transparent min-w-0 w-fit h-fit", className)}
      {...props}
    />
  );
};

export default IconButton;
