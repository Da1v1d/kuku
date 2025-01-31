import { useEffect } from "react";
import useSound from "use-sound";

export declare type SpriteMap = {
  [key: string]: [number, number];
};

type HookOptions<T = any> = T & {
  id?: string;
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
};

// howler-options.ts
export interface HowlCallbacks {
  onload?: () => void;
  onloaderror?: (id?: number, error?: any) => void;
  onplayerror?: (id?: number, error?: any) => void;
  onplay?: (id?: number) => void;
  onend?: (id?: number) => void;
  onpause?: (id?: number) => void;
  onstop?: (id?: number) => void;
  onmute?: (id?: number) => void;
  onvolume?: (id?: number) => void;
  onrate?: (id?: number) => void;
  onseek?: (id?: number) => void;
  onfade?: (id?: number) => void;
  onunlock?: () => void;
}

export interface HowlOptions extends HowlCallbacks {
  /**
   * The volume of the specific track, from 0.0 to 1.0.
   * Default is 1.0
   */
  volume?: number;

  /**
   * Set to true to force HTML5 Audio. This should be used
   * for large audio files so you don't have to wait for
   * the full file to be downloaded/decoded before playing.
   */
  html5?: boolean;

  /**
   * Set to true to automatically loop the sound forever.
   * Default is false.
   */
  loop?: boolean;

  /**
   * Automatically begin downloading the audio file when defined.
   * If using HTML5 Audio, you can set this to 'metadata' to only
   * preload the file's metadata. Defaults to true.
   */
  preload?: boolean | "metadata";

  /**
   * Set to true to automatically start playback when sound is loaded.
   * Default is false.
   */
  autoplay?: boolean;

  /**
   * Set to true to load the audio muted. Default is false.
   */
  mute?: boolean;

  /**
   * Define a sound sprite. The offset and duration are in milliseconds.
   * The optional third parameter is whether it should loop.
   */
  sprite?: {
    [key: string]: [number, number, boolean?];
  };

  /**
   * The rate of playback. 0.5 to 4.0, with 1.0 being normal speed.
   * Default is 1.0
   */
  rate?: number;

  /**
   * The size of the inactive sounds pool. Once sounds are stopped or finish,
   * they are marked ended and ready for cleanup. Default is 5.
   */
  pool?: number;

  /**
   * If your files have no extension or you want to specify
   * multiple formats, provide an array of strings, e.g. ['mp3', 'webm'].
   */
  format?: string[];

  /**
   * Configure XHR options for Web Audio loading:
   * method (GET|POST), custom headers, and withCredentials.
   */
  xhr?: {
    method?: string;
    headers?: Record<string, string>;
    withCredentials?: boolean;
  };
}

const useAudio = (url: string, options?: HookOptions<HowlOptions>) => {
  const [play, { ...rest }] = useSound(url, options);

  useEffect(() => {
    rest.sound?.unload();
  }, [url]);

  return { play, ...rest };
};

export default useAudio;
