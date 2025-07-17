import {
  DEEZER_API_HOST,
  DEEZER_API_KEY,
  DEEZER_API_URL,
} from "@/shared/lib/constants";
import { RapidApiService } from "@/shared/services/rapid-api.service";

class DeezerServiceInstance extends RapidApiService {
  constructor() {
    super({
      url: DEEZER_API_URL,
      key: DEEZER_API_KEY,
      host: DEEZER_API_HOST,
    });
  }
}

export const DeezerService = new DeezerServiceInstance();
