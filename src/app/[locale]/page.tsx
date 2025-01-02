"use client";

import { wait } from "@/shared/lib/utils";
import ThemeSwitcher from "@/shared/ui/@core/theme-switch";
import Accordion from "@/shared/ui/accordion/accordion";
import { Button, OptimisticButton } from "@/shared/ui/buttons";
import { Card } from "@/shared/ui/cards";
import HeartIcon from "@/shared/ui/icons/heart-icon";
import { Image } from "@/shared/ui/images";
import { Input, InputOtp } from "@/shared/ui/inputs";
import { Flex } from "@/shared/ui/layout";
import { Modal } from "@/shared/ui/modals";
import { Select, SelectItem } from "@/shared/ui/selects";
import { Switch } from "@/shared/ui/switch";
import Text from "@/shared/ui/texts/text";
import Tooltip from "@/shared/ui/tooltip/tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";
// import { Select, SelectItem } from "@nextui-org/react";

const options = [{ label: "Option 1", key: "1" }];

export default function Home() {
  const [open, setOpen] = useState(false);

  const t = useTranslations();

  const onClick = async () => {
    await wait(1000);
    throw new Error("Test error");
  };

  return (
    <div className="flex flex-col items-center justify-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Text className="text-4xl font-extrabold text-primary drop-shadow-primary">
        Kuku
      </Text>
      <Accordion.Root items={[1, 2, 3]} variant="splitted">
        <Accordion.Item title="Item 1" subtitle="Subtitle 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, non?
          Hic unde mollitia expedita dolorem suscipit sequi sit similique nulla
          aliquid, minus laboriosam autem quas provident quidem perferendis eius
          magni. Aliquam dignissimos illum rem ad autem sapiente vitae magnam
          neque! Veniam hic suscipit voluptates eveniet perferendis cumque
          adipisci sunt iste. Eum tempora esse minima consequuntur! Cumque
          numquam vitae dignissimos perferendis? Quibusdam quae laborum
          provident nesciunt sit dolorum maiores necessitatibus neque. Non
        </Accordion.Item>
        <Accordion.Item title="Item 1" subtitle="Subtitle 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, non?
          Hic unde mollitia expedita dolorem suscipit sequi sit similique nulla
          aliquid, minus laboriosam autem quas provident quidem perferendis eius
          magni. Aliquam dignissimos illum rem ad autem sapiente vitae magnam
          neque! Veniam hic suscipit voluptates eveniet perferendis cumque
          adipisci sunt iste. Eum tempora esse minima consequuntur! Cumque
        </Accordion.Item>
      </Accordion.Root>
      <Flex className="flex-row flex-wrap gap-y-8 justify-between">
        {[...Array(10)].map((_, index) => (
          <Image
            className="cursor-pointer"
            key={index}
            isZoomed
            src={`https://picsum.photos/400/300?random=${index}`}
          />
        ))}
      </Flex>
      <Input label="Input" placeholder="Input" />
      <InputOtp />
      <Card isHoverable isPressable headerContent={<div></div>}>
        <div className="w-full h-full">
          <h1 className="text-2xl font-semibold">{t("general.welcome")}</h1>
        </div>
      </Card>
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
