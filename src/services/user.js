import customAxios from "../lib/customAxios";

class UserService {
  createUser(name,email, role) {
    return customAxios
      .post("users/course", { name,email,role });
  }
  getCourseList(){
    return customAxios.get("users/course");
  }

}
export default new UserService();