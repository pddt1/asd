import customAxios from "../lib/customAxios";


class AuthService {
  login(email, password) {
    return customAxios
      .post("signin", { email, password });
  }
  checksession() {
    return customAxios
          .post("auth");
  }
  logOut(){
    localStorage.removeItem("user");
  }
}
export default new AuthService();