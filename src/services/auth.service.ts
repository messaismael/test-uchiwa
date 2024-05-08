import { isNil } from "lodash-es";
import { storage } from "utils/storage";

export default class AuthService {
  static processLogin(user: any): void {
    storage.set("ACTIVE_USER", user);
  }

  static processLogout(): void {
    storage.remove("ACTIVE_USER");
  }

  static getAccessToken(): string | null {
    return storage.get<string>("ACTIVE_USER");
  }

  static getUserInfos(): any | null {
    const user = storage.get("ACTIVE_USER");

    if (isNil(user)) return null;
    return user;
  }

  static setUserInfos(user: any): void {
    storage.set("ACTIVE_USER", user);
  }

  static isLoggedIn(): boolean {
    return AuthService.getAccessToken() != null;
  }
}
