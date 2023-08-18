import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";

function postDeposit(
  servicerId: "csi" | "mambu",
  accountId: string,
  amount: string
) {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", servicerId);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const raw = JSON.stringify({
    transactionType: "CASH",
    amount,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseURL}/accounts/${accountId}/deposits`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
}

export default postDeposit;
