"use client";

import {
  Accordion as NextAccordion,
  AccordionItem as NextAccordionItem,
  type AccordionProps,
} from "@heroui/react";

const Accordion = (props: AccordionProps) => {
  return <NextAccordion {...props} />;
};

const Item = NextAccordionItem;

export default { Root: Accordion, Item };
