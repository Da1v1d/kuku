import { InputOtpProps, InputOtp as NextInputOtp } from "@heroui/react";

interface IProps extends Omit<InputOtpProps, "length"> {
  length?: number;
}

const InputOtp = (props: IProps) => {
  return (
    <NextInputOtp
      // @ts-ignore-next-line
      length={4}
      {...props}
    />
  );
};

export default InputOtp;
