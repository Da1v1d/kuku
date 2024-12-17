"use client";

import ThemeSwitcher from "@/shared/components/@core/theme-switch";
import { Button } from "@/shared/components/buttons";
import IconButton from "@/shared/components/buttons/icon-button";
import { Card } from "@/shared/components/cards";
import { Modal } from "@/shared/components/modals";
import { Select, SelectItem } from "@/shared/components/selects";
import HeartIcon from "@/shared/icons/heart-icon";
import { useTranslations } from "next-intl";
import { useState } from "react";
// import { Select, SelectItem } from "@nextui-org/react";

const options = [{ label: "Option 1", key: "1", name: "Option 1" }];

export default function Home() {
  const [open, setOpen] = useState(false);

  const t = useTranslations();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card isHoverable isPressable header={<div></div>}>
        <div className="w-full h-full">
          <h1 className="text-2xl font-semibold">{t("general.welcome")}</h1>
        </div>
      </Card>
      <ThemeSwitcher />
      <IconButton onClick={() => setOpen((prev) => !prev)}>
        <HeartIcon fill={open ? "red" : "transparent"} />
      </IconButton>
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
