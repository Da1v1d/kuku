import { DeezerService } from "@/shared/services/deezer.service";

export class SearchApi {
  public static search = async (query: string) => {
    return DeezerService.get(`/search?q=${query}`);
  };
}
