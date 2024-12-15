class UserSessionService {
  public static getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}

export default UserSessionService;
