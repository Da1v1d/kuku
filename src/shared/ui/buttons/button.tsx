import { ButtonProps, cn, Button as NextButton } from "@nextui-org/react";

interface IProps extends ButtonProps {}

const Button = ({ children, className, ...props }: IProps) => {
  return (
    <NextButton
      className={cn("font-semibold uppercase", className)}
      color="primary"
      variant="shadow"
      {...props}
    >
      {children}
    </NextButton>
  );
};

export default Button;
