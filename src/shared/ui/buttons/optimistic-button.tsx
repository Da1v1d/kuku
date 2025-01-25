import { TODO } from "@/shared/lib/types";
import { Button } from "@/shared/ui/buttons";
import IconButton from "@/shared/ui/buttons/icon-button";
import { ComponentProps, MouseEvent, useState } from "react";

interface IProps
  extends Omit<
    ComponentProps<typeof Button>,
    "children" | "onPress" | "isIconOnly"
  > {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  initialActive?: boolean;
  isIcon?: boolean;
  children?: (isActive?: boolean) => React.ReactNode | React.ReactNode;
}

const OptimisticButton = ({
  onClick,
  initialActive = false,
  children,
  isIcon,
  ...props
}: IProps) => {
  const [isActive, setIsActive] = useState(initialActive);

  const Component = isIcon ? IconButton : Button;

  const clickHandler = async (event: TODO) => {
    setIsActive((prev) => !prev);

    try {
      await onClick?.(event);
    } catch {
      setIsActive(false);
    }
  };

  return (
    <Component onPress={clickHandler} {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </Component>
  );
};

export default OptimisticButton;
