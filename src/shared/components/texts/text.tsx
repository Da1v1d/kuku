interface IProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

const Text = ({ as: TextComponent = "p", className, ...rest }: IProps) => {
  return <TextComponent className={className} {...rest} />;
};

export default Text;
