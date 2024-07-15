import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

type Result = {
  success: boolean;
  data: Array<object>;
  username: string;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", baseUrlApi("getAsyncRoutes"));
};

export const getSelectUsers = username => {
  return http.request<Result>(
    "get",
    baseUrlApi("getSelectUsers?username=" + username)
  );
};
