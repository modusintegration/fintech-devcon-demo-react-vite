import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";

function postWithdraw(
  servicerId: "csi" | "mambu",
  accountId: string,
  amount: string
) {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", servicerId);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const raw = JSON.stringify({
    amount,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseURL}/accounts/${accountId}/withdrawals`, requestOptions)
    .then((response) => response.json())
    .then((result) => result);
}

export default postWithdraw;
