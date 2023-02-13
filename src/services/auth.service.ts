import { AxiosResponse, http } from "./http.service";
import { LoginResponse } from "../app-types/login.type";

export const login = async (
  email: string,
  password: string
): Promise<AxiosResponse<LoginResponse>> => {
  return await http.post<LoginResponse>(
    "https://api.codingthailand.com/api/login",
    {
      email: email,
      password: password,
    }
  );
};

export const logout = (): void => {
  localStorage.removeItem("token");
};

export const getProfile = () => {};
