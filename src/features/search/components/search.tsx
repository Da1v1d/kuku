"use client";

import { SearchApi } from "@/features/search/model/api/search.api";
import useAudio from "@/shared/hooks/use-audio";
import PauseIcon from "@/shared/icons/pause-icon";
import PlayIcon from "@/shared/icons/play-icon";
import { TODO } from "@/shared/lib/types";
import IconButton from "@/shared/ui/buttons/icon-button";
import { AudioSlider } from "@/shared/ui/sliders";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Search = () => {
  const search = useQuery({
    queryFn: () => SearchApi.search("eminem"),
    queryKey: [SearchApi.SEARCH_QUERY_KEY],
  });

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

  console.log(isPlaying);
  return (
    <div className="p-4 min-h-screen">
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
