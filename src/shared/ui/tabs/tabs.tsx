import { Tab as NextTab, Tabs as NextTabs, TabsProps } from "@nextui-org/react";

type IProps<T extends object> = TabsProps<T>;

export const Tabs = <T extends object>(props: IProps<T>) => {
  return <NextTabs color="primary" variant="light" {...props} />;
};

export const Tab = NextTab;

