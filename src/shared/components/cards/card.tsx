"use client";

import {
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Card as NexCard,
} from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface ExtendedCardProps extends PropsWithChildren<CardProps> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  headerProps?: CardProps;
  footerProps?: CardProps;
}

const CustomCard = ({
  children,
  header,
  footer,
  headerProps,
  footerProps,
  ...props
}: ExtendedCardProps) => {
  return (
    <NexCard {...props}>
      {!!header && <CardHeader {...headerProps}>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
      {!!footer && <CardFooter {...footerProps}>{footer}</CardFooter>}
    </NexCard>
  );
};

export default CustomCard;
