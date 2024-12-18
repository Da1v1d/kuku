import { Button } from "@/shared/components/buttons";
import IconButton from "@/shared/components/buttons/icon-button";
import { ComponentProps, MouseEvent, MouseEventHandler, useState } from "react";

interface IProps
  extends Omit<
    ComponentProps<typeof Button>,
    "children" | "onClick" | "isIconOnly"
  > {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;

  initialActive?: boolean;
  activeComponent?: React.ReactNode;
  inactiveComponent?: React.ReactNode;
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
  const [active, setActive] = useState(initialActive);

  const Component = isIcon ? IconButton : Button;

  const clickHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
    setActive((prev) => !prev);

    try {
      await onClick?.(event);
    } catch {
      setActive(false);
    }
  };

  return (
    <Component onClick={clickHandler} {...props}>
      {typeof children === "function"
        ? children({
            isActive: active,
          })
        : children}
    </Component>
  );
};

export default OptimisticButton;
