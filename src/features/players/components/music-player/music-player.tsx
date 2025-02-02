"use client";

import {
  musicplayerSelectors,
  useMusicPlayerStore,
} from "@/features/players/model/store/music-player.store";
import useAudio from "@/shared/hooks/use-audio";
import PauseIcon from "@/shared/icons/pause-icon";
import PlayIcon from "@/shared/icons/play-icon";
import { TODO } from "@/shared/lib/types";
import IconButton from "@/shared/ui/buttons/icon-button";
import { Card } from "@/shared/ui/cards";
import { AudioSlider } from "@/shared/ui/sliders";
import { cn } from "@heroui/theme";
import { useEffect, useState } from "react";

const MusicPlayer = () => {
  const isOpen = useMusicPlayerStore(musicplayerSelectors.isOpen);
  const onClose = useMusicPlayerStore(musicplayerSelectors.close);
  const musicId = useMusicPlayerStore(musicplayerSelectors.musicId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { play, pause, duration, sound } = useAudio(musicId!, {
    volume: 1,
    onpause: () => setIsPlaying(false),
    onplay: () => setIsPlaying(true),
    onend: () => {
      // setIsPlaying(false);
      // sound?.seek(1);
      // onClose();
    },
    onload: () => {
      setIsLoaded(true);
      play();
    },

    onloaderror: () => {
      // setIsPlaying(false);
    },
    loop: true,
    autoplay: true,
  });

  const onPlay = () => {
    if (isPlaying) pause();
    else play();
  };

  const durationSeconds = duration ? Math.round(duration / 1000) : 0;

  // useEffect(() => {
  //   if (isOpen) {
  //     play();
  //   } else {
  //     pause();
  //   }
  // }, [isOpen]);

  return (
    <Card
      classNames={{
        base: cn(
          "fixed flex w-full p-4 rounded-none bottom-0 left-0 right-0 h-20  z-50",
          {
            hidden: !isOpen,
          }
        ),
        body: "flex flex-row w-full items-center gap-2",
      }}
    >
      <>
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
      </>
    </Card>
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

export default MusicPlayer;
