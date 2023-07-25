import { AUTH_SERVER_BASE_URL } from "./constants";

export const refreshToken = async () => {
  const response = await fetch(`${AUTH_SERVER_BASE_URL}/refresh-token`, {
    method: "POST",
    credentials: "include"
  });
  const data = await response.json();

  return data;
};
