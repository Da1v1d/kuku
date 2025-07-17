import { Tab as NextTab, Tabs as NextTabs, TabsProps } from "@heroui/react";

type IProps<T extends object> = TabsProps<T>;

export const Tabs = <T extends object>(props: IProps<T>) => {
  return <NextTabs color="primary" {...props} />;
};

export const Tab = NextTab;
