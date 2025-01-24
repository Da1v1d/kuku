class AuthService {
  public static getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}

export default AuthService;
