"use client";

import {
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  cn,
  Card as NexCard,
} from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface ExtendedCardProps extends PropsWithChildren<CardProps> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  headerProps?: CardProps;
  footerProps?: CardProps;
}

const Card = ({
  children,
  header,
  footer,
  headerProps,
  footerProps,
  className,
  ...props
}: ExtendedCardProps) => {
  const showHeader = !!header;
  const showFooter = !!footer;

  return (
    <NexCard className={cn("p-2", className)} {...props}>
      {showHeader && <CardHeader {...headerProps}>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
      {showFooter && <CardFooter {...footerProps}>{footer}</CardFooter>}
    </NexCard>
  );
};

export default Card;
