import { Tooltip as NextTooltip, TooltipProps } from "@heroui/react";

interface IProps extends TooltipProps {}

const Tooltip = (props: IProps) => {
  return <NextTooltip {...props} />;
};

export default Tooltip;
