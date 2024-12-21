import { Button } from "@/shared/ui/buttons";
import IconButton from "@/shared/ui/buttons/icon-button";
import { ComponentProps, MouseEvent, MouseEventHandler, useState } from "react";

interface IProps
  extends Omit<
    ComponentProps<typeof Button>,
    "children" | "onClick" | "isIconOnly"
  > {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;

  initialActive?: boolean;
  isIcon?: boolean;
  children?: (props: {
    isActive?: boolean;
  }) => React.ReactNode | React.ReactNode;
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

  const clickHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
    setIsActive((prev) => !prev);

    try {
      await onClick?.(event);
    } catch {
      setIsActive(false);
    }
  };

  return (
    <Component onClick={clickHandler} {...props}>
      {typeof children === "function"
        ? children({
            isActive,
          })
        : children}
    </Component>
  );
};

export default OptimisticButton;
