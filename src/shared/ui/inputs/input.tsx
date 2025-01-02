import { InputProps, Input as NextInput } from "@nextui-org/react";

interface IProps extends InputProps {}

const Input = (props: IProps) => {
  return <NextInput labelPlacement='outside' {...props} />;
};

export default Input;
