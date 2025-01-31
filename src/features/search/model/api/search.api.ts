import { SearchResponse } from "@/features/search/lib/types";
import { DeezerListResponse } from "@/shared/lib/types";
import { DeezerService } from "@/shared/services/deezer.service";

export class SearchApi {
  /**
   * @constant QUERY_KEY - Unique query key.
   */

  public static SEARCH_QUERY_KEY = "search";

  public static search = async ({
    query,
    next,
  }: {
    query?: string;
    next?: string;
  }) => {
    return DeezerService.get<DeezerListResponse<SearchResponse>>(
      next ? next : `/search?q=${query}`
    );
  };
}
