"use client";

import { SearchApi } from "@/features/search/model/api/search.api";
import useAudio from "@/shared/hooks/use-audio";
import PauseIcon from "@/shared/icons/pause-icon";
import PlayIcon from "@/shared/icons/play-icon";
import { TODO } from "@/shared/lib/types";
import IconButton from "@/shared/ui/buttons/icon-button";
import { Card } from "@/shared/ui/cards";
import { Image } from "@/shared/ui/images";
import { AudioSlider } from "@/shared/ui/sliders";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const queryClient = useQueryClient();
  const next = useRef("");

  const { data, refetch, promise } = useQuery({
    queryFn: () => SearchApi.search({ query: "macan" }),
    queryKey: [SearchApi.SEARCH_QUERY_KEY],
    structuralSharing(oldData: TODO, newData: TODO) {
      next.current = newData.next;
      return newData;
    },
  });

  next.current = data?.next || "";

  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.prefetchQuery({
        queryKey: [SearchApi.SEARCH_QUERY_KEY],
        queryFn: () => SearchApi.search({ next: next.current }),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const { play, pause, duration, sound } = useAudio(
    "https://cdnt-preview.dzcdn.net/api/1/1/a/e/b/0/aeb58f2f63ee57fb9c47cbe8fb5ccdaa.mp3?hdnea=exp=1737824809~acl=/api/1/1/a/e/b/0/aeb58f2f63ee57fb9c47cbe8fb5ccdaa.mp3*~data=user_id=0,application_id=42~hmac=a5a3d98c251de203f8cbe3db010e9a342cd639c2734cfa6b4ab59e05b42fa6f2",

    {
      volume: 0.1,
      onpause: () => setIsPlaying(false),
      onplay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false);
        sound.seek(0);
      },
    }
  );

  const onPlay = () => {
    if (isPlaying) pause();
    else play();
  };

  const durationSeconds = duration ? Math.round(duration / 1000) : 0;

  return (
    <div className="p-4 min-h-screen space-y-4">
      {data?.data?.map((item) => (
        <Card
          isPressable
          className="w-[240px] h-[240px] p-0 relative"
          classNames={{
            body: " p-0 ",
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
      <div className="flex items-center gap-2">
        <IconButton onPress={onPlay}>
          {isPlaying ? (
            <PauseIcon className="animate-appearance-in duration-500" />
          ) : (
            <PlayIcon className="animate-appearance-in duration-500 " />
          )}
        </IconButton>

        <AudioProgress
          play={play}
          pause={pause}
          durationSeconds={durationSeconds}
          sound={sound}
          isPlaying={isPlaying}
        />
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
