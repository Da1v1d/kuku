import { Switch as NextSwitch, SwitchProps } from "@heroui/react";

interface IProps extends SwitchProps {}

const Switch = (props: IProps) => {
  return (
    <NextSwitch aria-label="Automatic updates" color="primary" {...props} />
  );
};

export default Switch;
