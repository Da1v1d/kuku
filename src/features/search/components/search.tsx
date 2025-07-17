"use client";

import {
  musicplayerSelectors,
  useMusicPlayerStore,
} from "@/features/players/model/store/music-player.store";
import { SearchApi } from "@/features/search/model/api/search.api";
import { useDebounce } from "@/shared/hooks";
import { TODO } from "@/shared/lib/types";
import useTranslation from "@/shared/localization/use-translation";
import { Card } from "@/shared/ui/cards";
import { Image } from "@/shared/ui/images";
import { Input } from "@/shared/ui/inputs";
import { AudioSlider } from "@/shared/ui/sliders";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const t = useTranslation();
  const queryClient = useQueryClient();
  const onOpen = useMusicPlayerStore(musicplayerSelectors.open);
  const setMusicId = useMusicPlayerStore(musicplayerSelectors.setMusicId);
  const next = useRef("");

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data, refetch, promise } = useQuery({
    queryFn: () => SearchApi.search({ query: debouncedSearch }),
    queryKey: [SearchApi.SEARCH_QUERY_KEY, debouncedSearch],
    // structuralSharing(oldData: TODO, newData: TODO) {
    //   next.current = newData.next;
    //   return newData;
    // },
    enabled: !!debouncedSearch,
  });

  next.current = data?.next || "";

  const onPress = (musicId: string) => () => {
    setMusicId(musicId);
    onOpen();
  };

  return (
    <div className="p-4 min-h-screen space-y-4">
      <Input
        placeholder={t("fields.search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap justify-between gap-y-4">
        {data?.data?.map((item) => (
          <Card
            onPress={onPress(item.preview)}
            isPressable
            className="w-[240px] h-[240px]  p-0 relative hover:cursor-pointer"
            classNames={{
              body: "p-0 ",
              header: "p-2 absolute z-10 top-1 text-white",
            }}
            key={item.id}
            headerContent={
              <p className="bg-white py-1 px-2 rounded-lg text-black">
                {item.title}
              </p>
            }
          >
            <Image
              removeWrapper
              className="object-cover z-0 w-full h-full "
              src={item.album.cover_big}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

const AudioProgress = ({
  durationSeconds,
  sound,
  isPlaying,
  pause,
  play,
}: TODO) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        setProgress(sound.seek() as number);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [sound, isPlaying]);

  return (
    <div className="flex-1">
      <AudioSlider
        progress={Math.round(progress)}
        duration={durationSeconds}
        aria-label="Progress-slider"
        step={0.1}
        onClick={() => {}}
        onChange={(value) => {
          //   pause();
          sound?.seek(value);
        }}
        onChangeEnd={(value) => {
          //   play();
        }}
        value={progress}
        minValue={0}
        maxValue={durationSeconds}
      />
    </div>
  );
};

export default Search;
