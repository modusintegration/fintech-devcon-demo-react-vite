import { AccountDetails } from "../types/transactions";
import { getAccessToken } from "../utils/getAccessToken";
import { baseURL } from "./constants";
import { transactions } from "./mocks";

function getAccountTransactions(
  servicerId: "csi" | "mambu",
  accountId: string
): Promise<AccountDetails | void> {
  const myHeaders = new Headers();
  myHeaders.append("servicerId", servicerId);
  myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  if (servicerId === "csi") return Promise.resolve(transactions);
  return fetch(`${baseURL}/accounts/${accountId}/transactions`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

export default getAccountTransactions;
