"use client";

import {
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  cn,
  Card as NexCard,
} from "@heroui/react";

interface IProps extends CardProps {
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  headerProps?: CardProps;
  footerProps?: CardProps;
}

const Card = ({
  children,
  headerContent,
  footerContent,
  headerProps,
  footerProps,
  className,
  ...props
}: IProps) => {
  const showHeader = !!headerContent;
  const showFooter = !!footerContent;

  return (
    <NexCard className={cn("p-2", className)} {...props}>
      {showHeader && <CardHeader {...headerProps}>{headerContent}</CardHeader>}
      <CardBody>{children}</CardBody>
      {showFooter && <CardFooter {...footerProps}>{footerContent}</CardFooter>}
    </NexCard>
  );
};

export default Card;
