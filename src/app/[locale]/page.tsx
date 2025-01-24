"use client";

import { wait } from "@/shared/lib/utils";
import ThemeSwitcher from "@/shared/ui/@core/theme-switch";
import { Button, OptimisticButton } from "@/shared/ui/buttons";
import { Card } from "@/shared/ui/cards";
import HeartIcon from "@/shared/ui/icons/heart-icon";
import { Image } from "@/shared/ui/images";
import { Input, InputOtp } from "@/shared/ui/inputs";
import { Flex } from "@/shared/ui/layout";
import { Modal } from "@/shared/ui/modals";
import { Select, SelectItem } from "@/shared/ui/selects";
import { Skeleton } from "@/shared/ui/skeleton";
import { Switch } from "@/shared/ui/switch";
import { Tab, Tabs } from "@/shared/ui/tabs";
import Text from "@/shared/ui/texts/text";
import Tooltip from "@/shared/ui/tooltip/tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";
// import { Select, SelectItem } from "@nextui-org/react";

const options = [{ label: "Option 1", key: "1" }];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const t = useTranslations();

  const onClick = async () => {
    await wait(1000);
    throw new Error("Test error");
  };

  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Text className="text-4xl font-extrabold text-primary drop-shadow-primary">
        Kuku
      </Text>
      <Flex className="flex-row flex-wrap gap-8 justify-between">
        {[...Array(10)].map((_, index) => (
          <Skeleton
            className="rounded-2xl w-[400px] h-[300px]"
            key={index}
            isLoaded={!isLoading}
          >
            <Image
              onLoad={() => setIsLoading(false)}
              isLoading={isLoading}
              className="cursor-pointer"
              key={index}
              isZoomed
              src={`https://picsum.photos/400/300?random=${index}`}
            />
          </Skeleton>
        ))}
      </Flex>
      <Input label="Input" placeholder="Input" />
      <InputOtp />
      <Card isHoverable isPressable headerContent={<div></div>}>
        <div className="w-full h-full">
          <h1 className="text-2xl font-semibold">{t("general.welcome")}</h1>
        </div>
      </Card>
      <div className="w-full">
        
        <Tabs className="w-full" items={tabs}>
          {(item) => (
            <Tab
              className="data-[focus-visible=true]:outline-0"
              key={item.id}
              title={item.label}
            >
              <Card>{item.content}</Card>
            </Tab>
          )}
        </Tabs>
      </div>

      <ThemeSwitcher />
      <Tooltip delay={100} content="Tooltip">
        Tooltip
      </Tooltip>
      <Switch />
      <OptimisticButton isIcon onClick={onClick}>
        {({ isActive }) => (
          <HeartIcon fill={isActive ? "red" : "transparent"} />
        )}
      </OptimisticButton>
      <Select
        classNames={{
          base: "w-full max-w-[400px]",
        }}
        items={options}
        label="Select an option"
        placeholder="Choose one"
      >
        {(item) => (
          <SelectItem key={item.key} value={item.key}>
            {item.label}
          </SelectItem>
        )}
      </Select>
      <Button>ok</Button>
      <Modal
        isOpen={false}
        classNames={{
          backdrop: "bg-black/50",
        }}
      >
        <div className="w-12 h-12"></div>
      </Modal>
    </div>
  );
}
