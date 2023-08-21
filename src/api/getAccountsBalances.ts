import { Balances } from "../types/balances";
import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";
import { balances } from "./mocks";

function getAccountsBalances(
  servicerId: "csi" | "mambu",
  accountId: string
): Promise<Balances | void> {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", servicerId);
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseURL}/accounts/${accountId}/balances`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

export default getAccountsBalances;
