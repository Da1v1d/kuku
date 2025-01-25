"use client";

import { SearchApi } from "@/features/search/model/api/search.api";
import useAudio from "@/shared/hooks/use-audio";
import PauseIcon from "@/shared/icons/pause-icon";
import PlayIcon from "@/shared/icons/play-icon";
import { TODO } from "@/shared/lib/types";
import { OptimisticButton } from "@/shared/ui/buttons";
import { Progress } from "@/shared/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Search = () => {
  const search = useQuery({
    queryFn: () => SearchApi.search("eminem"),
    queryKey: ["search"],
  });

  const { play, pause, duration, sound } = useAudio(
    "https://cdnt-preview.dzcdn.net/api/1/1/a/e/b/0/aeb58f2f63ee57fb9c47cbe8fb5ccdaa.mp3?hdnea=exp=1737824809~acl=/api/1/1/a/e/b/0/aeb58f2f63ee57fb9c47cbe8fb5ccdaa.mp3*~data=user_id=0,application_id=42~hmac=a5a3d98c251de203f8cbe3db010e9a342cd639c2734cfa6b4ab59e05b42fa6f2",

    {
      volume: 0.1,
    }
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const durationSeconds = duration ? Math.round(duration / 1000) : 0;

  // This function updates the progress state by reading `sound.seek()`

  return (
    <div className="m-4">
      {/* {(duration! / 1000)} */}
      {Math.round(duration! / 1000)}
      <div className="flex items-center gap-2">
        <OptimisticButton isIcon onClick={onPlay}>
          {(isActive) => (isActive ? <PauseIcon /> : <PlayIcon />)}
        </OptimisticButton>

        {/* Progress Bar */}
        <AudioProgress
          durationSeconds={durationSeconds}
          sound={sound}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};

const AudioProgress = ({ durationSeconds, sound, isPlaying }: TODO) => {
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
      <Progress
        classNames={{
          base: " w-full",
        //   track: " w-12",
        }}
        aria-label="Progress"
        size="sm"
        color="primary"
        className="w-full"
        value={progress}
        minValue={0}
        maxValue={durationSeconds}
      />
    </div>
  );
};

export default Search;
