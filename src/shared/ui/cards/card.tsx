"use client";

import { cn } from "@/shared/lib/utils";
import {
  CardBody,
  CardFooter,
  CardFooterProps,
  CardHeader,
  CardProps,
  Card as NexCard,
} from "@heroui/react";

interface IProps extends CardProps {
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  headerProps?: CardProps;
  footerProps?: CardFooterProps;
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
