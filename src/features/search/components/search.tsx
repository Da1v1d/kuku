"use client";

import { SearchApi } from "@/features/search/model/api/search.api";
import useAudio from "@/shared/hooks/use-audio";
import { TODO } from "@/shared/lib/types";
import IconButton from "@/shared/ui/buttons/icon-button";
import { useQuery } from "@tanstack/react-query";
import { CirclePlay } from "lucide-react";
import { useEffect, useState } from "react";

const Search = () => {
  const search = useQuery({
    queryFn: () => SearchApi.search("eminem"),
    queryKey: ["search"],
  });

  const { play, pause, duration, sound } = useAudio(
    "https://cdnt-preview.dzcdn.net/api/1/1/a/e/b/0/aeb58f2f63ee57fb9c47cbe8fb5ccdaa.mp3?hdnea=exp=1737824809~acl=/api/1/1/a/e/b/0/aeb58f2f63ee57fb9c47cbe8fb5ccdaa.mp3*~data=user_id=0,application_id=42~hmac=a5a3d98c251de203f8cbe3db010e9a342cd639c2734cfa6b4ab59e05b42fa6f2"
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
    <>
      {/* {(duration! / 1000)} */}
      {Math.round(duration! / 1000)}
      <div style={{ width: 300 }}>
        <IconButton onClick={onPlay}>
          <CirclePlay
            className="rounded-lg"
            // color={PRIMARY_COLOR}
            // fill={PRIMARY_COLOR}
          />
        </IconButton>

        {/* Progress Bar */}
        <Progress
          durationSeconds={durationSeconds}
          sound={sound}
          isPlaying={isPlaying}
        />
      </div>
    </>
  );
};

const Progress = ({ durationSeconds, sound, isPlaying }: TODO) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        setProgress(sound.seek() as number);
      }
    }, 100); // every 0.5s
    return () => clearInterval(interval);
  }, [sound, isPlaying]);

  return (
    <div>
      <div style={{ marginTop: 10 }}>
        <div
          style={{
            height: 8,
            backgroundColor: "#ccc",
            position: "relative",
          }}
        >
          {/* The filled portion */}
          <div
            style={{
              height: "100%",
              width: durationSeconds
                ? `${(progress / durationSeconds) * 100}%`
                : "0%",
              backgroundColor: "tomato",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>

      <p>
        {Math.round(progress)}s / {durationSeconds}s
      </p>
    </div>
  );
};

export default Search;
