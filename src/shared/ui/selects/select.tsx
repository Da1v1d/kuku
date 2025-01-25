"use client";

import {
  Select as NextSelect,
  SelectItem as NextSelectItem,
  SelectItemProps,
  SelectProps,
} from "@heroui/react";
import { ReactElement } from "react";

type Props<T extends object> = SelectProps<T>;
type ItemProps<T extends object> = SelectItemProps<T>;

export const Select = <T extends object>(props: Props<T>): ReactElement => {
  return <NextSelect<T> labelPlacement="outside" {...props} />;
};

// export const SelectItem = <T extends object>(props: ItemProps<T>) => {
//   return <NextSelectItem<T> {...props} />;
// };

export const SelectItem = NextSelectItem;
