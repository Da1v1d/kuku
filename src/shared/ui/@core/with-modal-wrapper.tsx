"use client";

import {
  selectMusicPlayerIsOpen,
  useMusicPlayerStore,
} from "@/features/players/model/store/music-player.store";
import Client from "@/shared/ui/@core/client";
import { cn } from "@heroui/theme";

const WithModalWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isOpen = useMusicPlayerStore(selectMusicPlayerIsOpen);

  return (
    <Client>
      <div
        className={cn("", {
          "pb-24": isOpen,
        })}
      >
        {children}
      </div>
    </Client>
  );
};

export default WithModalWrapper;
