"use client";

import ThemeSwitcher from "@/shared/components/@core/theme-switch";
import { Button, OptimisticButton } from "@/shared/components/buttons";
import { Card } from "@/shared/components/cards";
import { Modal } from "@/shared/components/modals";
import { Select, SelectItem } from "@/shared/components/selects";
import Text from "@/shared/components/texts/text";
import HeartIcon from "@/shared/icons/heart-icon";
import { wait } from "@/shared/lib/utils";
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Text className="text-4xl font-extrabold text-primary drop-shadow-primary">
        Kuku
      </Text>
      <Card isHoverable isPressable header={<div></div>}>
        <div className="w-full h-full">
          <h1 className="text-2xl font-semibold">{t("general.welcome")}</h1>
        </div>
      </Card>
      <ThemeSwitcher />
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
