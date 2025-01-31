"use client";

import { useRouter } from "@/shared/localization/routing";
import { Text } from "@/shared/ui/texts";
import { Link } from "@heroui/react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Text className="text-[64px] font-bold text-primary">BRATIIISHKA</Text>
      <Text className="text-[64px] font-bold text-primary">TI NE TUDA ZASHOOOL</Text>
      <Link onPress={() => router.back()}>Go back</Link>
    </div>
  );
}
