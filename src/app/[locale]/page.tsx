"use client";

import { wait } from "@/shared/lib/utils";
import ThemeSwitcher from "@/shared/ui/@core/theme-switch";
import { Button, OptimisticButton } from "@/shared/ui/buttons";
import { Card } from "@/shared/ui/cards";
import HeartIcon from "@/shared/ui/icons/heart-icon";
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Text className="text-4xl font-extrabold text-primary drop-shadow-primary">
        Kuku
      </Text>
      <Card isHoverable isPressable header={<div></div>}>
        <div className="w-full h-full">
          <h1 className="text-2xl font-semibold">{t("general.welcome")}</h1>
        </div>
      </Card>
      <ThemeSwitcher />
      <Tooltip isOpen delay={100} content="Tooltip">
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
