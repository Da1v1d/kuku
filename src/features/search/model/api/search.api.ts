import { SearchResponse } from "@/features/search/lib/types";
import { DeezerListResponse } from "@/shared/lib/types";
import { DeezerService } from "@/shared/services/deezer.service";

export class SearchApi {
  public static search = async (query: string) => {
    return DeezerService.get<DeezerListResponse<SearchResponse>>(
      `/search?q=${query}`
    );
  };
}
