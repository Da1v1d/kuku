import { Switch as NextSwitch, SwitchProps } from "@nextui-org/react";

interface IProps extends SwitchProps {}

const Switch = (props: IProps) => {
  return <NextSwitch color="primary" {...props} />;
};

export default Switch;
