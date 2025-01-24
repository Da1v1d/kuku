import { TODO } from "@/shared/lib/types";
import useSound from "use-sound";

const useAudio = (url: string, options?: TODO) => {
  const [play, {...rest}] = useSound(url, options);
  return { play, ...rest };
};

export default useAudio;
